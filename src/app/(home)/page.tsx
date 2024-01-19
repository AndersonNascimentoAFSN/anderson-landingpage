import { IntroSection } from "./_components";

export default function Home() {
  return (
    <main className="">
      <IntroSection />

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
