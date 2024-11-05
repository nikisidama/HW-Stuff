"use client"

import { useEffect, useState } from "react";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";

import Main from "@/components/Main";
import Audio from "@/components/audio";

import { Arimo, Roboto, Montserrat, Bebas_Neue, Shadows_Into_Light_Two } from "next/font/google";

const roboto = Roboto({ weight: '900', subsets: ['latin'] })
const arimo = Arimo({ weight: '700', subsets: ['latin'] })
const bebasNeue = Bebas_Neue({ weight: '400', subsets: ['latin'] })
const shadowsIntoLightTwo = Shadows_Into_Light_Two({ weight: '400', subsets: ['latin'] })

const monoCraft = localFont({
  src: "../fonts/Monocraft.ttf",
  variable: "--font-monocraft-mono",
  weight: "100 900",
});


type Theme = {
  audio: string[]
  background: string[]
  color: string
  font: string
  image: string[]
}

const generateRandomValues = () => {
  document.documentElement.style.setProperty('--random-x', `${Math.random() * 256}px`);
  document.documentElement.style.setProperty('--random-y', `${Math.random() * 256}px`);
};

const themes = {
  imblue: {
    audio: ["./asset/audio/FortniteBalls.mp3"],
    background: ["https://upload.wikimedia.org/wikipedia/commons/7/70/Solid_white.svg"],
    color: "text-black",
    font: arimo.className,
    image: ["https://bluemoji.io/cdn-proxy/646218c67da47160c64a84d5/66b3e2b30608f3f68caf31d3_94.png", "https://bluemoji.io/cdn-proxy/646218c67da47160c64a84d5/66b3e5760608f3f68cb0b04b_93.png", "https://bluemoji.io/cdn-proxy/646218c67da47160c64a84d5/66b3e58387f7cb984dde9eb7_92.png", "https://bluemoji.io/cdn-proxy/646218c67da47160c64a84d5/66b3ea5489be478613512121_43.png", "https://bluemoji.io/cdn-proxy/646218c67da47160c64a84d5/66b3eb0533090c8030cdab4e_29.png", "https://bluemoji.io/cdn-proxy/646218c67da47160c64a84d5/66b3e60bb6da0952c78d7c4c_81.png", "https://bluemoji.io/cdn-proxy/646218c67da47160c64a84d5/66b3e5fbd9bbb8343a2928d0_82.png", "https://bluemoji.io/cdn-proxy/646218c67da47160c64a84d5/66b3e5e1ccde70cabd67779a_84.png", "https://bluemoji.io/cdn-proxy/646218c67da47160c64a84d5/66b3e5d0c2ab246786ca1d5e_86.png", "https://bluemoji.io/cdn-proxy/646218c67da47160c64a84d5/66b3e5bd10648166d945ef2f_88.png", "https://bluemoji.io/cdn-proxy/646218c67da47160c64a84d5/66b3e594607b5d1305d4f5b7_90.png", "https://bluemoji.io/cdn-proxy/646218c67da47160c64a84d5/66b3e5f2a6470bf89b0a2bc3_79.png", "https://bluemoji.io/cdn-proxy/646218c67da47160c64a84d5/66b3e688ccde70cabd67e8ec_68.png", "https://bluemoji.io/cdn-proxy/646218c67da47160c64a84d5/66b3ea6b437be789ded213fd_45.png", "https://bluemoji.io/cdn-proxy/646218c67da47160c64a84d5/66b3e9ab1c71c3adb2b2e71c_59.png", "https://bluemoji.io/cdn-proxy/646218c67da47160c64a84d5/66e99db1f5c63f46f7415051_020.png", "https://bluemoji.io/cdn-proxy/646218c67da47160c64a84d5/66b3ec359922e31368c2c58e_03.png", "https://bluemoji.io/cdn-proxy/646218c67da47160c64a84d5/66b3eb8b62002e43c3fa2eea_01.png", "https://bluemoji.io/cdn-proxy/646218c67da47160c64a84d5/66b3e99627091900881d8abc_61.png", "https://bluemoji.io/cdn-proxy/646218c67da47160c64a84d5/66b3e9e11f8df07b5f1f9fc1_54.png", "https://bluemoji.io/cdn-proxy/646218c67da47160c64a84d5/66b3eba284d9bc814570814d_18.png"]
  },
  skibi: {
    audio: ["./asset/audio/GiveItToMexSkibid.mp3", "./asset/audio/SkibidiToilet.mp3"],
    background: ["https://thypix.com/wp-content/uploads/2024/01/skibidi-toilet-phone-wallpapers-85-thypix-400x800.jpg", "https://thypix.com/wp-content/uploads/2024/01/skibidi-toilet-phone-wallpapers-40-thypix-400x800.jpg"],
    color: "text-white",
    font: bebasNeue.className,
    image: ["https://upload.wikimedia.org/wikipedia/en/thumb/0/09/Skibidi_toilet_screenshot.webp/237px-Skibidi_toilet_screenshot.webp.png"]
  },
  wolf: {
    audio: ["./asset/audio/auuuulobosolitario.mp3", "./asset/audio/MareuxThePerfectGirlRemix.mp3"],
    background: ["https://i.kym-cdn.com/photos/images/original/002/410/583/050.jpg", "https://i.kym-cdn.com/photos/images/original/002/410/683/01d.jpg", "https://i.kym-cdn.com/photos/images/original/002/410/685/b39.jpg"],
    color: "text-white",
    font: shadowsIntoLightTwo.className,
    image: ["https://static-00.iconduck.com/assets.00/wolf-face-emoji-512x502-j1xiz5kk.png"]
  },
  miner: {
    audio: [],
    background: ["https://gamehall.com.br/wp-content/uploads/2020/07/minecraft-mundo-tela-titulo.jpg"],
    font: monoCraft.className,
    image: ["https://tr.rbxcdn.com/d57b1e4c21ac21b4e293ac8575cadef3/420/420/Hat/Png"]
  }
  // "https://www.myinstants.com/media/sounds/giga-chad-theme.mp3"
}

function getRandomItem<T>(arr: T[]) {
  return arr[Math.floor(Math.random() * arr.length)]
}

const links = {
  Home: { href: '/', isNew: false },
  "Current homework": { href: '/homework/apione', isNew: true },
  "Final Project": { href: '/example/finallol', isNew: true },
  "Pre Final": { href: '/example/prefinal', isNew: true },
  "Homework 6": { href: '/homework/furniture', isNew: false }, 
  "Homework 8": { href: '/homework/musicshop', isNew: false }, 
  "Example - Form stats": { href: '/example/formstat', isNew: false }, 
  "Example - Server form": { href: '/example/serverform', isNew: false }, 
  "Example - To Do List": { href: '/example/todo', isNew: false }, 
  "Example - DB": { href: '/example/dbex', isNew: false }, 
  "Example - Pre-Final": { href: '/example/prefinal', isNew: false }, 
  "Ajarn Github": { href: 'https://github.com/wwarodom/web_programming', isNew: false },
  "My Github": { href: 'https://github.com/nikisidama/WebProgramingNextJs', isNew: false },
  "Other coming soon": { href: '/', isNew: false },
}

const MuteIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 12L21 12" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M19 16L21 18" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M19 8L21 6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 4L20 20" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 5L5 19L8 16H12L16 20L16 4L12 8H8L5 5Z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const UnmuteIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 8V16H12L16 20V4L12 8H8Z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M19 12L21 12" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17.291 17.291L18.7 18.7" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17.291 6.709L18.7 5.3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Home() {
  const linkArray = Object.values(links)
  const [bg, setBG] = useState('')
  const [bgm, setBGM] = useState('')
  const [c, setColor] = useState('')
  const [f, setFont] = useState('')
  const [img, setIMG] = useState('')
  const [mute, setMute] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  const [orbits, setOrbits] = useState<number[]>([]);
  const totalOrbits = linkArray.length;

  useEffect(() => {
    const theme = getRandomItem(Object.values(themes)) as Theme
    theme.audio ? setBGM(getRandomItem(theme.audio)) : setBGM("./asset/audio/silence.mp3")
    theme.background ? setBG(getRandomItem(theme.background)) : setBG('')
    theme.color ? setColor(theme.color) : setColor('')
    theme.font ? setFont(theme.font) : setFont('')
    setIMG(getRandomItem(theme.image))
    setIsLoaded(true)
  }, []);

  useEffect(() => {
    for (let i = 0; i < totalOrbits; i++) {
      setTimeout(() => {
        setOrbits(prev => {
          const newOrbits = [...prev, i];
          return newOrbits;
        });
      }, i * 500); // Increase the delay to 1 second for each orbit
    }
  }, [totalOrbits])

  useEffect(() => {
    const interval = setInterval(generateRandomValues, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={"flex flex-col justify-center items-center min-h-screen font-[family-name:var(--font-geist-sans)] bg-contain bg-center overflow-hidden"}
      style={bg !== '' ? { backgroundImage: `url(${bg})` } : { background: "white" }}>
      <Audio src="./asset/audio/join.mp3" />
      {isLoaded && <Audio src={bgm} loop={true} muted={mute} />}
      <button
        onClick={() => setMute(!mute)}
        className={`fixed bottom-4 right-4 bg-transparent p-2 ${c}`}
        aria-label={mute ? "Unmute" : "Mute"}
      >
        {mute ? <MuteIcon /> : <UnmuteIcon />}
      </button>
      <main className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          <Image
            src={img ? img : "https://nextjs.org/icons/next.svg"}
            alt="You forgot something"
            width={256}
            height={256}
            className="animate-squish cursor-pointer absolute top-50 z-10"
            priority
          />

          {orbits.map((_, index) => (
            linkArray[index] && (
              <Link
                key={index}
                className={`z-20 absolute animate-orbit flex text-2xl ${c} ${f}`}
                href={linkArray[index].href}
                style={{
                  animationDelay: `${index * 0.5}s`, // Sync with the delay in useEffect
                }}
              >
                <span className={`${linkArray[index].isNew ? "animate-rainbow" : ''} hover:opacity-50`}>
                  {Object.keys(links)[index]}
                </span>
              </Link>
            )
          ))}
        </div>
        <Main />
        <div className="animate-glitch opacity-15">
          <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li className="mb-2">
              Get started by editing{" "}
              <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                src/app/page.tsx
              </code>
              .
            </li>
            <li>Save and see your changes instantly.</li>
          </ol>

          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert"
                src="https://nextjs.org/icons/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
              Deploy now
            </a>
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read our docs
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
