import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <form id="color-mode-switch">
      <HStack>
        <Switch
          id="color-mode-switch-input"
          colorScheme="green"
          isChecked={colorMode === "dark"}
          onChange={toggleColorMode}
        />
        <Text whiteSpace="nowrap">
          {colorMode === "dark" ? "Dark" : "Light"} mode
        </Text>
      </HStack>
    </form>
  );
};
export default ColorModeSwitch;
