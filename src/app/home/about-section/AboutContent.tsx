import { Button } from "@/components/ui/button"

export function AboutContent() {
  return (
    <div className="space-y-6 max-w-md">
      <p className="text-4xl font-bold text-foreground">
        <span className="text-[#3B3B8F]">too</span>
        <span className="text-[#DE4F43]">runta</span> at your doorstep
      </p>
      <p className="text-muted-foreground text-base">
      At toorunta, we believe that buying and selling secondhand items should be simple, local, and hassle-free. Our platform uses smart, map-based listings to connect you with buyers and sellers nearby, saving time and making transactions more convenient. Whether you're clearing out your closet or hunting for a great deal, toorunta offers fast service, trustworthy communication, and a smooth experience from start to finish. Join our growing community and discover a smarter way to shop sustainably.


      </p>
      <Button   className="text-white rounded-3xl bg-[#2D3363] hover:bg-[#16173d]">
        About us
      </Button>
    </div>
  )
}
