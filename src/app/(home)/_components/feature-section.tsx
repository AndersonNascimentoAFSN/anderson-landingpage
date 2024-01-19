'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Separator } from "@/components/ui/separator"
import { FeatureCardContent, FeatureCardIcon, FeatureCardRoot, FeatureCardText, FeatureCardTitle } from './feature-card';
import type { IconsNames } from '@/components/icon-component';

const content = [
  {
    id: 1,
    title: 'Módulo 1: Introdução',
    data: '04 de Dezembro de 2023',
    episodes: [
      { id: 1, title: 'Sobre o curso' },
      { id: 2, title: 'Base de conhecimento' },
    ],
  },
  {
    id: 2,
    title: 'Módulo 2: Preparando ambiente',
    data: '11 de Dezembro de 2023',
    episodes: [
      { id: 1, title: 'Ferramentas necessárias' },
      { id: 2, title: 'Configurando VS Code' },
    ],
  },
  {
    id: 3,
    title: 'Módulo 3: Setup do Projeto',
    data: '18 de Dezembro de 2023',
    episodes: [
      { id: 1, title: 'Setup "create-next-app"' },
      { id: 2, title: 'Entendendo os arquivos base do projeto' },
      { id: 3, title: 'Styling (TailwindCSS)' },
      { id: 4, title: 'Instalando shadcn' },
      { id: 5, title: 'Configurando thema da Aplicação' },
      { id: 6, title: 'Criando estruturas de pastas' },
      { id: 7, title: 'Entendendo sobre Roteamento' },
      { id: 8, title: 'Client Components x Server Components' },
      { id: 9, title: 'Publicando projeto no GitHub' },
    ],
  },
  {
    id: 4,
    title: 'Módulo 4: Autenticação',
    data: '25 de Dezembro de 2023',
    episodes: [
      { id: 1, title: 'Tipos de autenticações' },
      { id: 2, title: 'NextAuth ou Clerk, qual utilizar?' },
      { id: 3, title: 'Configurando autenticação Clerk' },
      { id: 4, title: 'Tela de Login e Registro' },
    ],
  },
  {
    id: 5,
    title: 'Módulo 5: Layout',
    data: '01 de Janeiro de 2024',
    episodes: [
      { id: 1, title: 'O que são metadados' },
      { id: 2, title: 'Fonts' },
      { id: 3, title: 'Layout responsivo com TailwindCSS' },
      { id: 4, title: 'Layout default' },
      { id: 5, title: 'Criando componente Topbar' },
      { id: 6, title: 'Criando componente Sidebar' },
      { id: 7, title: 'Criando componente Sidebar para Mobile' },
      { id: 8, title: 'O que são middlewares?' },
      { id: 9, title: 'Redirecionamento de páginas' },
    ],
  },
  {
    id: 6,
    title: 'Módulo 6: Configurando Banco de Dados',
    data: '08 de Janeiro de 2024',
    episodes: [
      { id: 1, title: 'Configurando o PlanetScale' },
      { id: 2, title: 'Configurando Prisma ORM' },
    ],
  },
  {
    id: 7,
    title: 'Módulo 7: Criando Curso',
    data: '15 de Janeiro de 2024',
    episodes: [
      { id: 1, title: 'Criando página de Novo Curso' },
      { id: 2, title: 'O que são Server Actions?' },
      { id: 3, title: 'Novo curso' },
      { id: 4, title: 'Criando tabela de Cursos' },
      { id: 5, title: 'Entendendo Data Fetching' },
      { id: 6, title: 'Criando API de Cursos' },
      { id: 7, title: 'Edição de Cursos' },
      { id: 8, title: 'Edição de Episódios' },
      { id: 9, title: 'Publicação de Cursos' },
      { id: 10, title: 'Publicação de Episódios' },
    ],
  },
  {
    id: 8,
    title: 'Módulo 8: Listagem de Cursos',
    data: '22 de Janeiro de 2024',
    episodes: [
      { id: 1, title: 'Entendendo sobre Caching' },
      { id: 2, title: 'Lazy Loading' },
      { id: 3, title: 'Criando componente de Listagem de Curso' },
      { id: 4, title: 'Filtro para Listagem de Curso' },
    ],
  },
  {
    id: 9,
    title: 'Módulo 9: Integração com Stripe',
    data: '29 de Janeiro de 2024',
    episodes: [
      { id: 1, title: 'Configurando Stripe' },
      { id: 2, title: 'Componente de Compra de Curso' },
      { id: 3, title: 'Integração com Stripe' },
    ],
  },
  {
    id: 10,
    title: 'Módulo 10: Dashboard do Aluno',
    data: '05 de Fevereiro de 2024',
    episodes: [
      { id: 1, title: 'Progresso do Aluno' },
      { id: 2, title: 'Dashboard do Aluno' },
    ],
  },
  {
    id: 11,
    title: 'Módulo 11: Deployment',
    data: '12 de Fevereiro de 2024',
    episodes: [
      { id: 1, title: 'Tudo sobre a Vercel' },
      { id: 2, title: 'Configurando novo projeto na Vercel' },
      { id: 3, title: 'WebHooks Clerk' },
      { id: 4, title: 'WebHooks Stripe' },
      { id: 5, title: 'Analytics' },
    ],
  },
  {
    id: 12,
    title: 'Bônus 1',
    data: '06 de Dezembro de 2023',
    episodes: [
      { id: 1, title: 'Aula extra' },
      {
        id: 2,
        title:
          'Live: Quarta-feira, 6 de dezembro · 7:00 até 8:00pm Fuso horário: America/Sao_Paulo Como participar do Google Meet Link da videochamada: https://meet.google.com/som-akuz-nbo',
      },
    ],
  },
  {
    id: 13,
    title: 'Bônus 2',
    data: '10 de Janeiro de 2024',
    episodes: [
      { id: 1, title: 'Aula extra' },
      {
        id: 2,
        title:
          'Live: Quarta-feira, 10 de janeiro de 2024 · 7:00 até 8:00pm Fuso horário: America/Sao_Paulo Como participar do Google Meet Link da videochamada: https://meet.google.com/emy-cgvp-zav',
      },
    ],
  },
];

const features = [
  { icon: 'nextjs', title: 'Next.js 14', text: 'App dir, Routing, Layouts, Loading UI e API routes.' },
  { icon: 'react', title: 'React 18', text: 'Server e Client Components. Uso de Hooks.' },
  { icon: 'database', title: 'Database', text: 'ORM usando Prisma publicados no PlanetScale.' },
  { icon: 'components', title: 'Components', text: 'UI components usando Radix UI e estilizados com TailwindCSS.' },
  { icon: 'authentication', title: 'Authentication', text: 'Autenticação usando NextAuth.js/Clerk e middlewares.' },
  { icon: 'subscriptions', title: 'Subscriptions', text: 'Controle de Assinaturas pagas usando Stripe.' },
] as const


export function FeatureSection() {
  return (
    <section
      id='feature'
      className='bg-slate-50 dark:bg-transparent container space-y-6 py-8 md:py-12 lg:py-24'
    >
      <div className='mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center'>
        <h2 className='font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl'>
          Tech Stack
        </h2>
        <p className='max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7'>
          Venha desenvolver comigo um projeto real, do zero, usando a melhor
          Stack do mercado.
        </p>
      </div>

      <div className='mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3'>

        {features.map((feature) => (
          <FeatureCardRoot key={feature.title}>
            <FeatureCardIcon icon={feature.icon} />
            <FeatureCardContent>
              <FeatureCardTitle title={feature.title} />
              <FeatureCardText text={feature.text} />
            </FeatureCardContent>
          </FeatureCardRoot>
        ))}

      </div>
      <div className='mx-auto text-center md:max-w-[58rem]'>
        <p className='leading-normal text-muted-foreground sm:text-lg sm:leading-7 mb-4'>
          Iremos desenvolver uma plataforma LMS (Learning Management System),
          utilizando Next.js 14 e as melhores tecnologias do mercado. Veja o
          conteúdo abaixo...
        </p>
        <Accordion type='single' collapsible className='w-full'>
          {content.map((item) => (
            <AccordionItem value={`item-${item.id}`} key={item.id}>
              <AccordionTrigger>
                <div className='space-y-1 text-left'>
                  <h4 className='text-sm font-medium leading-none'>
                    {item.title}
                  </h4>
                  <p className='text-sm text-muted-foreground'>
                    {`Disponível em ${item.data}`}
                  </p>
                </div>
              </AccordionTrigger>
              <AccordionContent className='text-left'>
                {item.episodes.map((episode) => (
                  <>
                    <div key={episode.id} className='text-sm'>
                      {`Ep-${episode.id}: ${episode.title}`}
                    </div>
                    <Separator className='my-2' />
                  </>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
