"use client";
import {
  Box,
  Center,
  Flex,
  HStack,
  Image,
  Input,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import data from "../constant/products";

const Shop = () => {

  console.log("Data -> ", data);


  return (
    <>
      <Box
        bgImage="url(/shop/pageTitle.svg)"
        bgSize="cover"
        bgRepeat="no-repeat"
        h="316px"
        position="relative"
      >
        <Flex
          flexDir="column"
          position="absolute"
          w="100%"
          justify="center"
          justifyContent="center"
          top="40%"
          alignItems="center"
        >
          <Text fontSize="48px" fontWeight="500" lineHeight="normal">
            Shop
          </Text>
          <Flex
            flexDir="row"
            alignItems="center"
            gap="10px"
            justifyContent="space-between"
          >
            <Text
              fontSize="16px"
              fontStyle="normal"
              lineHeight="normal"
              fontWeight="600"
              color="#000"
            >
              Home
            </Text>
            <Image src="shop/dashIcon.svg" alt="dash-icon" />
            <Text>Shop</Text>
          </Flex>
        </Flex>
      </Box>
      <Flex
        bgColor="#F9F1E7"
        h="100px"
        justifyContent="space-between"
        alignItems="center"
        pl="98px"
        pr="98px"
      >
        <Flex>
          <Text
            fontSize="16px"
            fontStyle="normal"
            lineHeight="normal"
            fontWeight="600"
          >
            Showing 1–16 of 32 results
          </Text>
        </Flex>
        <Flex gap="40px">
          <Flex justifyContent="center" alignItems="center" gap="10px">
            <Text
              fontSize="16px"
              fontStyle="normal"
              lineHeight="normal"
              fontWeight="600"
            >
              Show
            </Text>
            <Input type="number" bgColor="white" w="55px" />
          </Flex>
          <Flex justifyContent="center" alignItems="center" gap="10px">
            <Text
              fontSize="16px"
              fontStyle="normal"
              lineHeight="normal"
              fontWeight="600"
            >
              Sort By
            </Text>
            <Input type="number" bgColor="white" w="55px" />
          </Flex>
        </Flex>
      </Flex>
      <Center>
        <SimpleGrid w="100%" p="100px" spacing="80px" columns={4}>
          {data.map((item) => (
            <Flex flexDir="column" cursor="pointer" key={item.key}>
            <Image src={item.image} alt="product1" />
            <Flex flexDir="column" pl="24px" pt="24px" color="#3A3A3A" bgColor="#F4F5F7">
              <Text
                fontSize="24px"
                fontStyle="normal"
                fontWeight="600"
                lineHeight="120%"
              >
                {item.title}
              </Text>
              <Text pt="8px">{item.desc}</Text>
              <Text
                pt="8px"
                fontStyle="normal"
                fontWeight="600"
                color="#3A3A3A"
              >
                Rs {item.price}.000
              </Text>
            </Flex>
          </Flex>
          ))}
        </SimpleGrid>
      </Center>
    </>
  );
};

export default Shop;
