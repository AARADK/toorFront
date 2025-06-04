import { AboutContent } from "./AboutContent"
import { AboutImage } from "./AboutImage"
import { HomeTitle } from "../HomeTitle"

export function AboutSection() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 space-y-20">
        <HomeTitle
          title={
            <>
              Whats{" "}
              <span className="text-[#3B3B8F]">too</span>
              <span className="text-[#DE4F43]">runta</span>
              ?
            </>
          }
        />
        <div className="flex flex-col md:flex-row items-center gap-5">
          <div className="w-full md:w-3/6">
            <AboutContent />
          </div>
          <div className="w-full md:w-3/6">
            <AboutImage />
          </div>
        </div>
      </div>
    </section>
  )
}
