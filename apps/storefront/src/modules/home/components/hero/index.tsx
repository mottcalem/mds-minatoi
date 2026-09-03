import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Image from "next/image"

const Hero = () => {
  return (
    <section className="overflow-hidden border-b border-[#ded8ce] bg-[#f3ece3]">
      <LocalizedClientLink href="/store" className="block">
        <Image
          src="/images/slider-minatoi.jpg"
          alt="Minatoi cam tablo modelleri"
          width={1671}
          height={775}
          priority
          sizes="100vw"
          className="h-auto w-full"
        />
      </LocalizedClientLink>
    </section>
  )
}

export default Hero
