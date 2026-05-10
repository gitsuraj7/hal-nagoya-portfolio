"use client";
import { SplineSceneBasic } from "@/components/ui/demo";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

export default function Home() {
  const projects = [
    {
      title: "OfferIntel",
      tag: "AI / FULLSTACK",
      description: "AI Job Offer Evaluation Platform. Compares salary, RSU equity, and cost-of-living. Built independently (Firebase/Vercel) to solve a problem working adults face.",
      url: "https://offerintel-7fcf6.web.app"
    },
    {
      title: "FreeStack",
      tag: "OPEN SOURCE / ARCHITECTURE",
      description: "SaaS Discovery Platform mapping expensive tools to open-source alternatives. Demonstrates understanding of infrastructure, data sovereignty, and ecosystem architecture.",
      url: "https://freestack-sigma.vercel.app"
    },
    {
      title: "ScentScape AI",
      tag: "UI/UX / DESIGN",
      description: "Advanced visual design experiment. Complex, production-quality interface with multi-phase flow. Proof of range beyond backend logic.",
      url: "#"
    }
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white font-space-grotesk">
      {/* Interactive 3D Hero */}
      <SplineSceneBasic />

      <section id="projects" className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-syncopate font-bold uppercase mb-12 tracking-tighter">
          LIVE DEPLOYED ARTIFACTS
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <a href={project.url} target="_blank" rel="noopener noreferrer" key={idx} className="block group">
              <Card className="bg-[#111] border-[#333] rounded-none hover:border-[#CCFF00] transition-colors h-full flex flex-col cursor-pointer group-hover:-translate-y-1 group-hover:shadow-[-4px_4px_0_#CCFF00] duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="font-syncopate uppercase tracking-tight text-white group-hover:text-[#CCFF00] transition-colors">{project.title}</CardTitle>
                    <ExternalLink className="w-5 h-5 text-neutral-500 group-hover:text-[#CCFF00]" />
                  </div>
                  <div className="mt-2 inline-block border border-[#CCFF00] text-[#CCFF00] px-2 py-1 text-xs font-bold self-start uppercase">
                    {project.tag}
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription className="text-neutral-400 text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </section>
      
      <footer className="border-t border-[#333] py-8 text-center text-neutral-500 font-syncopate text-sm">
        <p>SURAJ DAS © 2026. NO CLICHES. NO TEMPLATES.</p>
      </footer>
    </main>
  );
}
