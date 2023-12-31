import { Box, Center, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Center>
      <Box flexDir="column" w="100%">
        <HStack spacing="100px">
          <VStack gap="40px" p="20px">
            <Text
              w="100%"
              fontSize="24px"
              fontWeight="700"
              color="#000"
              textTransform="capitalize"
              cursor="pointer"
            >
              furniro
            </Text>
            <Text w="100%" fontSize="16px" fontWeight="400" color="#9F9F9F">
              400 University Drive Suite 200 Coral Gables, <br />
              FL 33134 USA
            </Text>
          </VStack>
          <Box>
          <VStack cursor="pointer">
            <Text
              w="100%"
              fontSize="16px"
              fontWeight="500"
              color="#9F9F9F"
              textTransform="capitalize"
              cursor="pointer"
            >
              Links
            </Text>
            <Text w="100%" fontSize="16px" fontWeight="600" color="#000000">
              Home
            </Text>
            <Text w="100%" fontSize="16px" fontWeight="600" color="#000000">
              Shop
            </Text>
            <Text w="100%" fontSize="16px" fontWeight="600" color="#000000">
              About
            </Text>
            <Text w="100%" fontSize="16px" fontWeight="600" color="#000000">
              Contact
            </Text>
          </VStack>
          </Box>
          <VStack cursor="pointer">
            <Text
              w="100%"
              fontSize="16px"
              fontWeight="500"
              color="#9F9F9F"
              textTransform="capitalize"
              cursor="pointer"
            >
              Help
            </Text>
            <Text w="100%" fontSize="16px" fontWeight="600" color="#000000">
              Payment Options
            </Text>
            <Text w="100%" fontSize="16px" fontWeight="600" color="#000000">
              Returns
            </Text>
            <Text w="100%" fontSize="16px" fontWeight="600" color="#000000">
              Privacy Policies
            </Text>
          </VStack>
          <VStack cursor="pointer">
            <Text
              w="100%"
              fontSize="16px"
              fontWeight="500"
              color="#9F9F9F"
              textTransform="capitalize"
              cursor="pointer"
            >
              Newsletter
            </Text>
            <Text w="100%" fontSize="16px" fontWeight="600" color="#000000">
              Subscribe
            </Text>
          </VStack>
        </HStack>
      </Box>
    </Center>
  );
};

export default Footer;
