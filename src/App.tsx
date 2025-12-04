import { lazy, Suspense } from 'react'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { StructuredData } from './components/seo/StructuredData'
import { Analytics } from './components/analytics/Analytics'

// Lazy load below-the-fold components for better performance
const ForWho = lazy(() => import('./components/sections/ForWho').then(m => ({ default: m.ForWho })))
const HowItWorks = lazy(() => import('./components/sections/HowItWorks').then(m => ({ default: m.HowItWorks })))
const Features = lazy(() => import('./components/sections/Features').then(m => ({ default: m.Features })))
const WhyDifferent = lazy(() => import('./components/sections/WhyDifferent').then(m => ({ default: m.WhyDifferent })))
const Comparison = lazy(() => import('./components/sections/Comparison').then(m => ({ default: m.Comparison })))
const ROICalculator = lazy(() => import('./components/sections/ROICalculator').then(m => ({ default: m.ROICalculator })))
const VideoDemo = lazy(() => import('./components/sections/VideoDemo').then(m => ({ default: m.VideoDemo })))
const Roadmap = lazy(() => import('./components/sections/Roadmap').then(m => ({ default: m.Roadmap })))
const LabPartner = lazy(() => import('./components/sections/LabPartner').then(m => ({ default: m.LabPartner })))
const SocialProof = lazy(() => import('./components/sections/SocialProof').then(m => ({ default: m.SocialProof })))
const Alternatives = lazy(() => import('./components/sections/Alternatives').then(m => ({ default: m.Alternatives })))
const FAQ = lazy(() => import('./components/sections/FAQ').then(m => ({ default: m.FAQ })))
const EarlyAccess = lazy(() => import('./components/sections/EarlyAccess').then(m => ({ default: m.EarlyAccess })))
const Download = lazy(() => import('./components/sections/Download').then(m => ({ default: m.Download })))
const Founder = lazy(() => import('./components/sections/Founder').then(m => ({ default: m.Founder })))

// Loading fallback component
const SectionLoader = () => (
  <div className="flex items-center justify-center py-24">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
  </div>
)

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* SEO & Analytics - Silicon Valley Level */}
      <StructuredData />
      <Analytics />

      <Header />

      <main>
        {/* Hero Section - Above the fold, no lazy loading */}
        <section id="hero" className="pt-20">
          <Hero />
        </section>

        {/* Below-the-fold sections with lazy loading */}
        <Suspense fallback={<SectionLoader />}>
          <section id="for-who" className="py-16 md:py-24">
            <ForWho />
          </section>
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <section id="how-it-works" className="py-16 md:py-24 bg-slate-900/30">
            <HowItWorks />
          </section>
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <section id="features" className="py-16 md:py-24">
            <Features />
          </section>
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <section id="why-different" className="py-16 md:py-24 bg-slate-900/30">
            <WhyDifferent />
          </section>
        </Suspense>

        {/* NEW: Comparison Section - High conversion impact */}
        <Suspense fallback={<SectionLoader />}>
          <section id="comparison" className="py-16 md:py-24">
            <Comparison />
          </section>
        </Suspense>

        {/* NEW: ROI Calculator - Lead generation powerhouse */}
        <Suspense fallback={<SectionLoader />}>
          <section id="roi-calculator" className="py-16 md:py-24 bg-slate-900/30">
            <ROICalculator />
          </section>
        </Suspense>

        {/* NEW: Video Demo - Show don't tell */}
        <Suspense fallback={<SectionLoader />}>
          <section id="video-demo" className="py-16 md:py-24">
            <VideoDemo />
          </section>
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <section id="roadmap" className="py-16 md:py-24 bg-slate-900/30">
            <Roadmap />
          </section>
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <section id="lab-partner" className="py-16 md:py-24">
            <LabPartner />
          </section>
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <section id="social-proof" className="py-16 md:py-24 bg-slate-900/30">
            <SocialProof />
          </section>
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <section id="alternatives" className="py-16 md:py-24">
            <Alternatives />
          </section>
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <section id="faq" className="py-16 md:py-24 bg-slate-900/30">
            <FAQ />
          </section>
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <section id="early-access" className="py-16 md:py-24">
            <EarlyAccess />
          </section>
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <section id="download" className="py-16 md:py-24 bg-slate-900/30">
            <Download />
          </section>
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <section id="founder" className="py-16 md:py-24">
            <Founder />
          </section>
        </Suspense>
      </main>

      <Footer />
    </div>
  )
}
