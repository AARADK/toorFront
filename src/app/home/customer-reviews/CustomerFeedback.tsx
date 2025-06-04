'use client'

import { HomeTitle } from '../HomeTitle'
import { FeedbackCard } from './FeedbackCard'
import { customerFeedbacks } from '../../../../data/data'

export const CustomerFeedback = () => {
  return (
    <section className="py-12 bg-muted">
      <HomeTitle title="Customer feedbacks" />
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 px-4 md:px-8">
          {customerFeedbacks.map((item, index) => (
            <FeedbackCard
              key={index}
              rating={item.rating}
              feedback={item.feedback}
              name={item.name}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
