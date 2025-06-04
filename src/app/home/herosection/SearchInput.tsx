import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

const SearchInput = () => {
  return (
    <div className="relative w-full md:w-80 border-rounded-sm border-gray-400 md:border-b-0 ">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 " />
      <Input
        type="text"
        placeholder="What are you looking for"
        className="pl-10 py-3 border-none focus:ring-0"
      />
    </div>
  )
}

export default SearchInput
