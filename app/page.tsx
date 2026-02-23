import { HeroFullscreen } from "@/components/hero-fullscreen"
import { ConfessionSection } from "@/components/confession-section"
import { NightArchiveSection } from "@/components/night-archive-section"
import { PrettyLiesSection } from "@/components/pretty-lies-section"
import { StatementSection } from "@/components/statement-section"
import { ContactSection } from "@/components/contact-section"

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0B0B0B]">
      <main>
        <HeroFullscreen />
        <ConfessionSection />
        <NightArchiveSection />
        <PrettyLiesSection />
        <StatementSection />
      </main>
      <ContactSection />
    </div>
  )
}
