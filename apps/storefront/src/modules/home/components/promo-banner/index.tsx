import LocalizedClientLink from "@modules/common/components/localized-client-link"

const marqueeItems = [
  "Kişiye özel tasarım",
  "Özenli üretim",
  "Güvenli paketleme",
  "Türkiye geneli teslimat",
]

const PromoBanner = () => {
  return (
    <section className="bg-white px-4 py-10 small:px-6 small:py-16">
      <div className="content-container overflow-hidden px-0">
        <div className="relative flex min-h-[360px] items-end overflow-hidden bg-[#1b1b1b] px-6 py-10 small:min-h-[460px] small:px-12 small:py-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_30%,rgba(189,135,80,0.48),transparent_32%),linear-gradient(120deg,#151515_0%,#25211d_55%,#6f4a2e_100%)]" />
          <div className="absolute -right-16 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full border border-white/15 small:right-[8%] small:h-[430px] small:w-[430px]" />
          <div className="absolute right-[8%] top-1/2 hidden h-64 w-48 -translate-y-1/2 rotate-6 border-[10px] border-[#151515] bg-[#d7c3a8] shadow-2xl small:block" />

          <div className="relative z-10 max-w-xl text-white">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#e3b77e]">
              Yeni koleksiyon
            </p>
            <h2 className="text-4xl font-semibold leading-[1.02] tracking-[-0.04em] small:text-6xl">
              Duvarınızda size ait bir hikâye.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-6 text-white/75 small:text-base">
              Bu alan kampanya görseli, sezon koleksiyonu veya kişiye özel ürün duyurusu için hazırlandı.
            </p>
            <LocalizedClientLink
              href="/store"
              className="mt-8 inline-flex bg-white px-7 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#171717] transition-colors hover:bg-[#f7d84b]"
            >
              Ürünleri incele
            </LocalizedClientLink>
          </div>
        </div>

        <div className="marquee-track-wrapper border-x border-b border-[#ded8ce] bg-[#f7d84b] py-4">
          <div className="marquee-track flex w-max items-center">
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <div
                key={`${item}-${index}`}
                className="flex items-center whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.18em] text-[#171717]"
              >
                <span className="px-8 small:px-12">{item}</span>
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#171717]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PromoBanner
