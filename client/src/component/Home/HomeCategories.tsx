import { Link } from "react-router-dom"
import { categoriesData } from "../../assets/assets"

const HomeCategories = () => {
  return (
    <section className="py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center sm:text-left">
          <h2 className="text-xl sm:text-2xl font-semibold">Browse Categories</h2>
          <p className="text-sm text-app-text-light mt-1">
            Find exactly what you need by category
          </p>
        </div>

        {/* Mobile: swipeable row | sm+: all items share the row equally */}
        <div className="-mx-4 px-4 sm:mx-0 sm:px-0 mt-6 sm:mt-8 flex flex-nowrap gap-3 sm:gap-3 lg:gap-4 overflow-x-auto snap-x no-scrollbar sm:overflow-visible">
          {categoriesData.map((cat) => (
            <Link
              key={cat.slug}
              to={`/products?category=${cat.slug}`}
              onClick={() => window.scrollTo(0, 0)}
              className="group flex flex-col items-center gap-2 sm:gap-3 shrink-0 snap-start w-20 sm:w-auto sm:flex-1 sm:min-w-0"
            >
              <div className="w-full aspect-square rounded-xl sm:rounded-2xl overflow-hidden bg-orange-100 ring-orange-300/75 group-hover:ring-2 group-focus-visible:ring-2 transition-all">
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <span className="w-full text-xs sm:text-sm font-medium text-center leading-tight truncate">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeCategories