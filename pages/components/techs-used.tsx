export function TechsUsed() {
    return (
        <section className="mt-36">
            <h2 className="text-text-title text-3xl">Tecnologias que utilizo</h2>
            <div className="grid grid-cols-3 mt-16 gap-4">
                <div className="hover:-translate-y-4 transition-all duration-300 bg-background-fg gap-y-5 rounded-2xl flex flex-col items-center justify-center p-4">
                    <img className="w-16" src="assets/icons/nodejs.svg" alt="Node Js Icon" />
                    <h1 className="text-text-title">Back End - Node Js</h1>
                </div>
                <div className="hover:-translate-y-4 transition-all duration-300 bg-background-fg gap-y-5 rounded-2xl flex flex-col items-center justify-center p-4">
                    <img className="w-16" src="assets/icons/reactjs.svg" alt="React Js Icon" />
                    <h1 className="text-text-title">Front End - React Js</h1>
                </div>
                <div className="hover:-translate-y-4 transition-all duration-300 bg-background-fg gap-y-5 rounded-2xl flex flex-col items-center justify-center p-4">
                    <img className="w-16" src="assets/icons/flutter.svg" alt="Flutter Icon" />
                    <h1 className="text-text-title">Mobile - Flutter</h1>
                </div>
            </div>
        </section>
    )
}