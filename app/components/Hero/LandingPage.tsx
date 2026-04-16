import Image from "next/image"


export default function LandingPage(){
    return(
      <div>
          <section>

        <nav className="flex items-center justify-between px-8 py-2 bg-gray-100 relative z-30 backdrop-blur-2xl">
        <span className="text-[15px] font-bold text-primary tracking-[0.18em] uppercase">Tisso Vison</span>
        <span className="text-[13px] text-gray-800 tracking-tight hidden md:block">Find the ideal gift for your loved ones.</span>
        <a href="#" className="bg-secondary text-gray-900 px-5 py-2.5 text-xs uppercase flex items-center gap-3">
          Choose Gift <span className="text-base">→</span>
        </a>
      </nav>

        </section>
      </div>
       
        
    )
}