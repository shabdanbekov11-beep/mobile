import { CheckCircle, Users, Zap, Heart, MessageCircle, Award } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "80% практика, 20% теория",
    description: "Практикага багытталган окуу системасы",
  },
  {
    icon: Users,
    title: "Колдоо (поддержка) бар",
    description: "Окуу учурунда жана андан кийин да колдоп турабыз",
  },
  {
    icon: CheckCircle,
    title: "Натыйжага иштейбиз",
    description: "Окуп эле тим болбойсуң — иштеп баштайсың",
  },
  {
    icon: MessageCircle,
    title: "Жөнөкөй тилде түшүндүрөбүз",
    description: "Татаал нерселерди жеңил жана түшүнүктүү үйрөтөбүз",
  },
  {
    icon: Heart,
    title: "Команда бар",
    description: "Чогуу өсүп, бири-бирин колдогон жамаат",
  },
  {
    icon: Award,
    title: "Замандын актуалдуу кесиптери",
    description: "Азыркы заманга ылайык кесиптерди үйрөтөбүз",
  },
]

const targetAudience = [
  "Студенттер",
  "Жаштар", 
  "Апалар",
  "Бизнес баштагысы келгендер",
  "Онлайн акча табууну каалагандар",
]

export function Features() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Why choose us */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Эмне үчүн биз?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-8 font-[family-name:var(--font-display)] text-balance">
              Эмне үчүн бизди тандайсың?
            </h2>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex gap-4 p-4 rounded-2xl hover:bg-muted/50 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Target audience */}
          <div className="lg:sticky lg:top-24">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Кимдер үчүн?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-8 font-[family-name:var(--font-display)]">
              Бул курстар кимдер үчүн?
            </h2>

            <div className="bg-card rounded-3xl p-8 border border-border shadow-lg">
              <ul className="space-y-4">
                {targetAudience.map((audience, index) => (
                  <li 
                    key={index} 
                    className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">
                      {index + 1}
                    </div>
                    <span className="font-medium text-lg">{audience}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-6 bg-primary/5 rounded-2xl border border-primary/10">
                <p className="text-center text-lg font-medium text-balance">
                  &ldquo;Эгер сен өзгөрөм десең — бул мүмкүнчүлүк сен үчүн&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
