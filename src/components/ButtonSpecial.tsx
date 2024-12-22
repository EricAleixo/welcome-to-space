"use client"
import { useState } from "react"

export const ButtonSpecial = ({ children }: { children: React.ReactNode }) => {

    const [animation, setAnimation] = useState(false);

    const chargeAnimation = () => {
        setAnimation(!animation)
    }

    return (
        <div className="relative">
            <button
                className={`w-60 h-60 ${animation ? "bg-blue-300 text-black/50" :"bg-white"} outline-none rounded-full text-[32px] font-serif relative z-10 transition-colors duration-500`}
                onMouseEnter={chargeAnimation} onMouseLeave={chargeAnimation}>
                {children}
            </button>
            <span className={`absolute top-0 left-0 w-full h-full bg-white/20 rounded-full transition-transform duration-500 ${animation && "scale-150"}`}></span>
        </div>
    )
}