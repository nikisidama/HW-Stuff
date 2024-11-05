"use client"

import { useState } from 'react';
import Link from 'next/link';
import Main from '@/components/Main';

interface ButtonProps {
    children: string;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
    const [x, setX] = useState(70);
    const [y, setY] = useState(40);

    const moving = () => {
        const newX = Math.floor(Math.random() * 100);
        const newY = Math.floor(Math.random() * 50);
        setX(newX);
        setY(newY);
    };

    return (
        <button
            onMouseOver={moving}
            onClick={moving}
            className="font-bold text-6xl border-black border-4 py-6 px-24 rounded-full absolute bg-white z-10 transition-all"
            style={{ top: `${y}rem`, left: `${x}rem` }}
        >
            {children}
        </button>
    );
};


export default function page() {
    return (<>
        <Main />
        <div className='flex flex-col justify-center items-center bg-white h-screen w-screen text-black'>
            <div className='text-9xl'>Are You Gay?</div>
            <button className="font-bold text-6xl border-black border-4 py-6 px-24 rounded-full absolute bg-white" style={{ top: "40rem", left: "30rem" }}>
                <Link href={'/'}>
                    Yes
                </Link>
            </button>
            <Button>No</Button>
        </div>
    </>
    )
}