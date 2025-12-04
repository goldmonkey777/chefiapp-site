import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import {
  Hero,
  ForWho,
  HowItWorks,
  Features,
  WhyDifferent,
  Roadmap,
  LabPartner,
  SocialProof,
  FAQ,
  EarlyAccess,
  Download,
  Founder,
} from './components/sections'
import { StructuredData } from './components/seo/StructuredData'
import { Analytics } from './components/analytics/Analytics'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* SEO & Analytics - Silicon Valley Level */}
      <StructuredData />
      <Analytics />

      <Header />

      <main>
        {/* Hero Section */}
        <section id="hero" className="pt-20">
          <Hero />
        </section>

        {/* For Who Section */}
        <section id="for-who" className="py-16 md:py-24">
          <ForWho />
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-16 md:py-24 bg-slate-900/30">
          <HowItWorks />
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 md:py-24">
          <Features />
        </section>

        {/* Why Different Section */}
        <section id="why-different" className="py-16 md:py-24 bg-slate-900/30">
          <WhyDifferent />
        </section>

        {/* Roadmap Section */}
        <section id="roadmap" className="py-16 md:py-24">
          <Roadmap />
        </section>

        {/* Lab Partner - Sofia Gastrobar */}
        <section id="lab-partner" className="py-16 md:py-24 bg-slate-900/30">
          <LabPartner />
        </section>

        {/* Social Proof Section */}
        <section id="social-proof" className="py-16 md:py-24">
          <SocialProof />
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 md:py-24">
          <FAQ />
        </section>

        {/* Early Access Form */}
        <section id="early-access" className="py-16 md:py-24 bg-slate-900/30">
          <EarlyAccess />
        </section>

        {/* Download Section */}
        <section id="download" className="py-16 md:py-24">
          <Download />
        </section>

        {/* Founder Section */}
        <section id="founder" className="py-16 md:py-24 bg-slate-900/30">
          <Founder />
        </section>
      </main>

      <Footer />
    </div>
  )
}
