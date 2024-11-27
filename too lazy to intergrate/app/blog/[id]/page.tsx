import prisma from "@/utils/db";
import Link from "next/link";
import { redirect } from "next/navigation";


export default async function page({ params }: { params: { id: string } }) {
    if (!params.id) { redirect("/blog") }

    const post = await prisma.post.findUnique({
        where: { id: parseInt(params.id) }
    })

    if (!post) {
        return <div>Post not found</div>
    }

    return (<>
        <div>
            <div className="mb-2 flex justify-between">
                <div className="font-bold">{post.subject}</div>
                {/* <div className="flex-1 text-right font-light">By: {post.user.name}</div> */}
            </div>
            <hr />
            <div className="min-h-24 mt-2 line-clamp-4">{post.detail}</div>
        </div>
        <div className="mt-10">

        <Link href="/blog">Back</Link>
        </div>
    </>
    )
}