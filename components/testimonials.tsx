export function Testimonials() {
  const testimonials = [
    {
      name: "Samylla Silva",
      text: "Eu participei do primeiro workshop. Foi uma manhã de muitas trocas e aprendizado.",
    },
    {
      name: "Maria Ines Gonçalves",
      text: "Eu super recomendo o Workshop de Alteryx. A Julie Anie Freiria tem uma didática excelente aliada à Expertise que torna o Workshop único. O que mais me motivou a participar do 1º Workshop foi saber que era alguém de Tax que conhece bem nossos desafios diários.",
    },
    {
      name: "Ewerton Rodrigues",
      text: "Além dos insights, no workshop que participei falamos de diversos temas de tecnologia, debatemos outros casos além do proposto e muitas dúvidas foram sanadas! Super indico.",
    },
    {
      name: "Lourraine Calegari",
      text: "Participei dos dois workshops anteriores e não tenho o que falar, didática excelente, resolução de casos práticos e respostas das dúvidas ao vivo, além de termos um grupo que podemos tirar dúvidas direto com a Julie quando precisarmos! Sem dúvidas é um ótimo investimento!",
    },
    {
      name: "Taís Blanco",
      text: "Foi muito importante participar deste workshop, pois meu conhecimento era 0, mas minha curiosidade em saber como funcionava me despertou. Foi bem dinâmico e didático. Super recomendo.",
    },
    {
      name: "Francinele Lima",
      text: "Participei do último e foi sensacional a troca de ideias, vale muito o investimento! Certamente será um sucesso!",
    },
  ]

  return (
    <section id="depoimentos" className="mt-10 md:mt-20 max-w-4xl mx-auto text-center p-4 md:p-8 w-full">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-10">Depoimentos de quem já participou</h2>

      <div className="space-y-6 md:space-y-10">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="border p-4 md:p-6 rounded-lg shadow-md">
            <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">{testimonial.name}</h3>
            <p className="text-gray-700">"{testimonial.text}"</p>
          </div>
        ))}
      </div>
    </section>
  )
}
