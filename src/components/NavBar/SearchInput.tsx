import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

export interface SearchInputProps {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: SearchInputProps) => {
  const searchRef = useRef<HTMLInputElement>(null);

  return (
    <Box w="100%">
      <form
        id="search-input"
        onSubmit={(e) => {
          e.preventDefault();
          if (searchRef.current) onSearch(searchRef.current.value);
        }}
      >
        <InputGroup>
          <InputLeftElement children={<BsSearch />} />
          <Input
            ref={searchRef}
            borderRadius={20}
            placeholder="Search games..."
            variant="filled"
          />
        </InputGroup>
      </form>
    </Box>
  );
};
export default SearchInput;
