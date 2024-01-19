import { ModeToggle } from "./_components/mode-toggle";

export default function Home() {
  return (
    <main className="">
      <section id="intro" className="space-y-6 py-8 md:py-12 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center text-center gap-4">
          <span className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium flex items-center">
            📅 1º Turma dia 06 de novembro de 2023
            <ModeToggle />
          </span>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl">
            The Next Dev
            <br />
            Full-stack <span className="text-primary">Next.js 14</span>
          </h1>
        </div>
        <h1 className="text-primary">Landing Page</h1>
      </section>
      <section id="about">
        <h1 className="text-primary">Sobre</h1>
      </section>
      <section id="feature">
        <h1 className="text-primary">Tech stack</h1>
      </section>
      <section id="investment">
        <h1 className="text-primary">Investimento</h1>
      </section>
      <section id="faq">
        <h1 className="text-primary">faq</h1>
      </section>
    </main>
  )
}
