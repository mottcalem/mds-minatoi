import { Suspense } from "react"

import { listLocales } from "@lib/data/locales"
import { getLocale } from "@lib/data/locale-actions"
import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import Image from "next/image"

const navigation = [
  { label: "Cam tablolar", href: "/store" },
  { label: "Kişiye özel", href: "/store" },
  { label: "Ahşap tablolar", href: "/store" },
  { label: "Metal tablolar", href: "/store" },
  { label: "Patili dostlar", href: "/store" },
]

export default async function Nav() {
  const [regions, locales, currentLocale] = await Promise.all([
    listRegions().then((regions: StoreRegion[]) => regions),
    listLocales(),
    getLocale(),
  ])

  return (
    <div className="sticky inset-x-0 top-0 z-50 bg-white">
      <div className="flex min-h-10 items-center justify-center bg-[#f7d84b] px-6 text-center text-[11px] font-medium tracking-wide text-[#171717]">
        Tüm ürünlerde avantajlı fiyatlar ve Türkiye&apos;nin her yerine güvenli teslimat
      </div>
      <header className="border-b border-[#e5e2dc] bg-white">
        <nav className="content-container flex h-[78px] w-full items-center justify-between">
          <div className="flex h-full flex-1 basis-0 items-center lg:hidden">
            <SideMenu regions={regions} locales={locales} currentLocale={currentLocale} />
          </div>

          <LocalizedClientLink
            href="/"
            className="flex items-center"
            data-testid="nav-store-link"
          >
            <Image
              src="/images/minatoi-logo.jpg"
              alt="Minatoi"
              width={160}
              height={41}
              priority
              className="h-auto w-[126px] small:w-[150px]"
            />
          </LocalizedClientLink>

          <div className="ml-12 hidden h-full items-center gap-7 lg:flex">
            {navigation.map((item) => (
              <LocalizedClientLink
                key={item.label}
                href={item.href}
                className="flex h-full items-center text-[11px] font-semibold uppercase tracking-[0.13em] text-[#262626] transition-colors hover:text-[#bd8750]"
              >
                {item.label}
              </LocalizedClientLink>
            ))}
          </div>

          <div className="flex h-full flex-1 basis-0 items-center justify-end gap-x-5 text-xs font-medium">
            <LocalizedClientLink
              className="hidden uppercase tracking-[0.1em] text-[#333] hover:text-[#bd8750] small:block"
              href="/account"
              data-testid="nav-account-link"
            >
              Hesabım
            </LocalizedClientLink>
            <Suspense
              fallback={
                <LocalizedClientLink
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  Sepet (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  )
}
