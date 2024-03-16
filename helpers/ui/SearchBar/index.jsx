import { SearchIcon } from "@/helpers/ui/CustomSvg";

const SearchBar = () => {
  return (
    <div className="flex items-center justify-between border py-1.5 pl-4 pr-2.5 rounded-full mt-5">
      <input
        type="text"
        className="w-[90%] focus:outline-none"
        placeholder="Search"
      />
      <SearchIcon size={25} />
    </div>
  );
};

export default SearchBar;
