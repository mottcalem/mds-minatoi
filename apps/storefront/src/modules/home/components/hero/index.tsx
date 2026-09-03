import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Image from "next/image"

const Hero = () => {
  return (
    <section className="overflow-hidden border-b border-[#ded8ce] bg-[#f3ece3]">
      <LocalizedClientLink
        href="/store"
        className="relative block h-[58vw] min-h-[300px] max-h-[520px] small:h-[38vw] small:min-h-[360px] small:max-h-[610px]"
      >
        <Image
          src="/images/slider-minatoi.jpg"
          alt="Minatoi cam tablo modelleri"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </LocalizedClientLink>
    </section>
  )
}

export default Hero
