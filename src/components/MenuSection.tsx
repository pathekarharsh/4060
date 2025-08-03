import { MenuItem } from '../types'
import { Disclosure } from '@headlessui/react'

interface MenuSectionProps {
  id: string
  title: string
  items: MenuItem[]
  featured?: boolean
  open: boolean
  onClick: () => void
}

import Image from 'next/image'

const getCategoryIcon = (title: string) => {
  if (title.includes('Tea')) {
    return (
      <div className="w-12 h-12 relative rounded-2xl overflow-hidden">
        <Image 
          src={require('../assets/chai.png')} 
          alt="Tea" 
          fill
          className="object-contain w-full h-full"
          sizes="48px"
        />
      </div>
    )
  }
  if (title.includes('Cold Coffee')) {
    return (
      <div className="w-12 h-12 relative rounded-2xl overflow-hidden">
        <Image 
          src={require('../assets/cold coffee.png')} 
          alt="Cold Coffee" 
          fill
          className="object-contain w-full h-full"
          sizes="48px"
        />
      </div>
    )
  }
  if (title.includes('Coffee')) {
    return (
      <div className="w-12 h-12 relative rounded-2xl overflow-hidden">
        <Image 
          src={require('../assets/coffee.png')} 
          alt="Coffee" 
          fill
          className="object-contain w-full h-full"
          sizes="48px"
        />
      </div>
    )
  }
  if (title.includes('Maggi')) {
    try {
      const maggiImg = require('../assets/maggi.png');
      return (
        <div className="w-12 h-12 relative rounded-2xl overflow-hidden">
          <Image 
            src={maggiImg} 
            alt="Maggi" 
            fill
            className="object-contain w-full h-full"
            sizes="48px"
          />
        </div>
      )
    } catch {
      return '🍜'
    }
  }
  if (title.includes('Momos')) {
    try {
      const momosImg = require('../assets/momos.png');
      return (
        <div className="w-12 h-12 relative rounded-2xl overflow-hidden">
          <Image 
            src={momosImg} 
            alt="Momos" 
            fill
            className="object-contain w-full h-full"
            sizes="48px"
          />
        </div>
      )
    } catch {
      return '🥟'
    }
  }
  if (title.includes('Pasta')) {
    try {
      const pastaImg = require('../assets/pasta.png');
      return (
        <div className="w-12 h-12 relative rounded-2xl overflow-hidden">
          <Image 
            src={pastaImg} 
            alt="Pasta" 
            fill
            className="object-contain w-full h-full"
            sizes="48px"
          />
        </div>
      )
    } catch {
      return '🍝'
    }
  }
  if (title.includes('Sandwich')) {
    try {
      const sandwichImg = require('../assets/sandwich.png');
      return (
        <div className="w-12 h-12 relative rounded-2xl overflow-hidden">
          <Image 
            src={sandwichImg} 
            alt="Sandwich" 
            fill
            className="object-contain w-full h-full"
            sizes="48px"
          />
        </div>
      )
    } catch {
      return '🥪'
    }
  }
  if (title.includes('Pizza')) {
    try {
      const pizzaImg = require('../assets/pizza.png');
      return (
        <div className="w-12 h-12 relative rounded-2xl overflow-hidden">
          <Image 
            src={pizzaImg} 
            alt="Pizza" 
            fill
            className="object-contain w-full h-full"
            sizes="48px"
          />
        </div>
      )
    } catch {
      return '🍕'
    }
  }
  if (title.includes('Burger')) {
    try {
      const burgerImg = require('../assets/burger.png');
      return (
        <div className="w-12 h-12 relative rounded-2xl overflow-hidden">
          <Image 
            src={burgerImg} 
            alt="Burger" 
            fill
            className="object-contain w-full h-full"
            sizes="48px"
          />
        </div>
      )
    } catch {
      return '🍔'
    }
  }
  if (title.includes('French Fries')) {
    try {
      const friesImg = require('../assets/french fries.png');
      return (
        <div className="w-12 h-12 relative rounded-2xl overflow-hidden">
          <Image 
            src={friesImg} 
            alt="French Fries" 
            fill
            className="object-contain w-full h-full"
            sizes="48px"
          />
        </div>
      )
    } catch {
      return '🍟'
    }
  }
  if (title.includes('Milkshake')) {
    try {
      const milkshakeImg = require('../assets/milkshake.png');
      return (
        <div className="w-12 h-12 relative rounded-2xl overflow-hidden">
          <Image 
            src={milkshakeImg} 
            alt="Milkshake" 
            fill
            className="object-contain w-full h-full"
            sizes="48px"
          />
        </div>
      )
    } catch {
      return '🥤'
    }
  }
  if (title.includes('Mocktails')) {
    try {
      const mocktailImg = require('../assets/mocktails.png');
      return (
        <div className="w-12 h-12 relative rounded-2xl overflow-hidden">
          <Image 
            src={mocktailImg} 
            alt="Mocktails" 
            fill
            className="object-contain w-full h-full"
            sizes="48px"
          />
        </div>
      )
    } catch {
      return '🍹'
    }
  }
  return '🍽️'
}

const getCategoryColor = (title: string, featured: boolean) => {
  if (featured) return 'from-sage-100 to-sage-50 border-sage-200'
  if (title.includes('Tea') || title.includes('Coffee')) return 'from-chai-100 to-chai-50 border-chai-200'
  if (title.includes('Mocktails')) return 'from-terracotta-100 to-terracotta-50 border-terracotta-200'
  if (title.includes('Food')) return 'from-rose-100 to-rose-50 border-rose-200'
  return 'from-neutral-100 to-neutral-50 border-neutral-200'
}

export default function MenuSection({ id, title, items, featured = false, open, onClick }: MenuSectionProps) {
  const icon = getCategoryIcon(title)
  const colorClass = getCategoryColor(title, featured)
  
  return (
    <div className="mb-6">
      <button
        id={id}
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        onClick={onClick}
        className={`group w-full flex items-center justify-between px-6 py-6 rounded-3xl shadow-soft transition-all duration-500 bg-gradient-to-r ${colorClass} border focus-ring hover:shadow-large active:scale-[0.98] ${
          open 
            ? 'shadow-large scale-[1.02]' 
            : 'hover:scale-[1.01]'
        }`}
      >
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-2xl bg-white/80 backdrop-blur-sm flex items-center justify-center text-2xl shadow-sm transition-transform duration-300 ${
            open ? 'scale-110' : 'group-hover:scale-105'
          }`}>
            {icon}
          </div>
          <div className="text-left">
            <span className={`text-lg font-display font-semibold flex items-center gap-2 ${
              featured ? 'text-sage-700' : 'text-neutral-700'
            }`}>
              {title}
            </span>
            <p className="text-sm text-neutral-500 mt-1">
              {items.length} {items.length === 1 ? 'item' : 'items'} available
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          {featured && (
            <span className="px-3 py-1 bg-sage-200 text-sage-700 text-xs font-semibold rounded-full">
              Featured
            </span>
          )}
          <svg 
            className={`w-6 h-6 transition-all duration-300 text-neutral-500 ${
              open ? 'rotate-180 text-chai-600 scale-110' : 'group-hover:text-neutral-600'
            }`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={id}
        className={`overflow-hidden transition-all duration-700 ease-in-out ${
          open ? 'max-h-[800px] py-6' : 'max-h-0 py-0'
        }`}
        style={{
          transitionProperty: 'max-height, padding',
        }}
      >
        {open && (
          <div className="px-4">
            {/* Category description */}
            <div className="mb-6 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50">
              <p className="text-neutral-600 text-sm leading-relaxed">
                {featured 
                  ? "Our signature selection of handcrafted beverages, carefully curated for the perfect tea experience."
                  : "Delicious options crafted with care and quality ingredients."
                }
              </p>
            </div>
            
            <ul className="space-y-4 animate-fade-in-up">
              {items.map((item, idx) => (
                <li
                  key={idx}
                  className="group flex justify-between items-center bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-5 shadow-sm border border-white/50 text-base text-neutral-700 font-medium hover:shadow-soft transition-all duration-300 hover:border-neutral-200 hover:bg-white/90 hover:scale-[1.02]"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-chai-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="font-medium">{item.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-chai-600 text-lg">{item.price}</span>
                    <div className="w-8 h-8 rounded-full bg-chai-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <svg className="w-4 h-4 text-chai-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}