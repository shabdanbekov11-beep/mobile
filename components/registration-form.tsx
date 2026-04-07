"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, Loader2, Phone, Mail, User, MessageSquare } from "lucide-react"

const courses = [
  { value: "oration", label: "Ораторлук (Сүйлөө чеберчилиги)" },
  { value: "smm", label: "SMM & Мобилография" },
  { value: "target", label: "Таргет реклама" },
  { value: "business", label: "Бизнестин баштапкы этабы" },
  { value: "sales", label: "Сатуу менеджер" },
]

export function RegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Find selected course label
    const selectedCourse = courses.find(c => c.value === formData.course)?.label || formData.course
    
    // Format message for WhatsApp
    const message = `*Жаңы арыз - Кесипкой Академиясы*

*Аты:* ${formData.name}
*Телефон:* ${formData.phone}
*Email:* ${formData.email || "Көрсөтүлгөн эмес"}
*Курс:* ${selectedCourse}
*Билдирүү:* ${formData.message || "Жок"}`.trim()

    // WhatsApp number (replace with actual number)
    const phoneNumber = "996776557253"
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(message)
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    
    // Small delay for UX
    await new Promise((resolve) => setTimeout(resolve, 500))
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank")
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <section id="registration" className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto border-primary/20">
            <CardContent className="pt-12 pb-12 text-center">
              <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-[family-name:var(--font-display)]">
                Рахмат! WhatsApp ачылды
              </h3>
              <p className="text-muted-foreground text-lg mb-6">
                Билдирүүнү жөнөтүңүз жана биз сиз менен тез арада байланышабыз
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setIsSubmitted(false)
                  setFormData({
                    name: "",
                    phone: "",
                    email: "",
                    course: "",
                    message: "",
                  })
                }}
              >
                Дагы бир арыз жөнөтүү
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section id="registration" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left side - info */}
          <div className="space-y-8">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Катталуу
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 font-[family-name:var(--font-display)] text-balance">
                Курска жазылуу
              </h2>
              <p className="text-lg text-muted-foreground">
                Арыз калтырыңыз, биз сиз менен байланышып, бардык суроолоруңузга жооп беребиз
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-card rounded-2xl border border-border">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Телефон</p>
                  <a href="tel:0776557253" className="font-semibold text-lg hover:text-primary transition-colors">
                    0776 557 253
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-card rounded-2xl border border-border">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Байланыш адамы</p>
                  <p className="font-semibold text-lg">Шабданбек Асанов</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
              <p className="text-lg font-medium text-balance">
                &ldquo;Жөн эле көрүп кетпе, аракет кыл — натыйжа сөзсүз болот.&rdquo;
              </p>
            </div>
          </div>

          {/* Right side - form */}
          <Card className="border-border shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-[family-name:var(--font-display)]">
                Арыз формасы
              </CardTitle>
              <CardDescription>
                Маалыматтарыңызды толтуруп, жөнөтүңүз
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    Атыңыз *
                  </Label>
                  <Input
                    id="name"
                    placeholder="Толук атыңыз"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    Телефон номуру *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+996 XXX XXX XXX"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    Email (милдеттүү эмес)
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="course" className="flex items-center gap-2">
                    Кайсы курска кызыкдарсыз? *
                  </Label>
                  <Select
                    value={formData.course}
                    onValueChange={(value) => handleChange("course", value)}
                    required
                  >
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Курсту тандаңыз" />
                    </SelectTrigger>
                    <SelectContent>
                      {courses.map((course) => (
                        <SelectItem key={course.value} value={course.value}>
                          {course.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-muted-foreground" />
                    Кошумча билдирүү
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Суроолоруңуз же каалооңуз болсо жазыңыз..."
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    rows={4}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-12 text-base"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Жөнөтүлүүдө...
                    </>
                  ) : (
                    "Арыз жөнөтүү"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
