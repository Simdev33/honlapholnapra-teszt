"use client"

import Image from "next/image"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"

type BlogPost = {
  title: string
  excerpt: string
  category: string
  dateLabel: string
  image: string
}

const blogPosts: BlogPost[] = [
  {
    title: "Hogyan készül el egy profi céges honlap 7 nap alatt?",
    excerpt:
      "Lépésről lépésre bemutatjuk, hogyan lesz a briefből kész, gyors és megbízható weboldal. Ha fontos a gyors weblap készítés és a kiszámítható határidő, ez a folyamat segít átlátni, mitől működik hatékonyan a honlap fejlesztés.",
    category: "Folyamat",
    dateLabel: "2026. május 10.",
    image: "/honlapholnapra-process-visual.png",
  },
  {
    title: "Miért kritikus a betöltési sebesség a konverzióban?",
    excerpt:
      "A lassú oldal közvetlenül csökkenti az ajánlatkérések számát, főleg mobilon. Konkrét példákon mutatjuk meg, hogyan javít a modern honlap készítés eredményén a gyors betöltés, és miért kulcstényező a teljesítmény a konverzióban.",
    category: "Sebesség",
    dateLabel: "2026. május 7.",
    image: "/hh-service-speed.png",
  },
  {
    title: "Landing oldal vagy teljes weboldal: mikor melyik jobb?",
    excerpt:
      "Nem minden projekthez kell ugyanakkora megoldás: néha egy célzott landing oldal, máskor egy komplett honlap fejlesztés a nyerő. Segítünk eldönteni, mikor elég egy gyors weboldal készítés, és mikor térül meg a teljes rendszerben gondolkodás.",
    category: "Stratégia",
    dateLabel: "2026. május 4.",
    image: "/hh-service-complex.png",
  },
  {
    title: "SEO-barát weboldal alapok már az első naptól",
    excerpt:
      "A jól rangsoroló oldal nem a véletlen műve: technikai alapokra épül. Ebben a cikkben összeszedtük, milyen SEO-lépések kellenek már a honlap készítés elején, hogy a kész weboldal fejlesztés után is stabilan hozza az organikus forgalmat.",
    category: "SEO",
    dateLabel: "2026. április 29.",
    image: "/hh-service-seo.png",
  },
  {
    title: "Milyen tartalom kell, hogy a weboldal tényleg értékesítsen?",
    excerpt:
      "A szép design önmagában kevés: a jól felépített szöveg, CTA és bizalmi elemek adják az értékesítő erőt. Megmutatjuk, hogyan lesz egy átgondolt weblap készítésből olyan oldal, ami nemcsak mutatós, hanem folyamatosan érdeklődőt is hoz.",
    category: "Tartalom",
    dateLabel: "2026. április 23.",
    image: "/hh-service-24h.png",
  },
]

export function BlogCarouselSection() {
  return (
    <section id="blog" className="tj-blog-section section-gap hh-blog-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-heading sec-heading-centered">
              <span className="sub-title wow fadeInUp" data-wow-delay="0.3s">
                <i className="tji-subtitle"></i>Blog
              </span>
              <h2 className="sec-title text-anim">Hasznos cikkek honlapkészítésről</h2>
              <p className="desc hh-blog-desc wow fadeInUp" data-wow-delay="0.3s">
                Gyakorlati cikkek weblap készítés, honlap fejlesztés és honlap készítés témában: SEO, sebesség, konverzió és
                üzletileg eredményes weboldal-stratégia.
              </p>
            </div>
          </div>
        </div>

        <div className="hh-blog-slider-wrap">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              nextEl: ".hh-blog-next",
              prevEl: ".hh-blog-prev",
            }}
            pagination={{
              clickable: true,
              el: ".hh-blog-pagination",
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
          >
            {blogPosts.map((post) => (
              <SwiperSlide key={post.title}>
                <article className="blog-item style-2 h-100">
                  <div className="blog-thumb">
                    <Image width={870} height={450} src={post.image} alt={post.title} />
                    <span className="categories">
                      <span>{post.category}</span>
                    </span>
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <span>Honlap Holnapra</span>
                      <span>{post.dateLabel}</span>
                    </div>
                    <h4 className="title">{post.title}</h4>
                    <p className="desc">{post.excerpt}</p>
                    <Link className="text-btn" href="#kapcsolat">
                      <span className="btn-text">
                        <span>Tovább a konzultációra</span>
                      </span>
                      <span className="btn-icon">
                        <span>
                          <i className="tji-arrow-right"></i>
                        </span>
                      </span>
                    </Link>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="hh-blog-slider-controls">
            <button type="button" className="hh-blog-nav-btn hh-blog-prev" aria-label="Előző blog">
              <i className="tji-arrow-left"></i>
            </button>
            <div className="hh-blog-pagination"></div>
            <button type="button" className="hh-blog-nav-btn hh-blog-next" aria-label="Következő blog">
              <i className="tji-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
