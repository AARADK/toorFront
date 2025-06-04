'use client';

import CountdownTimer from "./CountdownTimer"
import MapPreview from "./MapPreview"
import SectionTitle from "./SectionTitle"

const FlashDeals = () => {
  const futureTime = Date.now() + 2 * 60 * 60 * 1000 // 2 hours from now

  return (
    <section className="relative bg-slate-200 py-10 px-8 rounded-2xl shadow-lg max-w-5xl mx-auto mt-16 mb-35 border border-slate-200">
      <div className="flex justify-between items-center mb-16">
        <div>
          <SectionTitle title="Flash Deals!" subtitle="Limited time offers on featured listings. Save up to 50%!" />
          <button
            onClick={() => alert('Viewing all deals')}
            className="mt-6 bg-[#2D3363] text-white px-5 py-2 rounded-md hover:bg-[#16173d] transition-colors text-base font-semibold shadow"
          >
            View all deals
          </button>
        </div>
        <CountdownTimer targetTime={futureTime} />
      </div>
      <div className="absolute left-1/2 -bottom-20 transform -translate-x-1/2 z-10 w-[70%]">
        <MapPreview />
      </div>
    </section>
  )
}

export default FlashDeals
