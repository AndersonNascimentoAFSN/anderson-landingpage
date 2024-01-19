import { ComponentProps } from 'react';
import { AuthenticationIcon, ComponentsIcon, DataBaseIcon, NextIcon, ReactIcon, SubscriptionsIcon } from '@/components/feature-icons';
import { GitHubIcon, InstagramIcon, LinkedInIcon, TwitterIcon, YouTubeIcon } from '@/components/social-icons'

const icons = {
  nextjs: NextIcon,
  react: ReactIcon,
  components: ComponentsIcon,
  database: DataBaseIcon,
  authentication: AuthenticationIcon,
  subscriptions: SubscriptionsIcon,
  github: GitHubIcon,
  instagram: InstagramIcon,
  linkedin: LinkedInIcon,
  twitter: TwitterIcon,
  youtube: YouTubeIcon,
}

export type IconsNames = keyof typeof icons

export interface Icons extends ComponentProps<'svg'> {
  icon: keyof typeof icons
}

export function IconComponent({ icon, ...rest }: Icons) {
  const Icon = icons[icon]
  return (
    <Icon {...rest} />
  )
}