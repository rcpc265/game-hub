import { HStack, Image } from "@chakra-ui/react";
import { logo } from "@/assets";
import ColorModeSwitch from "./ColorModeSwitch";
import { SearchInput } from "@/components/NavBar";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};
export default NavBar;
