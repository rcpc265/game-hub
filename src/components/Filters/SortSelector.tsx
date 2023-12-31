import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSort: (sort: string) => void;
  sortOrder: string;
}

const SortSelector = ({ onSelectSort, sortOrder }: Props) => {
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
            onClick={() => onSelectSort(option.value)}
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
