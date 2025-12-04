import { Instagram, Youtube, Linkedin } from 'lucide-react'
import { trackExternalLink } from '../analytics/Analytics'

// TikTok icon (custom since not in lucide)
const TikTokIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
)

export const socialLinks = [
  {
    name: 'Instagram',
    url: 'https://instagram.com/chefiapp',
    icon: Instagram,
    color: '#E4405F',
    handle: '@chefiapp'
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com/@chefiapp',
    icon: Youtube,
    color: '#FF0000',
    handle: '@chefiapp'
  },
  {
    name: 'TikTok',
    url: 'https://tiktok.com/@chefiapp',
    icon: TikTokIcon,
    color: '#000000',
    handle: '@chefiapp'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/company/chefiapp',
    icon: Linkedin,
    color: '#0A66C2',
    handle: 'ChefIApp'
  }
]

interface SocialLinksProps {
  variant?: 'horizontal' | 'vertical'
  showLabels?: boolean
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function SocialLinks({
  variant = 'horizontal',
  showLabels = false,
  size = 'md',
  className = ''
}: SocialLinksProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  }

  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24
  }

  const handleClick = (link: typeof socialLinks[0]) => {
    trackExternalLink(link.url, `${link.name} - ${link.handle}`)
  }

  return (
    <div
      className={`flex ${variant === 'vertical' ? 'flex-col' : 'flex-row'} gap-3 ${className}`}
    >
      {socialLinks.map((link) => {
        const Icon = link.icon
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer me"
            onClick={() => handleClick(link)}
            className={`
              ${sizeClasses[size]}
              flex items-center justify-center
              bg-slate-800/50 hover:bg-slate-700
              border border-slate-700 hover:border-orange-500/50
              rounded-lg
              transition-all duration-300
              group
              ${showLabels ? 'gap-2 px-4 w-auto' : ''}
            `}
            aria-label={`${link.name} - ${link.handle}`}
            title={`Siga no ${link.name}`}
          >
            <Icon
              size={iconSizes[size]}
              className="text-slate-300 group-hover:text-orange-400 transition-colors"
            />
            {showLabels && (
              <span className="text-sm font-medium text-slate-300 group-hover:text-white">
                {link.name}
              </span>
            )}
          </a>
        )
      })}
    </div>
  )
}

// Compact version for header/footer
export function SocialLinksCompact() {
  return <SocialLinks variant="horizontal" size="sm" />
}

// Full version with labels
export function SocialLinksLabeled() {
  return <SocialLinks variant="horizontal" size="md" showLabels />
}

// Vertical version for sidebar
export function SocialLinksVertical() {
  return <SocialLinks variant="vertical" size="md" />
}
