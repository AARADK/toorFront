// components/NewAndTrending/FeaturedList.tsx

import FeaturedCard from './FeaturedCard'

// Replace with actual data import
import { featuredListings } from '../../../../data/data'

const FeaturedList = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
      {featuredListings.map((item, index) => (
        <FeaturedCard key={index} data={item} />
      ))}
    </div>
  )
}

export default FeaturedList
