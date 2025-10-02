import BrazilMap from '@/components/Home/Brazil'
import { ProcessSection } from '@/components/Home/Etapas'
import Hero from '@/components/Home/Hero'




function page() {

 
  return <>
   <div className="bg-black relative overflow-hidden">
      {/* Background effects layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-black to-blue-900">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a15_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a15_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      {/* Animated blur circles */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Content sections */}
      <div className="relative z-10">
        <Hero />
        <ProcessSection />
      </div>
    </div>
    <BrazilMap/>
  </>
}

export default page