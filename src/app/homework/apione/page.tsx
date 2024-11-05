"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import localFont from "next/font/local";

import Main from "@/components/Main"
import Loading from "@/components/Loading"

type GitType = {
    login: string,
    id: number,
    node_id: string,
    avatar_url: string,
    gravatar_id: string,
    url: string,
    html_url: string,
    followers_url: string,
    following_url: string,
    gists_url: string,
    starred_url: string,
    subscriptions_url: string,
    organizations_url: string,
    repos_url: string,
    events_url: string,
    received_events_url: string,
    type: string,
    user_view_type: string,
    site_admin: boolean,
    name: string,
    company: string,
    blog: string,
    location: string,
    email: string,
    hireable: string,
    bio: string,
    twitter_username: string,
    public_repos: number,
    public_gists: number,
    followers: number,
    following: number,
    created_at: string,
    updated_at: string
}

type VercelType = {
    id: number,
    title: string,
    content: string,
    author: string,
    date: string,
    category: string,
}

type TypiCodeType = {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}

const geistSans = localFont({
    src: "../../fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});

const hubotSans = localFont({
    src: "../../fonts/HubotSansVF-Regular.ttf",
    variable: "--font-hubot-sans",
    weight: "100 900",
});

const monaSans = localFont({
    src: "../../fonts/MonaSansVF-Regular.ttf",
    variable: "--font-monasans-sans",
    weight: "100 900",
});

const monoCraft = localFont({
    src: "../../fonts/Monocraft.ttf",
    variable: "--font-monocraft-mono",
    weight: "100 900",
});

export default function page() {
    const [git, setGit] = useState<GitType>()
    const [vercel, setVercel] = useState<VercelType[]>()
    const [typi, setTypi] = useState<TypiCodeType[]>()

    useEffect(() => {
        async function getGit() {
            try {
                let data = await fetch("https://api.github.com/users/nikisidama")
                const result = await data.json()
                setGit(result)
            } catch (e) {
                console.log(e)
            }
        }
        async function getVercel() {
            try {
                let data = await fetch("/api/vercel")
                const result = await data.json()
                setVercel(result)
            } catch (e) {
                console.log(e)
            }
        }
        async function getTypi() {
            try {
                let data = await fetch("/api/typicode")
                const result = await data.json()
                setTypi(result)
            } catch (e) {
                console.log(e)
            }
        }
        getGit()
        getVercel()
        getTypi()
    }, [])

    if (!git || !vercel || !typi) return <main className={`${monoCraft.className}`}><Loading /></main>

    return <>
        <header>
            <div className="absolute rounded-full bg-transparent w-16 h-16 m-0 opacity-10 z-20">
                <Image
                    src={git.avatar_url}
                    alt="me"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
        </header>
        <main className="flex w-full h-screen justify-around bg-black overflow-hidden m-0">
            <section className={`relative flex flex-col flex-1 items-center w-1/2 bg-gradient-to-b from-black via-black to-gray-600 p-2 ${geistSans.className}`}>
                <div className="z-10">
                    <div className="w-80 h-32 invert relative">
                        <Image
                            src="https://www.hatimeria.com/images/marketing/vercel-logo.png"
                            alt="vercel"
                            fill
                        />
                    </div>
                    <h1 className="absolute text-8xl font-bold top-6 left-6 hover:animate-shake cursor-progress">A</h1>
                </div>
                <div className="flex flex-wrap gap-5 flex-1 justify-between items-center relative w-11/12 overflow-auto"
                    style={{
                        scrollbarWidth: 'thin',
                        scrollbarColor: "white transparent",
                    }}
                >
                    {vercel.map((item) =>
                        <div
                            key={item.id}
                            className="relative flex flex-col border-white border-2 w-[45%] h-1/3 rounded-lg transition-all hover:shadow-[0px_0px_8px_rgba(255,255,255,1)] hover:w-1/2 hover:z-10"
                        >
                            <div className="flex items-center px-2 pt-2">
                                <div className="relative w-12 h-8 m-2">
                                    <Image
                                        src="https://karmanivero.us/assets/images/logo-vercel.png"
                                        alt="vercel"
                                        fill
                                        objectFit="contain"
                                    />
                                </div>
                                <span className="text-xl font-bold hover:underline cursor-pointer">
                                    {item.title}
                                </span>
                                <span className="text-sm self-start">
                                    ID:{item.id}
                                </span>
                            </div>
                            <div className="mt-2 px-2 flex-1">
                                by {item.author}
                                <span className="rounded-full border-white border-2 ml-2 px-2.5 py-0.25 text-white text-sm hover:bg-gray-50 hover:text-black cursor-pointer">
                                    {item.category}
                                </span>
                                <div className="mt-4">
                                    {item.content}
                                </div>
                            </div>
                            <div className="self-end p-2">
                                {item.date}
                            </div>
                        </div>
                    )}
                </div>
                <div className="absolute w-full h-full bg-gradient-to-t from-gray-600 via-transparent to-transparent pointer-events-none" />
            </section>
            <section className={`relative flex flex-col flex-1 items-center w-1/2 overflow-auto p-2 bg-gradient-to-t from-lime-800 via-lime-600 to-lime-400 ${monaSans.className}`}>
                <div className="z-10">
                    <div className="flex flex-row justify-center items-center w-full">
                        <div className="relative rounded-full bg-white w-32 h-32 overflow-hidden m-2">
                            <Image
                                src="https://avatars.githubusercontent.com/u/5502029?v=4"
                                alt="typi"
                                fill
                                objectFit="contain"
                                className="hover:animate-fadeOut"
                            />
                        </div>
                        <span className={`text-8xl ${hubotSans.variable}`}>TypiCode</span>
                    </div>
                    <h1 className="absolute text-8xl font-bold top-6 right-6 hover:animate-shake cursor-progress">B</h1>
                </div>
                <div className="flex flex-wrap gap-5 flex-1 justify-between items-center relative w-11/12 mt-2 overflow-auto"
                    style={{
                        scrollbarWidth: 'thin',
                        scrollbarColor: "white transparent",
                    }}
                >
                    {typi.map((item, index) =>
                        <div
                            key={index}
                            className="border-white flex flex-col border-2 w-[45%] h-1/5 rounded-lg transition-all hover:shadow-[0px_0px_8px_rgba(255,255,255,1)] hover:w-1/2 hover:z-10"
                        >
                            <div className="flex items-center px-2 pt-2">
                                <div className="relative w-12 h-12 m-2">
                                    <Image
                                        src="https://avatars.githubusercontent.com/u/5502029?v=4"
                                        alt="typi"
                                        fill
                                        objectFit="contain"
                                    />
                                </div>
                                <span className="text-xl w-10/12 hover:underline cursor-pointer">
                                    {item.title}
                                </span>
                                <span className="text-sm self-start">
                                    ID:{item.id}
                                </span>
                            </div>
                            <div className="text-sm text-center opacity-25">
                                just title
                            </div>
                        </div>
                    )}
                </div>
                <div className="absolute w-full h-full bg-gradient-to-t from-lime-800 via-transparent to-transparent pointer-events-none" />
            </section>
        </main>
        <footer className="m-0">
        </footer>
        <Main />
    </>
}