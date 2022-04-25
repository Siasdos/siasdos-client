import type { NextPage } from "next";
import {
  Badge,
  SkeletonText,
  Box,
  Stack,
  SkeletonCircle,
  Text,
  Icon,
} from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";

const Home: NextPage = () => {
  return (
    <Box
      display="flex"
      w="100%"
      h="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Stack w="auto" spacing="20px" as="b">
        <Text align="center">
          Building <Badge colorScheme="teal">On-Going</Badge>
        </Text>
        <Box padding="6" boxShadow="lg" bg="white" w={"400px"}>
          <SkeletonCircle size="10" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" />
        </Box>
        <Text align="center">
          Check the progress here{" "}
          <span>
            <a href="https://github.com/Siasdos" target="_blank">
              <Icon as={AiFillGithub} w={7} h={7} />
            </a>
          </span>
        </Text>
      </Stack>
    </Box>
  );
};

export default Home;
