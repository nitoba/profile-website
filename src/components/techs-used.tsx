'use client'

export function TechsUsed() {
  return (
    <section id="techs" className="lg:mt-36 md:mt-48 mt-24">
      <h2 className="text-text-title text-3xl">Tecnologias que ultilizo</h2>
      <div className="grid md:grid-cols-3 grid-cols-1 mt-16 gap-4">
        <CardTech
          title="Back End - Node Js"
          iconPath="assets/icons/nodejs.svg"
          iconAlt="Node Js Icon"
        />
        <CardTech
          title="Back End - Node Js"
          iconPath="assets/icons/reactjs.svg"
          iconAlt="Node Js Icon"
        />
        <CardTech
          title="Mobile - Flutter"
          iconPath="assets/icons/flutter.svg"
          iconAlt="Flutter Icon"
        />
        <CardTech
          title="Mobile - React Native"
          iconPath="assets/icons/react-native.svg"
          iconAlt="React Native Icon"
        />
      </div>
    </section>
  )
}

type CardTechProps = {
  title: string
  iconPath: string
  iconAlt: string
}

function CardTech({ title, iconPath, iconAlt }: CardTechProps) {
  return (
    <div className="cursor-pointer hover:brightness-90 transition-all duration-300 group bg-background-fg gap-y-5 rounded-2xl flex flex-col items-center justify-center p-4">
      <img
        className="w-16 transition-all duration-300 group-hover:translate-y-2"
        src={iconPath}
        alt={iconAlt}
      />
      <h1 className="text-text-title text-center">{title}</h1>
    </div>
  )
}
