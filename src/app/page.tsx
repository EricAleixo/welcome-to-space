import { ButtonSpecial } from "@/components/ButtonSpecial"
import { Header } from "@/components/Header"

export default function Home() {
  return (
    <div className="h-screen w-full bg-fundoHomeDesktop bg-cover">
      <Header />
      <div className="flex items-center h-[82%] justify-between px-36">
        <div className="w-1/2 h-3/4 flex justify-center flex-col gap-5">
          <div>
            <p className="text-lg text-[#D0D6F9]">
              Então, você quer viajar para o
            </p>
          </div>
          <div>
            <h1 className="text-9xl text-white pb-2">
              Cosmo
            </h1>
          </div>
          <div className="w-9/12">
            <p className="text-md text-[#D0D6F9]">
              Vamos explorá-lo; se você quiser ir para o espaço, é melhor ir genuinamente para o espaço sideral e não ficar pairando na borda dele. Bem, sente-se e relaxe porque lhe proporcionaremos uma experiência verdadeiramente fora deste mundo!
            </p>
          </div>
        </div>
        <ButtonSpecial>
          Explore
        </ButtonSpecial>
      </div>
    </div>

  )
}