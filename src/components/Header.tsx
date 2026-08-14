function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-20 flex items-center justify-between px-8 py-6 text-white">
      <div className="text-xl font-bold">Mathieu</div>
      <nav className="flex gap-6">
        <a href="#about" className="hover:opacity-75 transition">Dawn</a>
        <a href="#projects" className="hover:opacity-75 transition">Noon</a>
        <a href="#contact" className="hover:opacity-75 transition">Husk</a>
      </nav>
    </header>
  )
}

export default Header