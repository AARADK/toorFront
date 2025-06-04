// components/NewAndTrending/FeaturedCard.tsx

interface CardData {
    name: string
    rating: number
    price: string
    image?: string
    isFeatured?: boolean
}

const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-0.5">
      {[...Array(fullStars)].map((_, i) => (
        <span key={`full-${i}`} className="text-yellow-400">★</span>
      ))}
      {hasHalfStar && <span className="text-yellow-400">★</span>}
      {[...Array(emptyStars)].map((_, i) => (
        <span key={`empty-${i}`} className="text-gray-300">★</span>
      ))}
      <span className="text-xs text-gray-500 ml-1">({rating})</span>
    </div>
  );
};

const FeaturedCard = ({ data }: { data: CardData }) => {
  return (
    <div className="bg-white rounded-lg shadow p-3 relative hover:shadow-lg transition w-[180px]">
      {data.isFeatured && (
        <span className="absolute top-2 left-2 bg-yellow-400 text-white text-xs px-2 py-1 rounded-full">
          Featured
        </span>
      )}
      <div className="bg-gray-200 h-32 rounded overflow-hidden mb-3">
        {data.image ? (
          <img 
            src={data.image} 
            alt={data.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-gray-500 text-sm">No Image</span>
          </div>
        )}
      </div>
      <h4 className="font-semibold text-sm mb-1">{data.name}</h4>
      <div className="mb-1">
        <StarRating rating={data.rating} />
      </div>
      <p className="text-red-500 font-medium text-sm">{data.price}</p>
    </div>
  )
}

export default FeaturedCard
  