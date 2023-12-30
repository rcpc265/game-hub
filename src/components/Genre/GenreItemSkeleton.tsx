import { HStack, ListItem, Skeleton } from "@chakra-ui/react";

const GenreItemSkeleton = () => {
  return (
    <ListItem paddingY="5px">
      <HStack>
        <Skeleton boxSize="32px" borderRadius={8} />
        <Skeleton h="24px" w="120px" />
      </HStack>
    </ListItem>
  );
};
export default GenreItemSkeleton;
