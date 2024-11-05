'use client'
import { useState } from "react";

export default function Products({ name, price, image, like, isNew, link, onEdit, onDelete }: {
    name: string;
    price: number;
    image: string;
    like: number;
    isNew: boolean;
    link: string;
    onEdit: () => void;
    onDelete: () => void;
}) {
    const [hovered, setHovered] = useState(false);
    const [ilike, setILike] = useState(false);
    // const [locallike, setlike] = useState(like);

    function liking() {
        if (ilike) {
            setILike(false);
            // setlike(locallike - 1);
        } else {
            setILike(true);
            // setlike(locallike + 1);
        }
    }

    return (
        <div
            className="m-1 group relative block overflow-hidden rounded-lg w-32 md:w-72 lg:w-96 h-fit"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <span
                className={`absolute start-4 top-4 z-10 ${isNew ? "inline-flex" : "hidden"} items-center justify-center rounded-full bg-amber-100 px-2.5 py-0.5 text-amber-700`}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="-ms-1 me-1.5 size-4"
                >
                    <path
                        d="M12 6.76l1.379 4.246h4.465l-3.612 2.625 1.379 4.246-3.611-2.625-3.612 2.625 1.379-4.246-3.612-2.625h4.465l1.38-4.246zm0-6.472l-2.833 8.718h-9.167l7.416 5.389-2.833 8.718 7.417-5.388 7.416 5.388-2.833-8.718 7.417-5.389h-9.167l-2.833-8.718z"
                        fill-rule="nonzero"
                    />
                </svg>
                <p className="whitespace-nowrap text-sm">New</p>
            </span>
            <div className={`absolute end-4 top-4 z-10 ${hovered ? "flex" : "hidden"} flex-col gap-4 items-end`}>
                <button
                    onClick={onDelete}
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
                            fill-rule="nonzero"
                        />
                    </svg>
                    {/* <p className="whitespace-nowrap text-sm">Delete</p> */}
                </button>
                <button
                    onClick={onEdit}
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
                            fill-rule="nonzero"
                        />
                    </svg>
                    {/* <p className="whitespace-nowrap text-sm">Edit</p> */}
                </button>
            </div>
            <button
                onClick={liking}
                className={`absolute end-4 bottom-20 z-10 inline-flex items-center justify-center rounded-full bg-pink-100 px-2.5 py-0.5 ${ilike ? "text-pink-500" : "text-pink-900"} transition hover:text-pink-500/75`}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill={ilike ? "currentColor" : "none"}
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="-ms-1 me-1.5 size-4"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                </svg>
                <p className="whitespace-nowrap text-sm">{like}</p>
            </button>
            <div className="flex justify-center align-middle bg-white">
                <img
                    src={image}
                    alt=""
                    className="h-full w-fit object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                />
            </div>
            <div className="relative border border-gray-100 bg-white p-4">

                <a href={link} className="mt-1 text-lg w-64 font-medium text-gray-900 cursor-pointer hover:underline">{name}</a>
                <p className="mt-1.5 text-sm text-gray-700">${price.toLocaleString()}</p>
            </div>
        </div>
    )
}