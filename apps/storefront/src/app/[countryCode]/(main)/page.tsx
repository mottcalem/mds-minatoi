import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"
import { listProducts } from "@lib/data/products"

export const metadata: Metadata = {
  title: "Minatoi | Yaşam Alanınıza Özel Sanat",
  description:
    "Cam, ahşap ve metal tablolar ile kişiye özel duvar dekorasyonu.",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params

  const { countryCode } = params

  const [region, { collections }, { response }] = await Promise.all([
    getRegion(countryCode),
    listCollections({ fields: "id, handle, title" }),
    listProducts({ countryCode, queryParams: { limit: 3 } }),
  ])

  if (!collections || !region) {
    return null
  }

  return (
    <>
      <Hero products={response.products} />
      <section className="border-b border-[#e5e2dc] bg-white">
        <div className="content-container grid grid-cols-2 gap-x-5 gap-y-6 py-7 text-center text-xs font-medium text-[#34312d] medium:grid-cols-4">
          <p>UV direkt baskı</p>
          <p>Özenli ve güvenli paketleme</p>
          <p>Parlak yüzey, pürüzsüz kenarlar</p>
          <p>Türkiye geneli hızlı teslimat</p>
        </div>
      </section>
      <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div>
    </>
  )
}
