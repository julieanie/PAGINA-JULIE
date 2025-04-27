import Image from "next/image"

export function AboutInstructor() {
  return (
    <section className="max-w-4xl text-center my-8 md:my-16 w-full">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Quem é Julie Anie</h2>
      <div className="w-40 h-40 mx-auto mb-6 relative">
        <Image
          src="https://i.postimg.cc/4ynm5cJB/Design-sem-nome-3.png"
          alt="Foto de Julie Anie"
          width={160}
          height={160}
          className="rounded-full border-4 border-yellow-500 w-full h-full object-cover"
        />
      </div>
      <p className="text-base md:text-lg text-gray-700">
        Especialista em Tax Tech, automação tributária e transformação de carreiras.
        <br />
        Com passagens por KPMG, Amazon, Nestlé e PwC.
        <br />
        Fundadora da Tax In — formadora de profissionais tributários do futuro.
      </p>
    </section>
  )
}
