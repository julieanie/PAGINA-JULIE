import Image from "next/image"
import { Testimonials } from "@/components/testimonials"
import { Benefits } from "@/components/benefits"
import { Timeline } from "@/components/timeline"
import { Identification } from "@/components/identification"
import { Faq } from "@/components/faq"
import { Guarantee } from "@/components/guarantee"
import { HotmartButton } from "@/components/hotmart-button"
import { AboutInstructor } from "@/components/about-instructor"

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-white to-gray-100 flex flex-col items-center p-4 md:p-8">
      {/* Logo */}
      <div className="w-40 my-8 relative">
        <Image
          src="https://i.postimg.cc/VsxB3D2q/LOGOTIPO.png"
          alt="Logo Julie Anie"
          width={160}
          height={80}
          className="w-full h-auto"
        />
      </div>

      {/* Abertura */}
      <h1 className="text-3xl md:text-5xl font-bold text-yellow-600 text-center mb-6">O jogo está zerando.</h1>

      <p className="text-base md:text-lg text-gray-700 text-center max-w-3xl mb-10">
        A Reforma Tributária e a inteligência artificial estão redesenhando a área fiscal.
        <br />O que você sabia até ontem... hoje já não é mais suficiente.
        <br />
        Esta é a sua oportunidade.
      </p>

      {/* Workshop */}
      <section className="max-w-4xl text-center my-8 md:my-16 w-full">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Workshop Alteryx na Prática</h2>
        <p className="text-base md:text-lg text-gray-700">
          Mais de 16 horas de conteúdo real, extraído de workshops ao vivo, focados na prática e na transformação.
        </p>
      </section>

      {/* O que você vai viver */}
      <Benefits />

      {/* Você se identifica? */}
      <Identification />

      {/* Linha do Tempo da Transformação */}
      <Timeline />

      {/* O que você recebe */}
      <section className="max-w-4xl text-center my-8 md:my-16 w-full">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">O que você recebe:</h2>
        <ul className="text-base md:text-lg text-gray-700 space-y-3 text-left mx-4">
          <li>✅ Acesso a mais de 16h de conteúdo gravado</li>
          <li>✅ Certificado de participação</li>
          <li>✅ Materiais de apoio práticos</li>
          <li>✅ Grupo Oficial no WhatsApp</li>
          <li>✅ Método testado por multinacionais</li>
        </ul>
        <p className="text-xl text-gray-800 mt-6">
          Investimento: <strong>R$ 497,00</strong> ou <strong>12x no cartão</strong>
        </p>
      </section>

      {/* Sobre Julie */}
      <AboutInstructor />

      {/* Perguntas Frequentes */}
      <Faq />

      {/* Depoimentos */}
      <Testimonials />

      {/* Garantia de Transformação */}
      <Guarantee />

      {/* Fechamento Final */}
      <section className="max-w-3xl text-center my-10 md:my-20 w-full">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Sua nova jornada começa agora</h2>
        <p className="text-base md:text-lg text-gray-600 mb-8">
          O mercado tributário mudou. Quem muda agora, lidera.
          <br />
          Escolha ser parte do futuro. Sua nova jornada começa aqui.
        </p>
        <HotmartButton />
      </section>

      {/* Rodapé */}
      <footer className="text-gray-400 text-sm mt-16 md:mt-24 mb-6 text-center">
        © {new Date().getFullYear()} Julie Anie | Workshop Alteryx na Prática | Todos os direitos reservados
      </footer>
    </main>
  )
}
