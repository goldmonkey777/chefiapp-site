import { Heart } from 'lucide-react'
import { useT } from '../../i18n'

export function Footer() {
  const t = useT()
  
  return (
    <footer className="py-12 bg-slate-900/50 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="flex flex-col items-center md:items-start gap-4">
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
          </div>

          {/* Links */}
          <div className="flex flex-col items-center gap-4">
            <h4 className="text-sm font-semibold text-white">{t.footer.product}</h4>
            <div className="flex flex-col items-center gap-3 text-sm">
              <a href="/#features" className="text-slate-400 hover:text-white transition-colors">
                {t.footer.links.features}
              </a>
              <a href="/#roadmap" className="text-slate-400 hover:text-white transition-colors">
                {t.footer.links.roadmap}
              </a>
              <a href="/#faq" className="text-slate-400 hover:text-white transition-colors">
                {t.footer.links.faq}
              </a>
              <a href="/#early-access" className="text-slate-400 hover:text-white transition-colors">
                {t.header.earlyAccess}
              </a>
            </div>
          </div>

          {/* Legal */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <h4 className="text-sm font-semibold text-white">{t.footer.legal}</h4>
            <div className="flex flex-col items-center md:items-end gap-3 text-sm">
              <a href="/legal/privacy.html" className="text-slate-400 hover:text-white transition-colors">
                {t.footer.links.privacy}
              </a>
              <a href="/legal/terms.html" className="text-slate-400 hover:text-white transition-colors">
                {t.footer.links.terms}
              </a>
              <a href="mailto:contact@goldmonkey.studio" className="text-slate-400 hover:text-white transition-colors">
                {t.footer.links.contact}
              </a>
            </div>
            <div className="flex items-center gap-1 text-sm text-slate-500 mt-2">
              <span>{t.footer.madeWith}</span>
              <Heart size={14} className="text-orange-500 fill-orange-500" />
              <span>{t.footer.inIbiza}</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-600">
          <p>{t.footer.copyright}</p>
          <p className="mt-2">{t.footer.byStudio} 🚀</p>
        </div>
      </div>
    </footer>
  )
}
