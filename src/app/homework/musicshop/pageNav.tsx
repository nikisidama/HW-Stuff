'use client'
import { useState } from "react";

export default function PageNav() {
    const [page, setPage] = useState(1);

    return (
        <div className="w-screen inline-flex items-center justify-center gap-3 p-3">
            <button
                onClick={(e) => {
                    e.preventDefault();
                    setPage(page - 1)
                }}
                className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
            >
                <span className="sr-only">Prev Page</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-3" viewBox="0 0 20 20" fill="currentColor">
                    <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>

            <p className="text-xs text-gray-900">
                {page}
                <span className="mx-0.25">/</span>
                12
            </p>

            <button
                onClick={(e) => {
                    e.preventDefault();
                    setPage(page + 1)
                }}
            className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
            >
            <span className="sr-only">Next Page</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-3" viewBox="0 0 20 20" fill="currentColor">
                <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                />
            </svg>
        </button>
        </div >
    );
}