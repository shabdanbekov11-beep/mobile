"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Users, Trophy, TrendingUp } from "lucide-react"

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-1/2 -left-40 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              7 ай ичинде 100+ окуучу
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance font-[family-name:var(--font-display)]">
              Заманбап кесиптерди үйрөнүп,{" "}
              <span className="text-primary">реалдуу киреше</span> таб
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Адамдарга адал жол менен акча табууну үйрөтүп, жашоосун өзгөртүүгө жардам берген окуу борбор. 80% практика, 20% теория.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="text-base px-8"
                onClick={() => scrollToSection("registration")}
              >
                Курска жазылуу
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-base px-8"
                onClick={() => scrollToSection("courses")}
              >
                <Play className="mr-2 h-5 w-5" />
                Багыттарды көрүү
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-primary">
                  <Users className="h-5 w-5" />
                  <span className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)]">100+</span>
                </div>
                <p className="text-sm text-muted-foreground">Окуучулар</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-primary">
                  <Trophy className="h-5 w-5" />
                  <span className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)]">7</span>
                </div>
                <p className="text-sm text-muted-foreground">Ай тажрыйба</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-primary">
                  <TrendingUp className="h-5 w-5" />
                  <span className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)]">100K</span>
                </div>
                <p className="text-sm text-muted-foreground">Сом кирешеге чейин</p>
              </div>
            </div>
          </div>

          {/* Right content - decorative card */}
          <div className="relative hidden lg:block">
            <div className="relative bg-card rounded-3xl p-8 shadow-2xl border border-border">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Trophy className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Кесипкой Академиясы</h3>
                    <p className="text-muted-foreground">Окуу борбор</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-muted rounded-xl">
                    <span className="text-muted-foreground">Окуучулар</span>
                    <span className="font-semibold text-primary">+127%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-muted rounded-xl">
                    <span className="text-muted-foreground">Орточо киреше</span>
                    <span className="font-semibold text-primary">60,000 сом</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-muted rounded-xl">
                    <span className="text-muted-foreground">Ийгиликтүү бүткөндөр</span>
                    <span className="font-semibold text-primary">94%</span>
                  </div>
                </div>

                {/* Progress visualization */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Практика</span>
                    <span className="font-medium">80%</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-4/5 bg-primary rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 bg-card rounded-2xl p-4 shadow-lg border border-border animate-bounce">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Киреше</p>
                  <p className="font-semibold">+100,000 сом</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
