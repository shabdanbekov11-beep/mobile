import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Courses } from "@/components/courses"
import { Stats } from "@/components/stats"
import { AboutFounder } from "@/components/about-founder"
import { Achievements } from "@/components/achievements"
import { AcademyInfo } from "@/components/academy-info"
import { Features } from "@/components/features"
import { RegistrationForm } from "@/components/registration-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Courses />
      <Stats />
      <AboutFounder />
      <Achievements />
      <AcademyInfo />
      <Features />
      <RegistrationForm />
      <Footer />
    </main>
  )
}
