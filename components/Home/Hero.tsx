import { Button } from "../ui/button" 
import Image from "next/image"

function Hero() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="relative container mx-auto px-4 py-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="relative w-56 h-28 md:w-72 md:h-36 drop-shadow-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura-de-tela-2025-09-18-103028eqwdqq-dFqnNPvGD52HLVbPbW51hq8XW4xvR1.png"
                alt="CEAB Logo"
                fill
                className="object-contain filter drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]"
                priority
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white text-center leading-[1.1] mb-8 md:mb-12 text-balance">
            A{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-400 drop-shadow-[0_0_30px_rgba(59,130,246,0.8)]">
              Primeira Rede
            </span>{" "}
            de Escolas de Aviação do Brasil
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-6 md:p-8 text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-sky-500 to-blue-600 mb-2">
                25+
              </div>
              <div className="text-white/90 font-semibold text-sm md:text-base">Anos de História</div>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-6 md:p-8 text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-sky-500 to-blue-600 mb-2">
                18mil+
              </div>
              <div className="text-white/90 font-semibold text-sm md:text-base">Alunos Formados</div>
            </div>
          </div>

          <p className="text-xl md:text-2xl lg:text-3xl text-white/80 text-center leading-relaxed mb-12 md:mb-16 max-w-4xl mx-auto text-pretty font-light">
            Agora em <span className="font-bold text-sky-500">expansão nacional e internacional</span>. Faça parte da
            maior rede de aviação do Brasil.
          </p>

          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-sky-500 to-blue-600 text-white text-xl md:text-2xl px-12 md:px-16 py-8 md:py-10 h-auto font-bold transition-all duration-300 hover:scale-110 rounded-full"
            >
              Quero ser Franqueado CEAB
            </Button>
          </div>

          <div className="absolute top-1/4 right-10 hidden xl:block opacity-20">
            <svg className="w-32 h-32 text-blue-400 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
            </svg>
          </div>
          <div className="absolute bottom-1/4 left-10 hidden xl:block opacity-20">
            <svg className="w-32 h-32 text-blue-400 animate-pulse delay-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
            </svg>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Hero
