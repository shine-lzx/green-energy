import { useState, useEffect } from 'react'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className={`text-xl font-bold ${isScrolled ? 'text-black' : 'text-black'}`}>
              Nexus Energy
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-10">
            <a href="#calculator" className="text-sm font-medium text-black/80 hover:text-[#016d35] transition-colors">
              收益测算
            </a>
            <a href="#products" className="text-sm font-medium text-black/80 hover:text-[#016d35] transition-colors">
              能源方案
            </a>
            <a href="#features" className="text-sm font-medium text-black/80 hover:text-[#016d35] transition-colors">
              关于我们
            </a>
            <a href="#contact" className="text-sm font-medium text-black/80 hover:text-[#016d35] transition-colors">
              联系我们
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="px-5 py-2.5 text-sm font-medium text-black/80 hover:text-black transition-all">
              登录
            </button>
            <button className="px-6 py-2.5 bg-black text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition-all">
              免费咨询
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
