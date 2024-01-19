import Image from "next/image";

import { SocialLink } from ".";

export function AboutSection() {
  const socialLinks = [
    { href: 'https://twitter.com/andersonafsn', icon: 'twitter' },
    { href: 'https://instagram.com/andersonafsn', icon: 'instagram' },
    { href: 'https://linkedin.com/in/andersonafsn', icon: 'linkedin' },
    { href: '', icon: 'github' },
    { href: '', icon: 'youtube' },
  ] as const

  return (
    <section id="about" className="container md:max-w-[64rem] md:py-12 lg:py-24">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-y-12 lg:grid-rows-[auto-1fr]">
        <div className="lg:pl-20 flex justify-center">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image src="/avatar-background-white.png" alt="" width={800} height={800} quality="95" priority={true} className="aspect-square rotate-3 rounded-lg bg-zinc-100 dark:bg-zinc-800 object-cover" />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2 text:center md:text-start">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5-xl">@andersonnascimentoafsn</h1>
          <p className="mt-6 text-base text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, nisi amet itaque asperiores, exercitationem autem nulla accusamus tempore distinctio, illum magni enim totam vero expedita tenetur sit nobis ut pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, nisi amet itaque asperiores, exercitationem autem nulla accusamus tempore distinctio, illum magni enim totam vero expedita tenetur sit nobis ut pariatur.</p>

          <div className="mt-6 flex justify-center lg:justify-start gap-6">
            {socialLinks.map((socialLink, index) => (
              <SocialLink key={index} href={socialLink.href} icon={socialLink.icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
