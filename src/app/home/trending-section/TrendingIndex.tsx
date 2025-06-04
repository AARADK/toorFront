// components/NewAndTrending/index.tsx

import { HomeTitle } from '../HomeTitle'
import FeaturedList from './FeaturedList'

const NewAndTrending = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <HomeTitle title="New & Trending" />
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold">Featured Listings</h3>
          <a href="/listings" className="text-sm text-gray-600 hover:underline">
            View All
          </a>
        </div>
        <FeaturedList />
      </div>
    </section>
  )
}

export default NewAndTrending
