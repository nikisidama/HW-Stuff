import Link from "next/link";
import localFont from "next/font/local";

import Main from "@/components/Main";

import { Roboto } from "next/font/google";

const monoCraft = localFont({
  src: "./fonts/Monocraft.ttf",
  variable: "--font-monocraft-mono",
  weight: "100 900",
});

export default function Gateway() {
  return (
    <div className={`absolute top-0 left-0 h-screen w-screen text-9xl bg-black flex flex-col justify-center items-center ${monoCraft.className}`}>
      <Main />
      <Link href={"/home"} className="hover:animate-shake">Start</Link>
      <img
        src="./asset/image/💀.gif"
        alt="💀"
        className="absolute top-3/4 left-3/4"
      />
    </div>
  );
}
