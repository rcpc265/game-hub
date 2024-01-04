import { NavBar } from "@/components/NavBar";
import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  isRouteErrorResponse(error);

  return (
    <>
      <NavBar />
      <Box p={4}>
        <Heading>Oops</Heading>
        <Text fontSize="lg" mt={2}>
          {isRouteErrorResponse(error)
            ? "This page does not exist"
            : "An unexpected error occurred"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
