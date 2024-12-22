import logo from "@/../public/assets/shared/logo.svg"
import Image from "next/image"
import Link from "next/link"

export const Header = () => {

    const navBar = [
        { nome: "Início", href: "/" },
        { nome: "Destinos", href: "/destinos" },
        { nome: "Tripulação", href: "/tripulação" },
        { nome: "Tecnologias", href: "/tecnologias" },
    ]

    return (
        <header className="h-[138px] flex items-end justify-between p-10 pr-0 relative">
            <div className="pb-2">
                <Image width={48} height={48} src={logo} alt="" />
            </div>
            <div className="border-t border-[#979797] w-1/2 absolute top-1/2 left-1/2 -translate-x-[80%] z-20"></div>
            <nav>
                <ul className="text-white flex gap-8 bg-white/5 backdrop-blur-xl pr-12 pl-28">
                    {
                        navBar.map((item, index) => (
                            <li key={index} className="relative h-16 flex items-center group">
                                <Link href={item.href}>0{index + 1} - {item.nome}</Link>
                                <div className={`w-full ${index === 0 ? "bg-white" : "group-hover:bg-gray-500"} h-[1px] absolute bottom-0`}></div>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    )
}