"use client"
import { useState } from 'react'
import Link from 'next/link'

type GuitarType = {
    id: string
    name: string
    brand: string
    price: number
    deleteItem: (id: string) => void
    editItem: (id: string, formData: FormData) => void
}

export default function Guitar({ id, name, brand, price, deleteItem, editItem }: GuitarType) {
    const [isEditing, setIsEditing] = useState(false)

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        editItem(id, formData)
        setIsEditing(false)
    }

    return (
        <div className="m-1 group relative block overflow-hidden rounded-lg w-24 md:w-72 h-fit border-2 border-gray-500">
            <span
                className="absolute start-4 top-4 w-12 overflow-hidden z-20 inline-fle rounded-full bg-gray-100 px-2.5 py-0.5 text-gray-700"
            >
                <p className="whitespace-nowrap text-sm">{id}</p>
            </span>
            <div className="absolute end-2 top-2 z-20 flex flex-col gap-4 items-end">
                <button
                    onClick={() => deleteItem(id)}
                    className="inline-flex items-center justify-center rounded-full w-fit px-1 py-0.5 bg-red-100 text-red-700 transition hover:bg-red-300"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="size-4"
                    >
                        <path
                            d="m4.015 5.494h-.253c-.413 0-.747-.335-.747-.747s.334-.747.747-.747h5.253v-1c0-.535.474-1 1-1h4c.526 0 1 .465 1 1v1h5.254c.412 0 .746.335.746.747s-.334.747-.746.747h-.254v15.435c0 .591-.448 1.071-1 1.071-2.873 0-11.127 0-14 0-.552 0-1-.48-1-1.071zm14.5 0h-13v15.006h13zm-4.25 2.506c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm-4.5 0c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm3.75-4v-.5h-3v.5z"
                            fillRule="nonzero"
                        />
                    </svg>
                    {/* <p className="whitespace-nowrap text-sm">Delete</p> */}
                </button>
                <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="inline-flex items-center justify-center rounded-full bg-purple-100 w-fit px-1 py-0.5 text-purple-700 transition hover:bg-purple-300"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="size-4"
                    >
                        <path
                            d="m11.25 6c.398 0 .75.352.75.75 0 .414-.336.75-.75.75-1.505 0-7.75 0-7.75 0v12h17v-8.749c0-.414.336-.75.75-.75s.75.336.75.75v9.249c0 .621-.522 1-1 1h-18c-.48 0-1-.379-1-1v-13c0-.481.38-1 1-1zm1.521 9.689 9.012-9.012c.133-.133.217-.329.217-.532 0-.179-.065-.363-.218-.515l-2.423-2.415c-.143-.143-.333-.215-.522-.215s-.378.072-.523.215l-9.027 8.996c-.442 1.371-1.158 3.586-1.264 3.952-.126.433.198.834.572.834.41 0 .696-.099 4.176-1.308zm-2.258-2.392 1.17 1.171c-.704.232-1.274.418-1.729.566zm.968-1.154 7.356-7.331 1.347 1.342-7.346 7.347z"
                            fillRule="nonzero"
                        />
                    </svg>
                    {/* <p className="whitespace-nowrap text-sm">Edit</p> */}
                </button>
            </div>
            <div className="flex flex-col justify-center align-center w-full bg-white text-black relative">
                <svg fill="currentColor" height="200px" width="300px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className='text-gray-500/50'>
                    <path
                        d="M30.9,4.5l-3-3c-0.4-0.4-1-0.4-1.4,0l-3.8,3.8c-0.2,0.2-0.3,0.4-0.3,0.7v1.1l-4.3,4.3c-2.5-1.3-5.5-0.9-7.5,1 c-0.5,0.5-0.9,1.1-1.2,1.8c-0.3,0.6-0.8,0.9-1.5,1c-0.7,0-1.5,0.1-2.3,0.4c-2.2,0.9-3.7,2.7-4.2,5c-0.5,2.7,0.4,5.7,2.6,7.8 c1.8,1.8,4.1,2.7,6.3,2.7c0.5,0,1,0,1.5-0.1c2.3-0.5,4.1-2,5-4.2c0.3-0.8,0.4-1.6,0.4-2.4c0-0.6,0.4-1.2,1-1.4c0.1,0,0.3-0.1,1-0.4 c1.1-0.3,1.9-1.2,2.3-2.3c0.4-1.1-0.1-2.3-1-2.8c0,0,0,0,0,0c-0.7-0.4-1.1-1.1-1.1-1.9l0-0.3l-4.7,4.7c-0.4,0.4-1,0.4-1.4,0 c-0.2-0.2-0.3-0.5-0.3-0.8l9.6-9.6c0.2,0.2,0.4,0.4,0.7,0.4h3c0.3,0,0.5-0.1,0.7-0.3l3.8-3.8C31.3,5.5,31.3,4.9,30.9,4.5z M10.7,26.1c-0.2,0.2-0.5,0.3-0.7,0.3s-0.5-0.1-0.7-0.3l-3-3c-0.4-0.4-0.4-1,0-1.4c0.4-0.4,1-0.4,1.4,0l3,3 C11.1,25.1,11.1,25.7,10.7,26.1z"
                        fillRule="nonzero"
                    />
                </svg>
            </div>
            <div className="relative border border-gray-100 bg-white p-4">
                <div className="flex justify-between">
                    <span>{name}</span>
                    <span>{brand}</span>
                </div>
                <p className="mt-1.5 text-sm text-gray-700">${price.toLocaleString()}</p>
            </div>
            {isEditing && (
                <form onSubmit={handleSubmit} className="absolute top-0 left-0 w-full h-full bg-white/50 backdrop-blur-sm flex flex-col justify-center items-center gap-4 p-4 z-10">
                    <div className='flex justify-between items-center gap-4'>
                        <span className="border-2 border-gray-500 rounded-md px-2">{id}</span>
                        <Link
                            href={`/homework/guitarshop/edit/${id}`}
                        >
                            <span className='border-2 border-gray-500 rounded-md px-2 py-1 italic font-bold'>EDIT</span>
                        </Link>
                    </div>
                    <input
                        name="name"
                        defaultValue={name}
                        min={1}
                        className="border-2 border-red-400 rounded-md px-2"
                    />
                    <input
                        name="brand"
                        defaultValue={brand}
                        min={1}
                        className="border-2 border-blue-400 rounded-md px-2"
                    />
                    <input
                        name="price"
                        type="number"
                        defaultValue={price}
                        min={0}
                        className="border-2 border-green-400 rounded-md px-2"
                    />
                    <span className="flex gap-1 border-2 border-gray-500 bg-white rounded-md px-2">
                        <button type="submit">SAVE</button>
                        |
                        <button type="button" onClick={() => setIsEditing(false)}>CANCEL</button>
                    </span>
                </form>
            )}
        </div>
    )
}
