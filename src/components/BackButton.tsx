import { Link } from 'react-router-dom'

function BackButton() {
  return (
    <Link
      to="/"
      className="absolute top-20 left-6 z-30 flex items-center gap-1 px-4 py-2 rounded-lg border border-white/30 bg-white/10 text-white/80 hover:bg-white/20 hover:text-white hover:border-white/50 transition"
    >
      Go Back
    </Link>
  )
}

export default BackButton