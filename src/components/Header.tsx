import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200/50 shadow-soft">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link 
          href="/" 
          className="text-2xl font-display font-bold text-chai-600 hover:text-chai-700 transition-colors duration-200"
        >
          40/60
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link 
            href="#tea-coffee" 
            className="text-neutral-600 hover:text-chai-600 font-medium transition-colors duration-200 relative group"
          >
            Tea & Coffee
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-chai-400 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link 
            href="#mocktails" 
            className="text-neutral-600 hover:text-chai-600 font-medium transition-colors duration-200 relative group"
          >
            Mocktails
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-chai-400 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link 
            href="#menu" 
            className="text-neutral-600 hover:text-chai-600 font-medium transition-colors duration-200 relative group"
          >
            Full Menu
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-chai-400 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </nav>
        <button className="md:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors duration-200">
          <svg className="w-6 h-6 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  )
}