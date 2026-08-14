function Header() {
  //Simple Header with a reference to the other pages
  return (
    <header className="absolute top-0 left-0 w-full z-20 flex items-center justify-between px-8 py-6 text-white">
      <div className="text-2xl font-bold text-yellow-300">Small Time Dev</div>
      <nav className="flex gap-6 mr-6">
        <a href="#dawn" className="hover:opacity-75 hover:text-blue-400 transition">Dawn</a>
        <a href="#noon" className="hover:opacity-75 hover:text-blue-400 transition">Noon</a>
        <a href="#husk" className="hover:opacity-75 hover:text-blue-400 transition">Husk</a>
      </nav>
    </header>
  )
}

export default Header