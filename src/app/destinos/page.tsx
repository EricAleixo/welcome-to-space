"use client"
import { Header } from "@/components/Header";
import imagemLua from "@/../public/assets/destination/image-moon.png"
import Image from "next/image";
import { useState } from "react";

export default function Destinos() {

    const [activatePlanet, setActivatePlanet] = useState(0);

    const handlePlanetClick = (index: number) =>{
        setActivatePlanet(index)
    }

    const planetas = ["lua", "marte", "júpiter", "titan"]

    return (
        <div className="h-screen w-full bg-fundoDestinosDesktop bg-cover">
            <Header />

            <main className="text-white flex flex-col gap-16">
                <div className="pl-32">
                    <h2 className="flex gap-3 text-2xl">
                        <span className="text-slate-600">
                            01
                        </span>Escolha seu destino
                    </h2>
                </div>
                <div className="px-36 w-full flex justify-between items-center pr-24">
                    <Image src={imagemLua} alt={"Imagem da lua"} />

                    <div className="w-[50%] flex flex-col gap-10">
                        <ul className={`flex gap-10`}>
                            {
                                planetas.map((nomePlaneta, index) => (
                                    <li key={index}
                                        className={`cursor-pointer capitalize ${activatePlanet === index ? "text-white" : "text-[#D0D6F9] "} group`}
                                        onClick = {() => handlePlanetClick(index)}
                                    >{nomePlaneta}
                                        <span className={`block mt-1 w-full h-1 ${activatePlanet === index ? "bg-white" : "group-hover:bg-gray-400"}`}></span>
                                    </li>
                                ))
                            }
                        </ul>

                        <div>
                            <h1 className={`text-8xl`}>Lua</h1>
                        </div>
                        <div>
                            <p className="text-[#D0D6F9]">
                                See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.
                            </p>
                        </div>
                        <div className="h-1 w-full border-t border-[#767676]"></div>
                        <div className="flex justify-between pr-24">
                            <div>
                                <p className="text-[#D0D6F9]">AVG. Distância</p>
                                <p className="text-2xl">380,400K M</p>
                            </div>
                            <div>
                                <p className="text-[#D0D6F9]">AVG. Distância</p>
                                <p className="text-2xl">380,400K M</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}