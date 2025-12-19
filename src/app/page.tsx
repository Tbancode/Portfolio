import Hero from '@/components/Hero'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import ContactForm from '@/components/ContactForm'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <ContactForm />
    </div>
  )
}