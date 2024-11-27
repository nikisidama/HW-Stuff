// pages/api/like.ts

import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/utils/db";  // Adjust the path if necessary

// API endpoint to like/unlike a post
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        try {
            const { postId, userId } = req.body;

            if (!postId || !userId) {
                return res.status(400).json({ error: "Post ID and User ID are required." });
            }
            // Fetch the post and include likedBy relation
            const post = await prisma.post.findUnique({
                where: { id: postId },
                include: { likedBy: true },
            });

            if (!post) {
                return res.status(404).json({ error: "Post not found." });
            }

            // Check if the user already liked the post
            const alreadyLiked = post.likedBy?.some((likedUser) => likedUser.id === userId);

            if (alreadyLiked) {
                // Unlike the post
                await prisma.post.update({
                    where: { id: postId },
                    data: {
                        likedBy: {
                            disconnect: { id: userId },
                        },
                    },
                });
                return res.status(200).json({ message: "Post unliked successfully." });
            } else {
                // Like the post
                await prisma.post.update({
                    where: { id: postId },
                    data: {
                        likedBy: {
                            connect: { id: userId },
                        },
                    },
                });
                return res.status(200).json({ message: "Post liked successfully." });
            }
        } catch (error) {
            console.error("Server error:", error);
            return res.status(500).json({ error: "Internal server error." });
        }
    } else {
        return res.status(405).json({ error: "Method Not Allowed" });
    }
}
