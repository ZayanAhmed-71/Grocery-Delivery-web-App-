import { ArrowRightIcon, LeafIcon, TruckIcon, ShieldCheckIcon, SproutIcon } from "lucide-react"
import { Link } from "react-router-dom"
import { heroSectionData } from "../../assets/assets"

const perks = [
    { icon: SproutIcon, label: "100% Organic" },
    { icon: TruckIcon, label: "Same-day Delivery" },
    { icon: ShieldCheckIcon, label: "Quality Guaranteed" },
]

const Hero = () => {
    return (
        <section className="relative isolate overflow-hidden min-h-135 mb-10 rounded-3xl flex items-center shadow-xl shadow-black/10">
            {/* Background image */}
            <img
                src={heroSectionData.hero_image}
                alt="Fresh organic produce from local farms"
                className="absolute inset-0 -z-20 w-full h-full object-cover"
                fetchPriority="high"
            />

            {/* Gradient overlays for text contrast */}
            <div className="absolute inset-0 -z-10 bg-linear-to-r from-app-green via-app-green/70 to-transparent" />
            <div className="absolute inset-0 -z-10 bg-linear-to-t from-black/30 via-transparent to-transparent" />

            {/* Decorative glow */}
            <div
                aria-hidden="true"
                className="absolute -left-24 -bottom-24 -z-10 size-72 rounded-full bg-orange-300/20 blur-3xl"
            />

            <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-16 sm:py-20">
                <div className="max-w-xl">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 mb-5 text-xs font-semibold tracking-wide text-orange-300 bg-orange-300/10 border border-orange-300/30 backdrop-blur-sm rounded-full">
                        <LeafIcon className="size-3.5" />
                        Farm-Fresh &amp; Organic
                    </span>

                    <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-[1.1] tracking-tight text-balance mb-5">
                        Nourish your home with{" "}
                        <span className="text-orange-300 italic">Earth&apos;s finest</span>
                    </h1>

                    <p className="max-w-md mb-8 text-base sm:text-lg text-white/80 leading-relaxed">
                        {heroSectionData.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                        <Link
                            to="/products"
                            className="group inline-flex items-center justify-center gap-2 px-7 py-3 bg-orange-400 text-white font-semibold rounded-full shadow-lg shadow-orange-500/30 hover:bg-orange-500 hover:shadow-orange-500/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 focus-visible:ring-offset-app-green transition-all active:scale-[0.98]"
                        >
                            Shop Now
                            <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
                        </Link>

                        <Link
                            to="/products"
                            className="inline-flex items-center justify-center gap-2 px-7 py-3 text-white font-semibold border border-white/60 rounded-full backdrop-blur-sm hover:bg-white/15 hover:border-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 transition-all active:scale-[0.98]"
                        >
                            Browse Categories
                        </Link>
                    </div>

                    {/* Trust perks */}
                    <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/80">
                        {perks.map(({ icon: Icon, label }) => (
                            <li key={label} className="inline-flex items-center gap-2">
                                <Icon className="size-4 text-orange-300" />
                                {label}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Hero