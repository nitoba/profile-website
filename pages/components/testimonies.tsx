import { TestimonyCard } from "./testimony-card";

/* eslint-disable @next/next/no-img-element */
export function Testimonies() {
    return (
        <section id="testimonials" className="flex flex-col w-full mt-28">
            <h2 className="text-text-title text-3xl">Não acredite em mim, veja o que outros pensam</h2>
            <div className="grid grid-cols-3 gap-x-7 mt-12">
                <TestimonyCard />
                <TestimonyCard />
                <TestimonyCard />
            </div>
        </section>
    )
}