import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { EtapasSection } from "@/components/etapas-section"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <HeroSection />
      <AboutSection />
      <EtapasSection />
    </main>
  )
}
