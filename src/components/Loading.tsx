import skul from "@/components/skul.gif"

export default function Loading() {
    return (
        <div className="absolute top-0 left-0 h-screen w-screen text-4xl bg-black flex flex-col justify-center items-center select-none z-50">
            <img
                src={skul.src}
                alt="💀"
            />
            Loading...
        </div>
    )
}