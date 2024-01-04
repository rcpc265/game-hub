import { Box, HStack, Image } from "@chakra-ui/react";
import { logo } from "@/assets";
import ColorModeSwitch from "./ColorModeSwitch";
import { SearchInput } from "@/components/NavBar";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Link to="/">
        <Box boxSize="60px">
          <Image src={logo} />
        </Box>
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};
export default NavBar;
