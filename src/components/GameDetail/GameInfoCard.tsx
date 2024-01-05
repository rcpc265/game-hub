import { Box, Heading } from "@chakra-ui/react";

interface Props {
  title: string;
  children: React.ReactNode;
}

const GameInfoCard = ({ title, children }: Props) => (
  <Box>
    <Heading as="dt" color="gray.600" fontSize="md">
      {title}
    </Heading>
    <Box as="dd" mt={1}>
      {children}
    </Box>
  </Box>
);

export default GameInfoCard;
