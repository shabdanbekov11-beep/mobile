"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Briefcase, 
  Store, 
  Building2, 
  Flower2, 
  ShoppingBag, 
  Car,
  TrendingUp
} from "lucide-react"

const projects = [
  { name: "Dos_reklama", icon: TrendingUp },
  { name: "Недвижимость", icon: Building2 },
  { name: "Matiz_avtosalon", icon: Car },
  { name: "Suiuum гүл дүкөнү", icon: Flower2 },
  { name: "El_magazin", icon: ShoppingBag },
]

export function AboutFounder() {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="secondary" className="mb-4 text-sm px-4 py-1">
            Негиздөөчү
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-[family-name:var(--font-display)]">
            Асанов Шабданбек
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Кесипкой Академиясынын директору жана негиздөөчүсү
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden border-0 shadow-xl">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <span className="text-6xl font-bold text-primary-foreground font-[family-name:var(--font-display)]">
                      АШ
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <p className="text-lg text-foreground leading-relaxed">
                Акыркы <span className="font-semibold text-primary">3 жылдан</span> бери онлайн тармагында жеке ишкерлик менен активдүү алектенип келем. Бул убакыт ичинде маркетинг, SMM жана мобилография багытында терең тажрыйба топтоп, ар кандай бизнес долбоорлорду өнүктүрүүгө салым коштум.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Буга чейин китеп дүкөн бизнесин ийгиликтүү жүргүзүп, онлайн сатуу системасын түзгөнбүз.
              </p>
            </div>

            <div className="pt-4">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-primary" />
                Активдүү долбоорлор
              </h3>
              <div className="flex flex-wrap gap-3">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Badge 
                      variant="outline" 
                      className="px-4 py-2 text-sm flex items-center gap-2 hover:bg-primary/10 transition-colors"
                    >
                      <project.icon className="w-4 h-4 text-primary" />
                      {project.name}
                    </Badge>
                  </motion.div>
                ))}
                <Badge 
                  variant="outline" 
                  className="px-4 py-2 text-sm flex items-center gap-2"
                >
                  <Store className="w-4 h-4 text-primary" />
                  жана башкалар...
                </Badge>
              </div>
            </div>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <p className="text-foreground italic leading-relaxed">
                  &ldquo;Биздин негизги багыт — бизнестерди онлайн өстүрүү жана кирешесин көбөйтүү.&rdquo;
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
