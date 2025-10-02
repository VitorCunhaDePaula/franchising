"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { CardContent } from "@/components/ui/card"
import { FileText, Users, Presentation, Building2, FileSignature, GraduationCap, Plane } from "lucide-react"

const steps = [
  {
    icon: FileText,
    number: "01",
    title: "1. Contato Inicial",
    description: "Preencha o formulário de interesse e nossa equipe entrará em contato em até 48 horas.",
  },
  {
    icon: Users,
    number: "02",
    title: "2. Análise de Perfil",
    description: "Avaliamos o perfil do candidato para verificar a compatibilidade com nosso modelo de negócio.",
  },
  {
    icon: Presentation,
    number: "03",
    title: "3. Apresentação Detalhada",
    description: "Apresentamos informações detalhadas sobre o modelo de negócio, investimento e operação.",
  },
  {
    icon: Building2,
    number: "04",
    title: "4. Visita a Unidades",
    description: "Visita a unidades em operação para conhecer de perto o dia a dia do negócio.",
  },
  {
    icon: FileSignature,
    number: "05",
    title: "5. Assinatura do Contrato",
    description: "Formalização da parceria e início do processo de implantação da sua unidade.",
  },
  {
    icon: GraduationCap,
    number: "06",
    title: "6. Treinamento e Inauguração",
    description: "Treinamento completo para você e sua equipe, seguido pela inauguração da unidade.",
  },
]

export  function ProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  const step0Progress = useTransform(scrollYProgress, [0, 0.16], [0, 1])
  const step1Progress = useTransform(scrollYProgress, [0.16, 0.33], [0, 1])
  const step2Progress = useTransform(scrollYProgress, [0.33, 0.5], [0, 1])
  const step3Progress = useTransform(scrollYProgress, [0.5, 0.66], [0, 1])
  const step4Progress = useTransform(scrollYProgress, [0.66, 0.83], [0, 1])
  const step5Progress = useTransform(scrollYProgress, [0.83, 1], [0, 1])

  const stepProgresses = [step0Progress, step1Progress, step2Progress, step3Progress, step4Progress, step5Progress]

  return (
    <section id="process" className="py-24 relative overflow-hidden" ref={ref}>
      <motion.div
        className="absolute top-20 left-0 w-full h-32 opacity-10"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      >
        <Plane className="w-16 h-16 text-white rotate-45" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white text-balance">
            Processo para ser Franqueado
          </h2>
          <p className="text-white text-lg max-w-2xl mx-auto text-pretty">
            Siga estes passos simples para se tornar parte da nossa rede de sucesso
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 hidden md:block">
            <div className="absolute inset-0 bg-border/50 rounded-full" />
            <motion.div
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-accent via-primary to-accent rounded-full origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0
              const stepProgress = stepProgresses[index]

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-col md:gap-8`}
                >
                  <div className="w-full md:w-[calc(50%-2rem)] mb-4 md:mb-0">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="rounded-2xl border-2 border-white shadow-lg hover:shadow-xl transition-shadow duration-300 group relative overflow-hidden bg-white/95"
                    >
                      <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-r from-sky-500 via-blue-600 to-sky-500 flex items-center justify-between px-6">
                        <Plane className="w-5 h-5 text-white" />
                        <div className="flex gap-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                          <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                          <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                        </div>
                      </div>

                      <div
                        className="absolute top-12 left-0 right-0 h-px"
                        style={{
                          backgroundImage:
                            "repeating-linear-gradient(90deg, transparent, transparent 8px, rgb(14 165 233) 8px, rgb(14 165 233) 12px)",
                        }}
                      />

                      <CardContent className="p-8 pt-16">
                        <div className="flex items-start gap-6 mb-6">
                          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                            <step.icon className="w-7 h-7 text-white" />
                          </div>
                          <span className="text-5xl font-bold text-sky-500/20">{step.number}</span>
                        </div>

                        <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-sky-700 transition-colors duration-300">
                          {step.title}
                        </h3>

                        <p className="text-gray-700 leading-relaxed text-pretty text-base">{step.description}</p>
                      </CardContent>
                    </motion.div>
                  </div>

                  <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-4 border-accent bg-background z-10 hidden md:block shadow-lg">
                    <div className="absolute inset-1 rounded-full bg-gradient-to-br from-accent to-primary" />
                  </div>

                  <div className="w-full md:w-[calc(50%-2rem)] hidden md:block" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}


