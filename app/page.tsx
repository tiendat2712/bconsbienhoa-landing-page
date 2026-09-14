import { SiteHeader } from '@/components/layout/site-header'
import { Hero } from '@/components/home/hero'
import { Overview } from '@/components/home/overview'
import { Location } from '@/components/home/location'
import { Amenities } from '@/components/home/amenities'
import { FloorPlans } from '@/components/home/floor-plans'
import { ShowhouseShowcase } from '@/components/home/showhouse-showcase'
import { VirtualTour } from '@/components/home/virtual-tour'
import { Pricing } from '@/components/home/pricing'
import { FinancialCalculator } from '@/components/home/financial-calculator'
import { Progress } from '@/components/home/progress'
import { News } from '@/components/home/news'
import { Contact } from '@/components/home/contact'
import { SiteFooter } from '@/components/layout/site-footer'
import { FloatingContact } from '@/components/layout/floating-contact'
import { SitePreferencesProvider } from '@/components/layout/site-preferences'

export const dynamic = 'force-static'

export default function Page() {
  return (
    <SitePreferencesProvider>
      <SiteHeader />
      <main className="overflow-x-hidden w-full max-w-full">
        <Hero />
        <Overview />
        <Location />
        <Amenities />
        <FloorPlans />
        <ShowhouseShowcase />
        <VirtualTour />
        <Pricing />
        <FinancialCalculator />
        <Progress />
        <News />
        <Contact />
      </main>
      <SiteFooter />
      <FloatingContact />
    </SitePreferencesProvider>
  )
}
