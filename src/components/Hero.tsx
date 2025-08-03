import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-neutral-50 via-rose-50 to-sage-50 py-12 md:py-24 lg:py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23A3B18A' fill-opacity='0.08'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-sage-200/40 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-chai-200/50 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-terracotta-200/40 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="container mx-auto px-6 text-center relative z-10 flex flex-col grow justify-center">
        <div className="max-w-5xl mx-auto w-full">
          {/* Hero image placeholder */}
          <div className="mb-10 flex justify-center">
            <div className="relative">
              <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-sage-200 to-chai-200 shadow-large animate-scale-in flex items-center justify-center">
                <span className="text-4xl md:text-5xl">🫖</span>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-terracotta-300 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-sage-300 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-neutral-800 mb-4 leading-tight animate-fade-in-up">
            40/60
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-neutral-700 mb-6 font-medium leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            A Modern Tea Bar Experience
          </p>
          <p className="text-base sm:text-lg md:text-xl text-neutral-600 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Where tradition meets innovation in every cup. Experience the perfect blend of comfort and sophistication in the heart of Nagpur.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Link
              href="#tea-coffee"
              className="group inline-flex items-center justify-center px-8 py-4 bg-chai-500 hover:bg-chai-600 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-large focus-ring"
            >
              <span>View Tea Menu</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="#mocktails"
              className="group inline-flex items-center justify-center px-8 py-4 bg-white/90 hover:bg-white text-chai-600 font-semibold rounded-2xl border-2 border-chai-200 hover:border-chai-300 transition-all duration-300 transform hover:scale-105 hover:shadow-soft focus-ring backdrop-blur-sm"
            >
              <span>View Mocktails</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Stats section: Always in a row, also on mobile */}
          <div className="mt-14 flex flex-row justify-center gap-6 sm:gap-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="text-center min-w-[90px]">
              <div className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-neutral-800 mb-1">50+</div>
              <div className="text-xs sm:text-sm text-neutral-600 font-medium">Tea Varieties</div>
            </div>
            <div className="text-center min-w-[90px]">
              <div className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-neutral-800 mb-1">4.9★</div>
              <div className="text-xs sm:text-sm text-neutral-600 font-medium">Customer Rating</div>
            </div>
            <div className="text-center min-w-[90px]">
              <div className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-neutral-800 mb-1">5+</div>
              <div className="text-xs sm:text-sm text-neutral-600 font-medium">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-20 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
}
