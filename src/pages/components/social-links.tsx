export default function SocialLinks() {
  return (
    <div className="flex items-center gap-8">
      <a
        href="https://instagram.com/nito.b.a"
        target="_blank"
        className="hover:scale-125 transition-all duration-300"
        rel="noreferrer"
      >
        <img src="assets/icons/instagram.svg" alt="Instagram icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/bruno-alves-882173161/"
        target="_blank"
        className="hover:scale-125 transition-all duration-300"
        rel="noreferrer"
      >
        <img src="assets/icons/linkedin.svg" alt="Linkedin icon" />
      </a>
      <a
        href="https://github.com/Nitoba/"
        target="_blank"
        className="hover:scale-125 transition-all duration-300"
        rel="noreferrer"
      >
        <img src="assets/icons/github.svg" alt="Github icon" />
      </a>
    </div>
  )
}
