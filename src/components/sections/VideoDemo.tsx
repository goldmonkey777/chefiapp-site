import { motion } from 'framer-motion'
import { Play, CheckCircle } from 'lucide-react'
import { useState } from 'react'

const highlights = [
  'Check-in GPS em tempo real',
  'Sistema de gamificação com XP',
  'Dashboard gerencial completo',
  'Notificações push instantâneas',
  'Multi-plataforma (iOS, Android, Web)'
]

export function VideoDemo() {
  const [isPlaying, setIsPlaying] = useState(false)

  // Placeholder - replace with actual video URL when available
  const videoUrl = 'YOUR_YOUTUBE_VIDEO_ID' // Replace with actual YouTube video ID
  const hasVideo = videoUrl !== 'YOUR_YOUTUBE_VIDEO_ID'

  return (
    <div className="max-w-7xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-purple-400 bg-purple-500/10 rounded-full border border-purple-500/20">
          Demo ao Vivo
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Veja o ChefIApp em Ação
        </h2>
        <p className="text-slate-400 text-lg max-w-3xl mx-auto">
          60 segundos para entender como ChefIApp vai transformar sua gestão de equipe
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-8 items-center">
        {/* Video Player */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-3"
        >
          <div className="relative aspect-video bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden group">
            {hasVideo && isPlaying ? (
              <iframe
                src={`https://www.youtube.com/embed/${videoUrl}?autoplay=1`}
                title="ChefIApp Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            ) : (
              <>
                {/* Placeholder Thumbnail */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-purple-500/20 to-blue-500/20 flex items-center justify-center">
                  <div className="text-center">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsPlaying(true)}
                      className="w-20 h-20 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors mb-4 mx-auto shadow-lg shadow-orange-500/50"
                    >
                      <Play className="w-10 h-10 text-white ml-1" fill="white" />
                    </motion.button>
                    {!hasVideo && (
                      <div className="text-slate-400 text-sm mt-4">
                        Vídeo demo em breve<br />
                        <a href="#early-access" className="text-orange-400 hover:text-orange-300 underline">
                          Cadastre-se para ser notificado
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                {/* App Screenshot Mockup */}
                <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
                  <div className="bg-slate-800 rounded-lg p-8 max-w-md">
                    <div className="space-y-4">
                      <div className="h-4 bg-orange-500/30 rounded w-3/4"></div>
                      <div className="h-4 bg-orange-500/30 rounded w-full"></div>
                      <div className="h-4 bg-orange-500/30 rounded w-5/6"></div>
                      <div className="grid grid-cols-3 gap-2 mt-6">
                        <div className="h-16 bg-orange-500/20 rounded"></div>
                        <div className="h-16 bg-orange-500/20 rounded"></div>
                        <div className="h-16 bg-orange-500/20 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Video Stats */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-orange-400">60s</div>
              <div className="text-slate-400 text-xs mt-1">Duração</div>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-green-400">5</div>
              <div className="text-slate-400 text-xs mt-1">Funcionalidades</div>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-blue-400">100%</div>
              <div className="text-slate-400 text-xs mt-1">Real</div>
            </div>
          </div>
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2"
        >
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white mb-6">O Que Você Vai Ver</h3>
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">{highlight}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg">
              <div className="flex items-start gap-3">
                <Play className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-semibold mb-1">App Real, Não Mockup</div>
                  <div className="text-slate-400 text-sm">
                    Veja o ChefIApp rodando de verdade no Sofia Gastrobar Ibiza
                  </div>
                </div>
              </div>
            </div>

            <a
              href="#early-access"
              className="mt-6 w-full inline-block text-center px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors"
            >
              Quero Testar Grátis
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-12 text-center"
      >
        <p className="text-slate-400">
          Quer ver uma demo personalizada para seu estabelecimento?{' '}
          <a href="#early-access" className="text-orange-400 hover:text-orange-300 underline font-medium">
            Agende uma chamada
          </a>
        </p>
      </motion.div>
    </div>
  )
}
