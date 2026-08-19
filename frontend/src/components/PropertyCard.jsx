import { useNavigate } from "react-router-dom";

function PropertyCard({ property, onDelete }) {
  const navigate = useNavigate();

  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* CHANGED: h-52 -> h-44 sm:h-52 (shorter image block on phones so cards aren't too tall) */}
      <div className="relative h-44 overflow-hidden bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-400 sm:h-52">

        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10" />
        <div className="absolute -bottom-16 -left-10 h-44 w-44 rounded-full bg-white/10" />

        {/* CHANGED: icon box h-24 w-24 text-6xl -> h-16 w-16 text-4xl on mobile, full size on sm+ */}
        <div className="flex h-full items-center justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 text-4xl shadow-lg backdrop-blur-sm sm:h-24 sm:w-24 sm:text-6xl">
            🏠
          </div>
        </div>

        {/* CHANGED: badge padding shrinks slightly on mobile (right-3 top-3 vs right-4 top-4) */}
        <div className="absolute right-3 top-3 sm:right-4 sm:top-4">
          <span
            className={`rounded-full px-2.5 py-1 text-xs font-bold shadow-sm sm:px-3 sm:py-1.5 ${
              property.available
                ? "bg-emerald-100 text-emerald-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {property.available ? "● Available" : "● Occupied"}
          </span>
        </div>

        <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
          <span className="rounded-lg bg-black/30 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm sm:px-3 sm:py-1.5">
            {property.propertyType}
          </span>
        </div>
      </div>

      {/* CHANGED: p-5 -> p-4 sm:p-5 */}
      <div className="p-4 sm:p-5">

        {/* CHANGED: text-xl -> text-lg sm:text-xl */}
        <h2 className="line-clamp-1 text-lg font-bold text-slate-900 transition group-hover:text-indigo-600 sm:text-xl">
          {property.title}
        </h2>

        <p className="mt-2 flex items-center gap-2 text-sm font-medium text-slate-500">
          📍 {property.location}
        </p>

        <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-500">
          {property.description}
        </p>

        <div className="mt-5 grid grid-cols-3 divide-x divide-slate-200 rounded-xl bg-slate-50 py-3">
          <div className="text-center">
            {/* CHANGED: text-lg -> text-base sm:text-lg */}
            <p className="text-base font-bold text-slate-900 sm:text-lg">{property.bedrooms}</p>
            <p className="text-xs text-slate-500">🛏 Beds</p>
          </div>
          <div className="text-center">
            <p className="text-base font-bold text-slate-900 sm:text-lg">{property.bathrooms}</p>
            <p className="text-xs text-slate-500">🛁 Baths</p>
          </div>
          <div className="text-center">
            {/* NEW: added `truncate px-1` here — long type names like "Apartment" 
                were at risk of wrapping awkwardly in the narrow 3rd column on mobile */}
            <p className="truncate px-1 text-base font-bold text-slate-900 sm:text-lg">
              {property.propertyType}
            </p>
            <p className="text-xs text-slate-500">Type</p>
          </div>
        </div>

        {/* CHANGED: added `flex-wrap gap-3` so price + button stack nicely 
            instead of overflowing if the screen is very narrow */}
        <div className="mt-5 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xl font-extrabold text-indigo-600 sm:text-2xl">
              ₹{property.rent.toLocaleString()}
            </p>
            <p className="text-xs text-slate-500">per month</p>
          </div>

          {/* CHANGED: added `flex-1 sm:flex-none` so the button stretches to fill 
              available width on mobile instead of looking tiny/cramped */}
          <button
            onClick={() => navigate(`/properties/${property.id}`)}
            className="flex-1 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 hover:shadow-md sm:flex-none sm:px-5"
          >
            View Details →
          </button>
        </div>

        <button
          onClick={() => onDelete(property.id)}
          className="mt-4 w-full rounded-lg border border-red-200 py-2.5 text-sm font-medium text-red-500 transition hover:border-red-300 hover:bg-red-50 hover:text-red-600"
        >
          Delete Property
        </button>

      </div>
    </div>
  );
}

export default PropertyCard;