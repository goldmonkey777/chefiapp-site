import { Heart, Instagram, Youtube, Linkedin } from 'lucide-react'
import { useT } from '../../i18n'

const socialLinks = [
  { name: 'Instagram', href: 'https://instagram.com/chefiapp', icon: Instagram },
  { name: 'YouTube', href: 'https://www.youtube.com/@chefiapp', icon: Youtube },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/chefiapp', icon: Linkedin },
]

// TikTok SVG icon (not available in lucide-react)
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  )
}

export function Footer() {
  const t = useT()
  
  return (
    <footer className="py-12 bg-slate-900/50 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="flex flex-col items-center md:items-start gap-4 md:col-span-1">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="ChefIApp" className="w-8 h-8 object-contain" />
              <span className="font-semibold text-white">
                ChefI<span className="text-orange-500">App</span>
                <span className="text-xs align-super text-slate-500">™</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 text-center md:text-left max-w-xs">
              {t.footer.description}
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3 mt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-800/50 flex items-center justify-center text-slate-400 hover:text-orange-400 hover:bg-slate-800 transition-all"
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </a>
              ))}
              <a
                href="https://www.tiktok.com/@chefiapp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800/50 flex items-center justify-center text-slate-400 hover:text-orange-400 hover:bg-slate-800 transition-all"
                aria-label="TikTok"
              >
                <TikTokIcon />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h4 className="text-sm font-semibold text-white">{t.footer.product}</h4>
            <div className="flex flex-col items-center md:items-start gap-3 text-sm">
              <a href="/#features" className="text-slate-400 hover:text-white transition-colors">
                {t.footer.links.features}
              </a>
              <a href="/#roadmap" className="text-slate-400 hover:text-white transition-colors">
                {t.footer.links.roadmap}
              </a>
              <a href="/#alternatives" className="text-slate-400 hover:text-white transition-colors">
                {t.alternatives.badge}
              </a>
              <a href="/#faq" className="text-slate-400 hover:text-white transition-colors">
                {t.footer.links.faq}
              </a>
            </div>
          </div>

          {/* Resources / Guides */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h4 className="text-sm font-semibold text-white">{t.footer.resources || 'Recursos'}</h4>
            <div className="flex flex-col items-center md:items-start gap-3 text-sm">
              <a href="/comparativo/gestao-equipe-restaurante.html" className="text-slate-400 hover:text-white transition-colors">
                {t.footer.links.guide || 'Guia Completo'}
              </a>
              <a href="/compare/7shifts.html" className="text-slate-400 hover:text-white transition-colors">
                vs 7shifts
              </a>
              <a href="/compare/harri.html" className="text-slate-400 hover:text-white transition-colors">
                vs Harri
              </a>
              <a href="/guides/gamification-for-restaurants.html" className="text-slate-400 hover:text-white transition-colors">
                {t.footer.links.gamification || 'Gamificação'}
              </a>
              <a href="/sitemap.xml" className="text-slate-400 hover:text-white transition-colors">
                Sitemap
              </a>
            </div>
          </div>

          {/* Legal & Company */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h4 className="text-sm font-semibold text-white">{t.footer.legal}</h4>
            <div className="flex flex-col items-center md:items-start gap-3 text-sm">
              <a href="/legal/privacy.html" className="text-slate-400 hover:text-white transition-colors">
                {t.footer.links.privacy}
              </a>
              <a href="/legal/terms.html" className="text-slate-400 hover:text-white transition-colors">
                {t.footer.links.terms}
              </a>
              <a href="/legal/trademark.html" className="text-slate-400 hover:text-white transition-colors">
                {t.footer.links.trademark}
              </a>
              <a href="/invest.html" className="text-slate-400 hover:text-white transition-colors">
                {t.footer.links.invest}
              </a>
              <a href="/about.html" className="text-slate-400 hover:text-white transition-colors">
                {t.footer.links.about}
              </a>
            </div>
            <div className="flex items-center gap-1 text-sm text-slate-500 mt-4">
              <span>{t.footer.madeWith}</span>
              <Heart size={14} className="text-orange-500 fill-orange-500" />
              <span>{t.footer.inIbiza}</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col items-center gap-3 text-xs text-slate-500">
          {/* Corporate Address */}
          <p className="text-slate-600 text-center">
            1021 E Lincolnway Suite #8568, Cheyenne, Wyoming 82001, USA
          </p>
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <p>{t.footer.copyright}</p>
            <span className="hidden md:inline">·</span>
            <p className="text-blue-400/80">{t.footer.usCompany || 'Registered in Wyoming, USA'}</p>
            <span className="hidden md:inline">·</span>
            <p className="text-orange-400/80">{t.footer.trademark || 'Trademark pending at USPTO'}</p>
          </div>
          <p className="flex items-center gap-2">
            <span>🏝️ From Ibiza with Love</span>
            <span>—</span>
            <a href="https://goldmonkey.studio" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors">
              {t.footer.byStudio}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
