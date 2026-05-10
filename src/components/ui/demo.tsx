'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
 
export function SplineSceneBasic() {
  return (
    <Card className="w-full h-[600px] bg-[#050505] border-[#333333] relative overflow-hidden rounded-none border-b-2">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#CCFF00"
      />
      
      <div className="flex h-full">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight text-white font-syncopate">
            ZERO FORMAL<br/>
            TRAINING.<br/>
            <span className="text-[#CCFF00]">100% SHIPPED.</span>
          </h1>
          <p className="mt-8 text-neutral-400 max-w-lg text-xl font-space-grotesk border-l-2 border-[#CCFF00] pl-4">
            SURAJ DAS [18]. I don't wait for permission. I identify real-world problems and ship live solutions. My goal is HAL Nagoya: to turn raw builder instinct into rigorous, precision engineering.
          </p>
          <div className="mt-8">
            <a href="#projects" className="inline-block px-8 py-4 bg-white text-black font-bold uppercase transition-transform hover:translate-x-1 hover:-translate-y-1 hover:shadow-[-4px_4px_0_#CCFF00]">
              VIEW ARTIFACTS ↓
            </a>
          </div>
        </div>

        {/* Right content */}
        <div className="flex-1 relative hidden md:block">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
}
