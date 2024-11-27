import { useState, useEffect } from "react";
import LikeButton from "./LikeButton";
import DeleteButton from "./DeleteButton";
import deletePost from "../_actions/deletePost";
import Link from "next/link";

import { style } from "../constants/style"

interface Post {
  id: number;
  subject: string;
  detail: string;
  userId: number;
  user: {
    name: string;
  };
  likedBy: {
    id: number;
  }[];
}

interface User {
  id: number;
  name: string;
  email: string;
}

const PostCard: React.FC<{ post: Post; user: User | null }> = ({ post, user }) => {
  const likedBy = post.likedBy ?? [];  // Use nullish coalescing (??) to ensure it's always an array

  // Calculate initial like status and like count
  const initialIsLiked = likedBy.some((likedUser) => likedUser.id === user?.id);
  const initialLikeCount = likedBy.length;

  // Pass the deletePost function and postId to DeleteButton directly
  return (
    <div key={post.id} className="border-2 border-gray-800 mr-4 w-1/4 h-1/4 rounded-lg group">
      <div className="p-4 relative">
        <Link href={`/blog/${post.id}`} className="mb-2 font-bold group-hover:underline">{post.subject}</Link>
        <hr />
        <div className="min-h-24 mt-2 line-clamp-4">{post.detail}</div>
            {/* <Link href={`/blog/${post.id}`} className="w-full h-full p-1 absolute top-0 left-0"></Link> */}
        <br />
        <div className="flex justify-between">
          <div className="font-light">By: {post.user.name}</div>
          <span >
            <LikeButton
              postId={post.id}
              user={user}
              initialIsLiked={initialIsLiked}
              initialLikeCount={initialLikeCount}
            />
          </span>
        </div>
      </div>

      {user && (user.id === post.userId || user.id === 1) ?
        <div className="flex justify-center items-center mb-2 max-h-0 overflow-hidden group-hover:max-h-10 transition-all duration-300 ease-in-out">
          <p>
            <Link href={{
              pathname: '/blog/edit',
              query: { id: post.id, subject: post.subject, detail: post.detail }
            }}
              className={`${style} border-0 border-indigo-50`}>
              ✍️
            </Link>
          </p>
          |
          <DeleteButton
            id={post.id}
            deletePost={deletePost}
          />
        </div>
        :
        ""}
    </div>
  );
};

export default PostCard;
