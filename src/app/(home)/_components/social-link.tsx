import { ComponentPropsWithoutRef } from 'react'
import Link from 'next/link';

import { IconComponent, IconsNames } from '@/components/icon-component';

interface SocialLinkProps extends ComponentPropsWithoutRef<typeof Link> {
  icon: IconsNames;
}

export function SocialLink({ icon, ...props }: SocialLinkProps) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <IconComponent icon={icon} className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}
