import { Star, StarHalf, StarOff, User } from 'lucide-react'
import Image from 'next/image'

interface FeedbackCardProps {
  rating: number
  feedback: string
  name: string
  image?: string
}

export const FeedbackCard = ({ rating, feedback, name, image }: FeedbackCardProps) => {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0
  const totalStars = 5

  const renderStars = () => {
    const stars = []
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-full-${i}`} className="text-yellow-500 w-4 h-4 fill-yellow-500" />)
    }
    if (hasHalfStar) {
      stars.push(<StarHalf key="star-half" className="text-yellow-500 w-4 h-4 fill-yellow-500" />)
    }
    while (stars.length < totalStars) {
      stars.push(<StarOff key={`star-empty-${stars.length}`} className="text-yellow-500 w-4 h-4" />)
    }
    return stars
  }

  return (
    <div className="bg-white shadow-md p-6 rounded-xl space-y-4 h-[220px] flex flex-col">
      <div className="flex">{renderStars()}</div>
      <p className="text-sm text-muted-foreground line-clamp-4 flex-1">{feedback}</p>
      <div className="flex items-center gap-2 pt-2">
        <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-300 flex items-center justify-center">
          {image ? (
            <div className="relative w-8 h-8">
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover rounded-full"
                sizes="32px"
              />
            </div>
          ) : (
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
          )}
        </div>
        <span className="text-sm font-semibold">{name}</span>
      </div>
    </div>
  )
}
