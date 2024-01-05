import usePlatform from "@/hooks/usePlatform";
import useAllPlatforms from "@/hooks/useAllPlatforms";
import useGameQueryStore from "@/store";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const PlatformSelector = () => {
  const selectedPlatformId = useGameQueryStore(
    (state) => state.gameQuery.platformId
  );
  const setPlatformId = useGameQueryStore((state) => state.setPlatformId);
  const { data } = useAllPlatforms();
  const selectedPlatform = usePlatform(selectedPlatformId);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            fontWeight={platform.id === selectedPlatformId ? "bold" : "normal"}
            key={platform.id}
            onClick={() => setPlatformId(platform.id)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
export default PlatformSelector;
