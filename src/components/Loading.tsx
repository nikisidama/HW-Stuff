import skul from "@/components/skul.gif"

import localFont from "next/font/local";

// const monoCraft = localFont({
//     src: "@/components/asset/Monocraft",
//     variable: "--font-monocraft-mono",
// });

export default function Loading() {
    return (
        <div className="absolute top-0 left-0 h-screen w-screen text-4xl bg-black flex flex-col justify-center items-center select-none cursor-progress z-50">
            <img
                src={skul.src}
                alt="💀"
            />
            <span>
                Loading...
            </span>
        </div>
    )
}