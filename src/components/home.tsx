import Link from "next/link"
import skul from "@/components/skul.gif"

export default function Home() {
  return (
    <Link href={"/home"} className="absolute top-4 right-4 z-40 opacity-10 hover:opacity-100 transition-all">
        <img src={skul.src}/>
    </Link>
  )
}