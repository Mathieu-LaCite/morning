function Header() {
  //Simple Header with a reference to the other pages
  return (
    <header className="absolute top-0 left-0 w-full z-20 flex items-center justify-between px-4 sm:px-6 md:px-8 py-4 md:py-6 text-white">
      <div className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-300 underline decoration-2 underline-offset-4">
        Small Time Dev
      </div>
      <nav className="flex gap-3 sm:gap-4 md:gap-6 mr-2 sm:mr-4 md:mr-6 text-sm sm:text-base">
        <a href="#dawn" className="hover:opacity-75 hover:text-blue-400 transition">Dawn</a>
        <a href="#noon" className="hover:opacity-75 hover:text-blue-400 transition">Noon</a>
        <a href="#husk" className="hover:opacity-75 hover:text-blue-400 transition">Husk</a>
      </nav>
    </header>
  )
}

export default Header