import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Image from "next/image"

const productKinds = ["CAM", "AHŞAP", "METAL"]

const Hero = ({ products }: { products: HttpTypes.StoreProduct[] }) => {
  const visualProducts = products.filter((product) => product.thumbnail).slice(0, 3)

  return (
    <section className="border-b border-[#ded8ce] bg-[#f2eee7]">
      <div className="mx-auto grid min-h-[560px] max-w-[1920px] grid-cols-1 overflow-hidden lg:grid-cols-[38%_62%]">
        <div className="relative z-10 flex flex-col justify-center px-6 py-16 small:px-10 lg:px-[7vw]">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-[#9a6a32]">
            Mekânınıza özel sanat
          </p>
          <h1 className="max-w-[620px] text-[clamp(3rem,5vw,5.75rem)] font-semibold leading-[0.96] tracking-[-0.055em] text-[#111]">
            Sanatın gücü,
            <span className="mt-2 block text-[#bd8750]">tarzınızın</span>
            <span className="mt-2 block">yansıması.</span>
          </h1>
          <p className="mt-7 max-w-[520px] text-base leading-7 text-[#4f4b45] small:text-lg">
            Camın zarafeti, ahşabın sıcaklığı ve metalin güçlü duruşuyla
            yaşam alanınıza karakter katın.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <LocalizedClientLink href="/store" className="bg-[#111] px-7 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#bd8750]">
              Koleksiyonu keşfet
            </LocalizedClientLink>
            <LocalizedClientLink href="/store" className="border border-[#111] px-7 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#111] transition-colors hover:bg-white">
              Çok satanlar
            </LocalizedClientLink>
          </div>
        </div>

        <div className="grid min-h-[440px] grid-cols-3 border-t border-[#ded8ce] bg-[#ded8ce] lg:min-h-[560px] lg:border-l lg:border-t-0">
          {[0, 1, 2].map((index) => {
            const product = visualProducts[index]

            return (
              <LocalizedClientLink
                href={product?.handle ? `/products/${product.handle}` : "/store"}
                key={product?.id ?? index}
                className="group relative overflow-hidden border-r border-[#ded8ce] bg-[#e8e3da] last:border-r-0"
              >
                {product?.thumbnail ? (
                  <Image src={product.thumbnail} alt={product.title} fill priority={index === 0} sizes="(max-width: 1024px) 33vw, 21vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#eee9df] via-[#d5cfc4] to-[#b8afa3]" />
                )}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-4 pb-5 pt-20 text-white small:px-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/75">{productKinds[index]}</p>
                  <p className="mt-1 line-clamp-2 text-sm font-medium small:text-base">{product?.title ?? "Özel tasarım tablolar"}</p>
                </div>
              </LocalizedClientLink>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Hero
