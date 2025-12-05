import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronRight, ChevronLeft } from 'lucide-react'

interface TourStep {
  target: string // CSS selector
  title: string
  description: string
  position?: 'top' | 'bottom' | 'left' | 'right'
}

const tourSteps: TourStep[] = [
  {
    target: '#hero',
    title: '👋 Bem-vindo ao ChefIApp™',
    description: 'A plataforma completa de gestão de equipes para hospitality. Vamos fazer um tour rápido?',
    position: 'bottom'
  },
  {
    target: '#features',
    title: '✨ Funcionalidades Poderosas',
    description: 'Check-in GPS, gamificação, tarefas inteligentes e muito mais.',
    position: 'top'
  },
  {
    target: '#roi-calculator',
    title: '💰 Calcule seu ROI',
    description: 'Descubra quanto você pode economizar e ganhar com o ChefIApp.',
    position: 'top'
  },
  {
    target: '#social-proof',
    title: '🌟 Aprovado por profissionais',
    description: 'Veja o que nossos clientes dizem sobre nós.',
    position: 'top'
  },
  {
    target: '#early-access',
    title: '🚀 Pronto para começar?',
    description: 'Garanta seu acesso antecipado e seja um dos primeiros!',
    position: 'top'
  }
]

export function ProductTour() {
  const [isActive, setIsActive] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [hasSeenTour, setHasSeenTour] = useState(false)

  useEffect(() => {
    // Check if user has seen tour before
    const seen = localStorage.getItem('chefiapp_tour_completed')
    if (!seen) {
      // Auto-start tour after 3 seconds
      const timer = setTimeout(() => {
        setIsActive(true)
      }, 3000)
      return () => clearTimeout(timer)
    } else {
      setHasSeenTour(true)
    }
  }, [])

  const handleNext = () => {
    if (currentStep < tourSteps.length - 1) {
      setCurrentStep(currentStep + 1)
      scrollToStep(currentStep + 1)
    } else {
      completeTour()
    }
  }

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      scrollToStep(currentStep - 1)
    }
  }

  const completeTour = () => {
    setIsActive(false)
    localStorage.setItem('chefiapp_tour_completed', 'true')
    setHasSeenTour(true)
  }

  const skipTour = () => {
    completeTour()
  }

  const scrollToStep = (stepIndex: number) => {
    const element = document.querySelector(tourSteps[stepIndex].target)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  const step = tourSteps[currentStep]

  return (
    <>
      {/* Tour Overlay */}
      <AnimatePresence>
        {isActive && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-[9998]"
              onClick={skipTour}
            />

            {/* Tour Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[9999] w-full max-w-md"
            >
              <div className="bg-slate-900 border-2 border-orange-500 rounded-2xl shadow-2xl p-6 mx-4">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">{step.description}</p>
                  </div>
                  <button
                    onClick={skipTour}
                    className="text-slate-400 hover:text-white transition-colors ml-2"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Progress */}
                <div className="mb-4">
                  <div className="flex gap-1.5">
                    {tourSteps.map((_, index) => (
                      <div
                        key={index}
                        className={`h-1.5 rounded-full flex-1 transition-all ${
                          index === currentStep
                            ? 'bg-orange-500'
                            : index < currentStep
                            ? 'bg-orange-500/50'
                            : 'bg-slate-700'
                        }`}
                      />
                    ))}
                  </div>
                  <div className="text-xs text-slate-400 mt-2 text-center">
                    Passo {currentStep + 1} de {tourSteps.length}
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between gap-3">
                  <button
                    onClick={handlePrev}
                    disabled={currentStep === 0}
                    className="px-4 py-2 rounded-lg border border-slate-700 text-slate-300 hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Anterior
                  </button>

                  <button
                    onClick={skipTour}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    Pular tour
                  </button>

                  <button
                    onClick={handleNext}
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 transition-all flex items-center gap-2"
                  >
                    {currentStep === tourSteps.length - 1 ? 'Finalizar' : 'Próximo'}
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Restart Tour Button (bottom-right) */}
      {hasSeenTour && !isActive && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => {
            setCurrentStep(0)
            setIsActive(true)
          }}
          className="fixed bottom-6 right-6 z-50 px-4 py-2 bg-slate-900 border border-slate-700 rounded-full text-sm text-slate-300 hover:border-orange-500/50 hover:text-white transition-all shadow-lg"
        >
          🎯 Refazer tour
        </motion.button>
      )}
    </>
  )
}
