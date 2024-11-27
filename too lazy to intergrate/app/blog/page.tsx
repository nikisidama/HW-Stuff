import prisma from "@/utils/db"
import Link from "next/link";
import Logout from "./_component/Logout";
import { getSession } from "@/utils/loginUser";
import DeleteButton from "./_component/DeleteButton";
import deletePost from "./_actions/deletePost";
import { style } from "./constants/style"
import LikeButton from "./_component/LikeButton";
import PostCard from "./_component/BlogCard";

export default async function Blog() {
    const posts = await prisma.post.findMany({
        include: {
            user: true,
            likedBy: true
        },
    });

    const user = await getSession()

    return (<>
        <hr /> <br />
        <Link href="/blog/new" className="border-2 border-black p-2 m-4 rounded-lg">New</Link>
        <Link href="/blog/user" className="border-2 border-black p-2 m-4 rounded-lg">User</Link>
        <Link href="/" className="border-2 border-black p-2 m-4 rounded-lg">Home</Link>
        <div className="flex flex-wrap gap-4 mt-8">
            {posts.map((post) =>
                <PostCard post={post} user={user} />
            )}
        </div>
    </>)
}
