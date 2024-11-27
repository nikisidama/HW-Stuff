"use server"

import prisma from "@/utils/db";  // Adjust path if necessary
import { revalidatePath } from "next/cache";

export default async function likePost(user: any, postId: number) {
    try {
        const post = await prisma.post.findUnique({
            where: { id: postId },
            include: { likedBy: true },
        });

        if (!post) {
            throw new Error('Post not found');
        }

        const isLiked = post.likedBy.some((likedUser) => likedUser.id === user.id);

        if (isLiked) {
            await prisma.post.update({
                where: { id: postId },
                data: {
                    likedBy: {
                        disconnect: { id: user.id }, 
                    },
                },
            });
            console.log(`Post ${postId} unliked by user ${user.id}`);
        } else {
            await prisma.post.update({
                where: { id: postId },
                data: {
                    likedBy: {
                        connect: { id: user.id }, 
                    },
                },
            });
            console.log(`Post ${postId} liked by user ${user.id}`);
        }
        revalidatePath(`/blog/${postId}`);

    } catch (error) {
        console.error("Error liking/unliking the post:", error);
    }
}
