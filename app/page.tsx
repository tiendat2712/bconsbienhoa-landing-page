import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Overview } from '@/components/overview'
import { Location } from '@/components/location'
import { Amenities } from '@/components/amenities'
import { FloorPlans } from '@/components/floor-plans'
import { ShowUnit } from '@/components/show-unit'
import { Pricing } from '@/components/pricing'
import { LegalProgress } from '@/components/legal-progress'
import { News } from '@/components/news'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'
import { FloatingContact } from '@/components/floating-contact'
import { SitePreferencesProvider } from '@/components/site-preferences'

export default function Page() {
  return (
    <SitePreferencesProvider>
      <SiteHeader />
      <main>
        <Hero />
        <Overview />
        <Location />
        <Amenities />
        <FloorPlans />
        <ShowUnit />
        <Pricing />
        <LegalProgress />
        <News />
        <Contact />
      </main>
      <SiteFooter />
      <FloatingContact />
    </SitePreferencesProvider>
  )
}
