import { TestimonyCard } from "./testimony-card";

/* eslint-disable @next/next/no-img-element */
export function Testimonies() {
    return (
        <section id="testimonials" className="flex flex-col w-full mt-28">
            <h2 className="text-text-title text-3xl">Não acredite em mim, veja o que outros pensam</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-x-7 mt-12">
                <TestimonyCard 
                    name="Guilherme Rodrigues"
                    userImage="https://github.com/Guilherme2020.png"
                    description="Acompanhei o Bruno no desenvolvimento do projeto mobile Artbit ( https://artbit.com/ https://play.google.com/store/apps/details?id=io.sthorm.artbit ). Durante o projeto, ele apresentou domínio de Flutter, conceitos de DDD, implementação de UI respeitando os protótipos, integração com serviços de Streaming. Além da parte técnica, ele demonstrou total dedicação no projeto."
                />
            </div>
        </section>
    )
}