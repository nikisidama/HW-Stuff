"use client"

import { useState, useEffect } from "react";
import likePost from "../_actions/likePost";

interface User {
    id: number;
    name: string;
    email: string;
}

interface LikeButtonProps {
    postId: number;
    user: User | null; // User object or null if not logged in
    initialIsLiked?: boolean; // Optional initial liked state (to avoid extra API calls)
    initialLikeCount?: number; // Optional initial like count
}

const LikeButton: React.FC<LikeButtonProps> = ({
    postId,
    user,
    initialIsLiked = false,
    initialLikeCount = 0,
}) => {
    const [isLiked, setIsLiked] = useState<boolean>(initialIsLiked);
    const [likeCount, setLikeCount] = useState<number>(initialLikeCount); 

    const handleLike = async () => {
        if (!user) {
            console.error("User is not logged in.");
            return;
        }
    
        try {
            const result = await likePost(user, postId);
    
            if (result === "liked") {
                setIsLiked(true);
                setLikeCount((prev) => prev + 1);
            } else if (result === "unliked") {
                setIsLiked(false);
                setLikeCount((prev) => prev - 1);
            }
        } catch (error) {
            console.error("Error updating like status:", error);
        }
    };
    
    
    // Optionally, you can use a `useEffect` hook to refetch like data on mount if necessary
    useEffect(() => {
        if (initialIsLiked !== undefined) {
            setIsLiked(initialIsLiked);
        }
    }, [postId]);
    
    return (
        <button onClick={user ? handleLike : void 0}>
            {isLiked ? "❤️" : user ? "🖤" :  "🩷"} {likeCount}
        </button>
    );
};

export default LikeButton;
