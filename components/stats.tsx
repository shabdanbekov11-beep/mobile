"use client"

import { useEffect, useState, useRef } from "react"
import { Users, Calendar, TrendingUp, Award } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: 100,
    suffix: "+",
    label: "Окуучулар",
    description: "Биздин курстарды аяктаган",
  },
  {
    icon: Calendar,
    value: 7,
    suffix: " ай",
    label: "Тажрыйба",
    description: "Ийгиликтүү иштөө",
  },
  {
    icon: TrendingUp,
    value: 100,
    prefix: "",
    suffix: "K",
    label: "Максималдуу киреше",
    description: "Сом айына",
  },
  {
    icon: Award,
    value: 94,
    suffix: "%",
    label: "Ийгилик",
    description: "Окуучулардын натыйжасы",
  },
]

function AnimatedCounter({ 
  value, 
  prefix = "", 
  suffix = "", 
  isVisible 
}: { 
  value: number
  prefix?: string
  suffix: string
  isVisible: boolean 
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    let start = 0
    const end = value
    const duration = 2000
    const increment = end / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [value, isVisible])

  return (
    <span className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-display)]">
      {prefix}{count}{suffix}
    </span>
  )
}

export function Stats() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-foreground/70 font-medium text-sm uppercase tracking-wider">
            Жыйынтыктар
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 font-[family-name:var(--font-display)] text-balance">
            Биздин көрсөткүчтөр
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-3xl bg-primary-foreground/10 backdrop-blur-sm"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary-foreground/20 flex items-center justify-center mx-auto mb-6">
                <stat.icon className="h-8 w-8" />
              </div>
              <AnimatedCounter
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                isVisible={isVisible}
              />
              <h3 className="text-xl font-semibold mt-3 mb-2">{stat.label}</h3>
              <p className="text-primary-foreground/70">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
