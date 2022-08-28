
import Animation from '../components/common/animation'
import { LanguageContext } from '../components/contexts/languageName'
import Hero from '../components/home/hero'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <Hero />
          <Animation />
        </div>
      </section>
    </Layout>
  )
}
