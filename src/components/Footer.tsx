export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-neutral-200 via-neutral-300 to-neutral-200 text-neutral-700 py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12">
          <div className="flex-1">
            <h3 className="text-3xl font-display font-bold mb-3 text-neutral-800">40/60</h3>
            <p className="text-neutral-600 text-lg font-medium mb-4">A Modern Tea Bar Experience</p>
            <p className="text-neutral-500 leading-relaxed">
              Where tradition meets innovation in every cup. Experience the perfect blend of comfort and sophistication.
            </p>
          </div>
          <div className="flex-1 md:text-right">
            <h4 className="text-xl font-display font-semibold mb-4 text-neutral-800">Visit Us</h4>
            <div className="space-y-2 text-neutral-600">
              <p className="font-medium">Nagpur, Maharashtra</p>
              <p className="text-neutral-500">Open daily: 10AM - 10PM</p>
              <p className="text-neutral-500">Weekends: 9AM - 11PM</p>
            </div>
          </div>
        </div>
        <div className="border-t border-neutral-400 mt-12 pt-8 text-center">
          <p className="text-neutral-500">
            © {new Date().getFullYear()} 40/60 Tea Bar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}