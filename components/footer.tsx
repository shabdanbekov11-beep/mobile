import { GraduationCap, Phone, MapPin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl font-[family-name:var(--font-display)]">
                Кесипкой Академиясы
              </span>
            </div>
            <p className="text-background/70 leading-relaxed">
              Заманбап кесиптерди үйрөтүп, адамдарды реалдуу кирешеге чыгарган окуу борбор.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Байланыштар</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="tel:0776557253" 
                  className="flex items-center gap-3 text-background/70 hover:text-background transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  0776 557 253
                </a>
              </li>
              <li>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-background/70 hover:text-background transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                  Instagram
                </a>
              </li>
              <li>
                <span className="flex items-center gap-3 text-background/70">
                  <MapPin className="h-5 w-5" />
                  Кыргызстан
                </span>
              </li>
            </ul>
          </div>

          {/* Mission */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Биздин миссия</h3>
            <p className="text-background/70 leading-relaxed">
              Адамдарга адал жол менен акча табууну үйрөтүү жана жашоосун өзгөртүү
            </p>
            <div className="pt-4">
              <p className="text-sm text-background/50">
                © 2024 Кесипкой Академиясы. Бардык укуктар корголгон.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
