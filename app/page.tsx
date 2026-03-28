import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import FeatureBar from '@/components/FeatureBar'
import About from '@/components/About'
import Services from '@/components/Services'
import HowItWorks from '@/components/HowItWorks'
import SignUp from '@/components/SignUp'
import FAQ from '@/components/FAQ'
import Gallery from '@/components/Gallery'
import Donation from '@/components/Donation'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

export default function Home() {
  return (
    <div className="h-full bg-white">
      <Navbar />
      <main>
        <Hero />
        <FeatureBar />
        <About />
        <Services />
        <HowItWorks />
        {/* <SignUp /> */}
        <FAQ />
        <Gallery />
        {/* <Donation /> */}
        <CTA />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
