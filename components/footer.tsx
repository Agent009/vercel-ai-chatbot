import React from 'react'

import { cn } from '@/lib/utils'
import { ExternalLink } from '@/components/external-link'

export function FooterText({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      className={cn(
        'px-2 text-center text-xs leading-normal text-muted-foreground',
        className
      )}
      {...props}
    >
      Open source AI chatbot built with passion by Mohammad Amir. Powered by{' '}
      <ExternalLink href="https://nextjs.org">Next.js</ExternalLink> and{' '}
      <ExternalLink href="https://github.com/vercel/ai">
        Vercel AI SDK
      </ExternalLink>
      . Connect with me on{' '}
      <ExternalLink href="https://www.linkedin.com/in/amir1988/">
        LinkedIn
      </ExternalLink>
    </p>
  )
}
