"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mic, Camera, Target, Briefcase, ShoppingBag, ArrowRight } from "lucide-react"

const courses = [
  {
    icon: Mic,
    title: "Ораторлук",
    subtitle: "Сүйлөө чеберчилиги",
    description: "Сахнада эркин сүйлөө, камерадан коркпоо, өзүнө ишеним, эл алдында чыгуу",
    result: "Эркин сүйлөйсүң, өз оюңду так жеткиресиң",
    color: "bg-orange-500/10 text-orange-600",
  },
  {
    icon: Camera,
    title: "SMM & Мобилография",
    subtitle: "Контент түзүү",
    description: "Видео тартуу, контент түзүү, Instagram, TikTok өстүрүү, кардар тартуу",
    result: "Телефон менен акча табасың",
    color: "bg-pink-500/10 text-pink-600",
  },
  {
    icon: Target,
    title: "Таргет реклама",
    subtitle: "Цифралык маркетинг",
    description: "Instagram/Facebook реклама, клиент алып келүү, бизнеске трафик берүү",
    result: "Реклама аркылуу акча табууну үйрөнөсүң",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Briefcase,
    title: "Бизнестин баштапкы этабы",
    subtitle: "Өз ишиңди баштоо",
    description: "Бизнес идея табуу, товар тандоо, сатуу системасы, 10 күндө старт",
    result: "Өз бизнесиңди баштайсың",
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    icon: ShoppingBag,
    title: "Сатуу менеджер",
    subtitle: "Сатуу чеберчилиги",
    description: "Кардар менен сүйлөшүү, сатуу техникасы, каршылыкты жабуу, чатта сатуу",
    result: "Сатуу аркылуу акча табасың",
    color: "bg-amber-500/10 text-amber-600",
  },
]

export function Courses() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="courses" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Окутулган багыттар
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 font-[family-name:var(--font-display)] text-balance">
            Заманбап кесиптерди үйрөн
          </h2>
          <p className="text-lg text-muted-foreground">
            Ар бир багыт практикага багытталган жана реалдуу натыйжа берет
          </p>
        </div>

        {/* Courses grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/20 overflow-hidden"
            >
              <CardHeader className="pb-4">
                <div className={`w-14 h-14 rounded-2xl ${course.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <course.icon className="h-7 w-7" />
                </div>
                <CardTitle className="text-xl">{course.title}</CardTitle>
                <CardDescription className="text-primary font-medium">
                  {course.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{course.description}</p>
                <div className="p-4 bg-primary/5 rounded-xl border border-primary/10">
                  <p className="text-sm font-medium">
                    <span className="text-primary">Натыйжа:</span>{" "}
                    {course.result}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="px-8"
            onClick={() => scrollToSection("registration")}
          >
            Курска жазылуу
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
