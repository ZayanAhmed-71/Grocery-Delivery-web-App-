import { useNavigate } from "react-router-dom"
import { Plus, Star } from "lucide-react"
import type { Product } from "../types"
import { useCart } from "../context/CartContext"

interface Props {
  product: Product
}

const ProductCard = ({ product }: Props) => {
  const currency = import.meta.env.VITE_CURRENCY_SYMBOL || "$"

  // TODO: replace with your real cart context/store
  const { addToCart } = useCart()
  const navigate = useNavigate()

  const goToProduct = () => navigate(`/product/${product._id}`)

  return (
    <div
      role="link"
      tabIndex={0}
      onClick={goToProduct}
      onKeyDown={(e) => {
        if (e.key === "Enter") goToProduct()
      }}
      className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-zinc-100 shadow-sm hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-app-orange transition-all duration-300 animate-fade-in cursor-pointer"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-zinc-50">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover p-4 group-hover:scale-105 transition-transform duration-300"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {product.discount > 0 && (
            <span className="px-2 py-0.5 text-[10px] font-semibold uppercase bg-app-orange text-white rounded-full shadow-sm">
              {product.discount}% OFF
            </span>
          )}
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col flex-1 p-3 sm:p-4 text-zinc-700">
        <h3 className="text-sm leading-snug mb-1.5 line-clamp-2 min-h-10 group-hover:text-zinc-900 transition-colors">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <Star className="size-3.5 text-app-warning fill-app-warning" />
          <span className="text-xs font-medium text-app-text">{product.rating}</span>
          <span className="text-xs text-app-text-light">({product.reviewCount})</span>
        </div>

        {/* Price + Add */}
        <div className="mt-auto flex items-center justify-between gap-2">
          <div className="flex flex-wrap items-baseline gap-x-1.5 min-w-0">
            <span className="text-base font-semibold text-zinc-900">
              {currency}
              {product.price.toFixed(2)}
            </span>
            <span className="text-xs text-app-text-light">{product.unit}</span>
            {product.originalPrice > product.price && (
              <span className="text-xs text-app-text-light line-through">
                {currency}
                {product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          <button
            type="button"
            aria-label={`Add ${product.name} to cart`}
            onClick={(e) => {
              e.stopPropagation()
              addToCart(product)
            }}
            onKeyDown={(e) => e.stopPropagation()}
            className="size-8 shrink-0 rounded-full bg-app-orange text-white flex items-center justify-center shadow-sm hover:bg-app-orange-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-app-orange focus-visible:ring-offset-2 transition-colors active:scale-95"
          >
            <Plus className="size-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard