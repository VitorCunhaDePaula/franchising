"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "../ui/button";

// Mapeamento dos estados brasileiros com suas informações
const statesData: Record<string, { name: string; capital: string; region: string }> = {
  "BR-AC": { name: "Acre", capital: "Rio Branco", region: "Norte" },
  "BR-AL": { name: "Alagoas", capital: "Maceió", region: "Nordeste" },
  "BR-AP": { name: "Amapá", capital: "Macapá", region: "Norte" },
  "BR-AM": { name: "Amazonas", capital: "Manaus", region: "Norte" },
  "BR-BA": { name: "Bahia", capital: "Salvador", region: "Nordeste" },
  "BR-CE": { name: "Ceará", capital: "Fortaleza", region: "Nordeste" },
  "BR-DF": { name: "Distrito Federal", capital: "Brasília", region: "Centro-Oeste" },
  "BR-ES": { name: "Espírito Santo", capital: "Vitória", region: "Sudeste" },
  "BR-GO": { name: "Goiás", capital: "Goiânia", region: "Centro-Oeste" },
  "BR-MA": { name: "Maranhão", capital: "São Luís", region: "Nordeste" },
  "BR-MT": { name: "Mato Grosso", capital: "Cuiabá", region: "Centro-Oeste" },
  "BR-MS": { name: "Mato Grosso do Sul", capital: "Campo Grande", region: "Centro-Oeste" },
  "BR-MG": { name: "Minas Gerais", capital: "Belo Horizonte", region: "Sudeste" },
  "BR-PA": { name: "Pará", capital: "Belém", region: "Norte" },
  "BR-PB": { name: "Paraíba", capital: "João Pessoa", region: "Nordeste" },
  "BR-PR": { name: "Paraná", capital: "Curitiba", region: "Sul" },
  "BR-PE": { name: "Pernambuco", capital: "Recife", region: "Nordeste" },
  "BR-PI": { name: "Piauí", capital: "Teresina", region: "Nordeste" },
  "BR-RJ": { name: "Rio de Janeiro", capital: "Rio de Janeiro", region: "Sudeste" },
  "BR-RN": { name: "Rio Grande do Norte", capital: "Natal", region: "Nordeste" },
  "BR-RS": { name: "Rio Grande do Sul", capital: "Porto Alegre", region: "Sul" },
  "BR-RO": { name: "Rondônia", capital: "Porto Velho", region: "Norte" },
  "BR-RR": { name: "Roraima", capital: "Boa Vista", region: "Norte" },
  "BR-SC": { name: "Santa Catarina", capital: "Florianópolis", region: "Sul" },
  "BR-SP": { name: "São Paulo", capital: "São Paulo", region: "Sudeste" },
  "BR-SE": { name: "Sergipe", capital: "Aracaju", region: "Nordeste" },
  "BR-TO": { name: "Tocantins", capital: "Palmas", region: "Norte" },
}

export default function BrazilMap() {
  const [selectedState, setSelectedState] = useState<string | null>(null)
  const [hoveredState, setHoveredState] = useState<string | null>(null)

  useEffect(() => {
    const objectElement = document.getElementById("brazil-svg") as HTMLObjectElement
    if (!objectElement) return

    const handleLoad = () => {
      const svgDoc = objectElement.contentDocument
      if (!svgDoc) return

      const paths = svgDoc.querySelectorAll("path[id]")

      paths.forEach((path) => {
        const stateId = path.getAttribute("id")
        if (!stateId || !statesData[stateId]) return // Add cursor pointer
        ;(path as SVGPathElement).style.cursor = "pointer"
        ;(path as SVGPathElement).style.transition = "all 0.3s ease"

        // Click handler
        path.addEventListener("click", () => {
          setSelectedState(stateId === selectedState ? null : stateId)
        })

        // Hover handlers
        path.addEventListener("mouseenter", () => {
          setHoveredState(stateId)
        })

        path.addEventListener("mouseleave", () => {
          setHoveredState(null)
        })
      })
    }

    if (objectElement.contentDocument) {
      handleLoad()
    } else {
      objectElement.addEventListener("load", handleLoad)
    }

    return () => {
      objectElement.removeEventListener("load", handleLoad)
    }
  }, [selectedState])

  useEffect(() => {
    const objectElement = document.getElementById("brazil-svg") as HTMLObjectElement
    if (!objectElement) return

    const svgDoc = objectElement.contentDocument
    if (!svgDoc) return

    const paths = svgDoc.querySelectorAll("path[id]")

    paths.forEach((path) => {
      const stateId = path.getAttribute("id")
      if (!stateId || !statesData[stateId]) return

      const pathElement = path as SVGPathElement

      if (selectedState === stateId) {
        pathElement.setAttribute("fill", "#FCD34D")
        pathElement.style.filter = "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))"
        pathElement.style.transform = "scale(1.02)"
      } else if (hoveredState === stateId) {
        pathElement.setAttribute("fill", "#60A5FA")
        pathElement.style.filter = "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))"
        pathElement.style.transform = "scale(1.01)"
      } else {
        pathElement.setAttribute("fill", "#E5E7EB")
        pathElement.setAttribute("stroke", "#1E40AF")
        pathElement.setAttribute("stroke-width", "1")
        pathElement.style.filter = "none"
        pathElement.style.transform = "scale(1)"
      }
    })
  }, [selectedState, hoveredState])

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 p-8">
     
      <div className="relative w-full max-w-2xl  overflow-x-auto md:overflow-auto">
        <object
          id="brazil-svg"
          data="/brazil-map.svg"
          type="image/svg+xml"
          className="w-[650px] md:w-[700px] lg:w-full h-auto"
          aria-label="Mapa do Brasil"
        />
      </div>

      
      <div className="w-full lg:w-96">
        <AnimatePresence mode="wait">
          {selectedState ? (
            <motion.div
              key={selectedState}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-2xl p-8"
            >
              <div className="space-y-6">
                <div>
                  <div className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
                    Estado Selecionado
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900">{statesData[selectedState].name}</h2>
                  <div className="text-2xl font-medium text-gray-600 mt-1">{selectedState.replace("BR-", "")}</div>
                </div>

                <div className="border-t border-gray-200 pt-6 space-y-4">
                  <div>
                    <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">Capital</div>
                    <div className="text-xl font-semibold text-gray-900">{statesData[selectedState].capital}</div>
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">Região</div>
                    <div className="text-xl font-semibold text-gray-900">{statesData[selectedState].region}</div>
                  </div>
                </div>
              <a href="" className="cursor-pointer">
                <Button
              
                  className="w-full mt-6 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Abrir Franquia Aqui
                </Button>
                </a>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-gray-100 rounded-2xl shadow-xl p-8 border border-gray-200"
            >
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Quer abrir uma unidade CEAB?</h3>
                <p className="text-gray-600">Selecione um Estado</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
