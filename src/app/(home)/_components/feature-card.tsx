import { IconComponent, Icons } from '@/components/icon-component';

export function FeatureCardRoot({ children }: { children: React.ReactNode }) {
  return (
    <div className='relative overflow-hidden rounded-lg border bg-background p-2'>
      <div className='flex h-[180px] flex-col justify-between rounded-md p-6'>
        {children}
      </div>
    </div>
  )
}

export function FeatureCardIcon({ icon, ...rest }: Icons) {
  return (
    <IconComponent icon={icon} {...rest} />
  )
}

export function FeatureCardContent({ children }: { children: React.ReactNode }) {
  return (
    <div className='space-y-2'>
      {children}
    </div>
  )
}

export function FeatureCardTitle({ title }: { title: string }) {
  return (
    <h3 className='font-bold'>{title}</h3>
  )
}

export function FeatureCardText({ text }: { text: string }) {
  return (
    <p className='text-sm text-muted-foreground'>
      {text}
    </p>
  )
}