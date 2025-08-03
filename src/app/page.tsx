'use client';

import Header from '../components/Header'
import Hero from '../components/Hero'
import MenuSection from '../components/MenuSection'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react'

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const menuCategories = [
    {
      id: 'tea-coffee',
      title: '🫖 Tea & Coffee',
      items: [
        { name: 'Mocktail Special', price: '₹10' },
        { name: 'Strawberry', price: '₹15' },
        { name: 'Pineapple', price: '₹15' },
        { name: 'Blueberry', price: '₹15' },
        { name: 'Butterscotch', price: '₹15' },
        { name: 'Black Masala', price: '₹15' },
        { name: 'Black Lemon', price: '₹15' },
        { name: 'Black Jaggery', price: '₹15' },
      ],
      featured: true
    },
    {
      id: 'coffee',
      title: '☕ Coffee',
      items: [
        { name: 'Hot Coffee', price: '₹30' },
        { name: 'Black Hot Coffee', price: '₹30' },
      ]
    },
    {
      id: 'cold-coffee',
      title: '🧋 Cold Coffee',
      items: [
        { name: 'Cold Coffee', price: '₹80' },
        { name: 'KitKat Special', price: '₹90' },
        { name: 'Orio Punch Mix', price: '₹90' },
        { name: 'KitKat Orio Mix', price: '₹100' },
      ]
    },
    {
      id: 'maggi',
      title: '🍜 Maggi',
      items: [
        { name: 'Asli Plain', price: '₹50' },
        { name: 'Cheesy Plain', price: '₹70' },
        { name: 'Veggie Mix', price: '₹80' },
        { name: 'Paneer Masala Mix', price: '₹90' },
        { name: 'Nagpuri Masala Spicy', price: '₹90' },
      ]
    },
    {
      id: 'pasta',
      title: '🍝 Pasta',
      items: [
        { name: 'Cheesy Masala Red', price: '₹80' },
        { name: 'Loaded Veggie Red', price: '₹90' },
        { name: 'Loaded Masala Red', price: '₹90' },
        { name: 'Chili Paneer Red', price: '₹100' },
      ]
    },
    {
      id: 'momos',
      title: '🥟 Momos',
      items: [
        { name: 'Veg Steamed - Full', price: '₹80' },
        { name: 'Veg Steamed - Half', price: '₹50' },
        { name: 'Veg Fried - Full', price: '₹90' },
        { name: 'Veg Fried - Half', price: '₹60' },
        { name: 'Paneer Steamed - Full', price: '₹100' },
        { name: 'Paneer Steamed - Half', price: '₹60' },
        { name: 'Paneer Fried - Full', price: '₹110' },
        { name: 'Paneer Fried - Half', price: '₹70' },
      ]
    },
   
    {
      id: 'sandwich',
      title: '🥪 Sandwich',
      items: [
        { name: 'Desi Veggie', price: '₹80' },
        { name: 'Cheese Treat', price: '₹90' },
        { name: 'Paneer Treat', price: '₹100' },
        { name: 'Chocolate Added', price: '₹90' },
      ]
    },
    {
      id: 'pizza',
      title: '🍕 Pizza',
      items: [
        { name: 'Classic Onion', price: '₹70' },
        { name: 'Royal Margherita', price: '₹100' },
        { name: 'Fresh Tomato', price: '₹100' },
        { name: 'Capsicum Delight', price: '₹100' },
        { name: 'Veggie Loaded', price: '₹120' },
        { name: 'Sweet Corn Special', price: '₹120' },
        { name: 'Veggie Corn Delight', price: '₹130' },
        { name: 'Paneer Special', price: '₹140' },
        { name: 'Veggie Paneer', price: '₹140' },
        { name: 'All Olive Delight', price: '₹150' },
        { name: 'Extra Cheese', price: '₹20' },
        { name: 'Extra Veggie', price: '₹15' },
        { name: 'Parcel Box', price: '₹10' },
      ]
    },
    {
      id: 'burger',
      title: '🍔 Burger',
      items: [
        { name: 'Aloo Tikki', price: '₹80' },
        { name: 'Classic Veg', price: '₹90' },
        { name: 'Paneer Mix', price: '₹100' },
        { name: 'Cheesy Special', price: '₹110' },
      ]
    },
    {
      id: 'french-fries',
      title: '🍟 French Fries',
      items: [
        { name: 'Salted Masala', price: '₹80' },
        { name: 'Maggi', price: '₹90' },
        { name: 'Peri Peri Masala', price: '₹100' },
        { name: 'Cheese Masala', price: '₹110' },
      ]
    },
    {
      id: 'milkshake',
      title: '🥤 Milkshake',
      items: [
        { name: 'Strawberry', price: '₹80' },
        { name: 'Pineapple', price: '₹90' },
        { name: 'Blueberry', price: '₹100' },
        { name: 'Butterscotch', price: '₹100' },
        { name: 'Oreo', price: '₹120' },
        { name: 'KitKat', price: '₹130' },
        { name: 'Oreo KitKat', price: '₹150' },
      ]
    },
     
    {
      id: 'mocktails',
      title: '🍹 Mocktails',
      items: [
        { name: 'Mint Curacao', price: '₹110' },
        { name: 'Blue Curacao', price: '₹110' },
        { name: 'Mojito Special', price: '₹110' },
        { name: 'Mojito Mint', price: '₹120' },
        { name: 'Kala Khatta', price: '₹120' },
        { name: 'Blue Fizz', price: '₹120' },
        { name: 'Peach Fizz', price: '₹120' },
        { name: 'Lemongrass Ginger', price: '₹120' },
      ],
      featured: true
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-rose-50 to-sage-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="fixed inset-0 opacity-15 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-sage-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-chai-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-terracotta-200/25 rounded-full blur-3xl"></div>
      </div>
      
      <Header />
      <Hero />
      
      <section className="relative py-20 md:py-24 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-neutral-400 to-transparent"></div>
              <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">Our Menu</span>
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-neutral-400 to-transparent"></div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-neutral-700 mb-6 animate-fade-in-up">
              Discover Our Menu
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              From traditional teas to innovative mocktails, every item is crafted with care and quality ingredients
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            {mounted && menuCategories.map((category, idx) => (
              <div key={category.id} className="animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <MenuSection 
                  id={category.id}
                  title={category.title}
                  items={category.items}
                  featured={category.featured}
                  open={openIndex === idx}
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                />
              </div>
            ))}
            {!mounted && menuCategories.map((category, idx) => (
              <div key={category.id} className="mb-6">
                <div className="w-full flex items-center justify-between px-6 py-6 rounded-3xl shadow-soft bg-gradient-to-r from-neutral-100 to-neutral-50 border border-neutral-200">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/80 backdrop-blur-sm flex items-center justify-center text-2xl shadow-sm">
                      {category.title.split(' ')[0]}
                    </div>
                    <div className="text-left">
                      <span className="text-lg font-display font-semibold text-neutral-700">
                        {category.title}
                      </span>
                      <p className="text-sm text-neutral-500 mt-1">
                        {category.items.length} {category.items.length === 1 ? 'item' : 'items'} available
                      </p>
                    </div>
                  </div>
                  <svg className="w-6 h-6 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to action */}
          <div className="text-center mt-20 animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 shadow-soft">
              <span className="text-2xl">📍</span>
              <div className="text-left">
                <p className="font-semibold text-neutral-700">Visit us in Nagpur</p>
                <p className="text-sm text-neutral-600">Experience the perfect blend of comfort and sophistication</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}