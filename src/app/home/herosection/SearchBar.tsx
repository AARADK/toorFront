import SearchInput from "./SearchInput"
import LocationInput from "./LocationInput"
import SearchButton from "./SearchButton"

const SearchBar = () => {
  return (
    <div className="bg-white rounded-sm shadow-sm border border-gray-400 w-full flex items-center px-2 py-2">
      <form className="flex flex-col md:flex-row items-center gap-4 w-full justify-center">
        <SearchInput />
        <LocationInput />
        <SearchButton />
      </form>
    </div>
  )
}

export default SearchBar
