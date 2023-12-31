import { HStack, Image } from "@chakra-ui/react";
import { logo } from "@/assets";
import ColorModeSwitch from "./ColorModeSwitch";
import { SearchInput } from "@/components/NavBar";
import type { SearchInputProps } from "./SearchInput";

interface Props extends SearchInputProps {}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};
export default NavBar;
