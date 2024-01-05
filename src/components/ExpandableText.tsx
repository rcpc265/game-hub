import { Box, Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: React.ReactNode;
}

const ExpandableText = ({ children }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Box>
      <Text noOfLines={isExpanded ? undefined : 2} lineHeight={7}>
        {children}
      </Text>

      <Button
        mt={1.5}
        colorScheme="yellow"
        fontWeight="bold"
        size="xs"
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        {isExpanded ? "Show Less" : "Read More"}
      </Button>
    </Box>
  );
};

export default ExpandableText;
