import { Button } from "@/components/ui/button"

const SearchButton = () => {
  return (
    <Button
      type="submit"
      className="w-full md:w-auto px-6 py-3 mt-2 md:mt-0 md:ml-4 bg-[#1D1E4C] hover:bg-indigo-800 text-white"
    >
      Search
    </Button>
  )
}

export default SearchButton
