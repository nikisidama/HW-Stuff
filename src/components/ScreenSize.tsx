"use client"

import { useEffect, useState } from "react";

export default function ScreenSize() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const updateDimensions = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    return <div className="absolute top-4 right-4 text-pink-500 opacity-50 font-bold text-xl">
        {width}x{height} {width <= 640 ? "sm" : width <= 768 ? "md" : width <= 1024 ? "lg" : width <= 1280 ? "xl" : width <= 1536 ? "2xl" : "full"}
    </div>
}