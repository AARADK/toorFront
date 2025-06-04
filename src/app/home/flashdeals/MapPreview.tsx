import DealCard from "./DealCard"
import Image from "next/image"

const MapPreview = () => (
  <div className="flex items-center gap-4 mt-6 bg-slate-200 p-4 rounded-xl border border-slate-200">
    <Image src="/map.png" alt="Map" width={200} height={200} className="rounded-md" />
    <DealCard
      title="Discover more deals on the map"
      description="Find nearby offers using our interactive map view"
      buttonText="Explore Maps"
      onClick={() => alert('Opening map...')}
    />
  </div>
)

export default MapPreview
