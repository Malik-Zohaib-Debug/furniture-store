"use client";

import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Image,
  Input,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bgColor="#FFF" p="33px 54px" position="sticky">
        <HStack w="100%" justifyContent="space-between">
          <HStack
            cursor="pointer"
            onClick={() => (window.location.href = "/Home")}
          >
            <Image
              src="/nav/logo.svg"
              alt="furniro"
              w="50px"
              h="32px"
              cursor="pointer"
            />
            <Text
              fontSize="34px"
              fontWeight="700"
              fontStyle="normal"
              lineHeight="normal"
              color="#000"
              textTransform="capitalize"
              cursor="pointer"
            >
              furniro
            </Text>
          </HStack>
          <HStack w="20%" justifyContent="space-between">
            <Text
              fontSize="16px"
              fontStyle="normal"
              lineHeight="normal"
              fontWeight="500"
              color="#000"
              cursor="pointer"
              onClick={() => (window.location.href = "/Home")}
            >
              Home
            </Text>
            <Text
              fontSize="16px"
              fontStyle="normal"
              lineHeight="normal"
              fontWeight="500"
              color="#000"
              cursor="pointer"
              onClick={() => (window.location.href = "/Shop")}
            >
              Shop
            </Text>
            <Text
              fontSize="16px"
              fontStyle="normal"
              lineHeight="normal"
              fontWeight="500"
              color="#000"
              cursor="pointer"
            >
              About
            </Text>
            <Text
              fontSize="16px"
              fontStyle="normal"
              lineHeight="normal"
              fontWeight="500"
              color="#000"
              cursor="pointer"
            >
              Contact
            </Text>
          </HStack>
          <HStack w="15%" justifyContent="space-between">
            <Image
              src="/nav/account.svg"
              alt="account"
              w="28px"
              h="28px"
              cursor="pointer"
            />
            <Image
              src="/nav/search.svg"
              alt="search"
              w="28px"
              h="28px"
              cursor="pointer"
            />
            <Image
              src="/nav/wishlist.svg"
              alt="wishlist"
              w="28px"
              h="28px"
              cursor="pointer"
            />
            <Image
              src="/nav/cart.svg"
              alt="cart"
              w="28px"
              h="28px"
              cursor="pointer"
              onClick={onOpen}
            />
          </HStack>
        </HStack>
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        size='sm'
        // finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <Flex w="100%"  justifyContent="space-between" p="30px">
            <Text
              fontSize="24px"
              fontWeight="600"
              fontStyle="normal"
              lineHeight="normal"
            >
              Shopping Cart
            </Text>
            <Image cursor="pointer" src="/cart.svg" />
          </Flex>
          <DrawerBody>
            <Flex justifyContent="space-around" alignItems="center" p="20px">
                <Image borderRadius="10px" src="home/product1.svg" alt="product" w="111px" h="90px"/>
                <Flex flexDir="column" justifyContent="space-between">
                    <Flex flexDir="column" alignItems="left">
                        <Text fontSize="16px" fontStyle="normal" lineHeight="normal" fontWeight="400">Asgaard Sofa</Text>
                    </Flex>
                    <Flex pt="8px">
                        <Text pr="15px">1</Text>
                        <Text pr="15px">X</Text>
                        <Text pr="15px" color="#B88E2F">RS. 250000</Text>
                    </Flex>
                </Flex>
                <Image src="/close.svg" />
            </Flex>
          </DrawerBody>
          <Flex justifyContent="space-around">
                <Text>
                    Subtotal
                </Text>
                <Text fontWeight="600" color="#B88E2F">RS. 25000</Text>
            </Flex>
          <DrawerFooter flexDir="column" justifyContent="center">
          <Spacer w="100%" color="#D9D9D9" border="1px solid"  mb="10px"/>
            <Text
                cursor="pointer"
                fontSize="12px"
                fontStyle="normal"
                lineHeight="normal"
                border="1px solid #D9D9D9"
                p="3px 6px"
                borderRadius="15px"
                _hover={{
                    bgColor: "#B88E2F",
                    color: "#000",
                    transform: "scale(1.1)",
                    fontWeight: "600",
                }}
                >
                Checkout
            </Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;
