import { Heart } from 'lucide-react'

export function Footer() {
  return (
    <footer className="py-12 bg-slate-900/50 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="ChefIApp" className="w-8 h-8 object-contain" />
              <span className="font-semibold text-white">
                ChefI<span className="text-orange-500">App</span>
                <span className="text-xs align-super text-slate-500">™</span>
              </span>
            </div>
            <p className="text-sm text-slate-500 text-center md:text-left">
              © 2025 ChefIApp™ by goldmonkey.studio
            </p>
            <p className="text-xs text-slate-600 text-center md:text-left max-w-md">
              Operado por Goldmonkey Studio LLC (Wyoming, USA), com base operacional em Ibiza, Espanha.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a href="/legal/privacy.html" className="text-slate-400 hover:text-white transition-colors">
              Privacidade
            </a>
            <a href="/legal/terms.html" className="text-slate-400 hover:text-white transition-colors">
              Termos de Uso
            </a>
            <a href="mailto:contact@goldmonkey.studio" className="text-slate-400 hover:text-white transition-colors">
              Contacto
            </a>
          </div>

          {/* Made with love */}
          <div className="flex items-center gap-1 text-sm text-slate-500">
            <span>Feito com</span>
            <Heart size={14} className="text-orange-500 fill-orange-500" />
            <span>em Ibiza</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
