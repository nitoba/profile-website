export function ContactMe() {
    return (
        <section id="contact" className="mt-24 flex flex-col items-center justify-center">
            <h2 className="flex text-text-title text-3xl items-center justify-center">Entre em contato comigo</h2>
            <a href="mailto:brukum2@gmail.com">
                <button className="hover:brightness-75 transition-all duration-300 mt-8 p-3 bg-red rounded-md flex items-center justify-center text-text-title">Entrar em contato</button>
            </a>
        </section>
    )
}