import { SiteHeader } from '@/components/layout/site-header'
import { Hero } from '@/components/home/hero'
import { Overview } from '@/components/home/overview'
import { Location } from '@/components/home/location'
import { Amenities } from '@/components/home/amenities'
import { FloorPlans } from '@/components/home/floor-plans'
import { ShowUnit } from '@/components/home/show-unit'
import { Pricing } from '@/components/home/pricing'
import { LegalProgress } from '@/components/home/legal-progress'
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
