"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

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

    if (!git || !vercel || !typi) return <Loading />

    return <>
        <main className="flex w-full h-screen justify-around bg-black overflow-hidden m-0">
            <section className={`relative flex flex-col flex-1 items-center w-1/2  p-10`}>
                <div className="z-10">
                    <h1 className="text-6xl">A</h1>
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
                            className="relative flex flex-col border-white border-2 w-[45%] h-1/2 rounded-lg"
                        >
                            <div className="items-center px-2 pt-2">
                                <span className="text-xl font-bold">
                                    {item.title}
                                </span>
                                <span className="text-sm self-start">
                                    ID:{item.id}
                                </span>
                                <br/>
                                by {item.author}
                                <span className="px-2.5 py-0.25 text-white text-sm">
                                    {item.category}
                                </span>
                                <br/>
                                <div className="mt-4">
                                    {item.content}
                                </div>
                                {item.date}
                            </div>
                        </div>
                    )}
                </div>
            </section>
            <section className={`relative flex flex-col flex-1 items-center w-1/2 overflow-auto p-10 `}>
                <div className="z-10">
                    <h1 className="text-6xl">B</h1>
                </div>
                <div className="flex flex-wrap gap-5 flex-1 justify-between items-center relative w-11/12 overflow-auto"
                    style={{
                        scrollbarWidth: 'thin',
                        scrollbarColor: "white transparent",
                    }}
                >
                    {typi.map((item, index) =>
                        <div
                            key={index}
                            className={`border-white flex flex-col border-2 w-[45%] h-1/5 rounded-lg`}
                        >
                            <div className="flex items-center px-2 pt-2">
                                <span className="text-xl w-10/12">
                                    {item.title}
                                </span>
                                <span className="text-sm self-start">
                                    ID:{item.id}
                                </span>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </main>
        <footer className="m-0">
        </footer>
        <Main />
    </>
}
