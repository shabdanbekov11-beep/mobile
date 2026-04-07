"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { 
  BookOpen, 
  Target, 
  Users, 
  Lightbulb,
  CheckCircle2,
  ArrowRight
} from "lucide-react"

const features = [
  {
    icon: BookOpen,
    title: "Теория + практика",
    description: "Билимди реалдуу иш жүзүндө колдонуу",
  },
  {
    icon: Target,
    title: "Реалдуу кейстер",
    description: "Чыныгы бизнес мисалдары менен окуу",
  },
  {
    icon: Users,
    title: "Кардар менен иштөө",
    description: "Кардарларды табуу жана кызматташтык",
  },
  {
    icon: Lightbulb,
    title: "Киреше табууга чейин",
    description: "Натыйжага чыкканга чейин колдоо",
  },
]

export function AcademyInfo() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Badge variant="secondary" className="text-sm px-4 py-1">
              Академия жөнүндө
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-[family-name:var(--font-display)]">
              Кесипкой Академиясы — заманбап кесиптерди үйрөтүүчү билим берүү борбору
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Бул жерде биз SMM, мобилография жана онлайн акча табуу жолдорун <span className="text-primary font-semibold">0дөн</span> баштап практикалык негизде үйрөтөбүз.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{feature.title}</h4>
                    <p className="text-xs text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Card className="bg-primary text-primary-foreground border-0 mt-6">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-bold font-[family-name:var(--font-display)]">150+</div>
                  <div>
                    <p className="font-semibold">Окуучу</p>
                    <p className="text-sm text-primary-foreground/80">реалдуу жыйынтык чыгарды</p>
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
          >
            <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground font-[family-name:var(--font-display)]">
                    Мен бул курсту эмне үчүн түздүм?
                  </h3>
                </div>

                <p className="text-foreground leading-relaxed">
                  Менин негизги максатым — <span className="font-semibold text-primary">кадимки эле телефон менен Кыргызстанда жакшы киреше тапса болорун далилдөө.</span>
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Көпчүлүк адамдар мүмкүнчүлүк жок деп ойлошот. Бирок туура билим жана туура багыт болсо — ар ким акча таба алат.
                </p>

                <div className="space-y-3 pt-4">
                  <div className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Сизге жолду кыскартып берем</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Ката кетирбей, түздөн-түз натыйжага чыгууга жардам берем</span>
                  </div>
                </div>

                <a 
                  href="#registration"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all mt-4"
                >
                  Курска катталуу
                  <ArrowRight className="w-4 h-4" />
                </a>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
