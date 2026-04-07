"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { 
  CheckCircle2, 
  Users, 
  TrendingUp, 
  Handshake, 
  Store, 
  Wallet,
  Award
} from "lucide-react"

const achievements = [
  {
    icon: Award,
    text: "3 жылдан ашык онлайн бизнес жана маркетинг тажрыйба",
  },
  {
    icon: Handshake,
    text: "50+ ден ашык ишкерлерге маркетинг аркылуу жардам бердик",
  },
  {
    icon: TrendingUp,
    text: "Жергиликтүү бренддер менен ийгиликтүү кызматташтык",
  },
  {
    icon: CheckCircle2,
    text: "Онлайн сатуу системасын түзүп, бизнес кирешелерин өстүрдүк",
  },
  {
    icon: Users,
    text: "150ден ашык окуучу даярдалды",
  },
  {
    icon: Wallet,
    text: "Окуучуларыбыздын көбү өз алдынча акча таба башташты",
  },
  {
    icon: TrendingUp,
    text: "Айрымдары 80 000 — 200 000 сомго чейин киреше чыгарып жатышат",
  },
  {
    icon: Store,
    text: "Көпчүлүк окуучулар өзүнүн магазин/бизнесин ачышты",
  },
]

export function Achievements() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="secondary" className="mb-4 text-sm px-4 py-1">
            Жетишкендиктер
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-[family-name:var(--font-display)]">
            Тажрыйба жана натыйжалар
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Биздин жолубуздагы негизги жетишкендиктер
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <achievement.icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-foreground leading-relaxed">
                      {achievement.text}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
