import useGameQueryStore from "@/store";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  const sortOrder = useGameQueryStore((state) => state.gameQuery.sortOrder);
  const setSortOrder = useGameQueryStore((state) => state.setSortOrder);

  const sortOptions = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSortOption =
    sortOptions.find((option) => option.value === sortOrder)?.label ??
    "Relevance";

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOption}
      </MenuButton>
      <MenuList>
        {sortOptions.map((option) => (
          <MenuItem
            fontWeight={option.value === sortOrder ? "bold" : "normal"}
            onClick={() => setSortOrder(option.value)}
            key={option.value}
          >
            {option.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
export default SortSelector;
