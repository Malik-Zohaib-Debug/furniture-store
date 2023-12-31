import {
  Box,
  Button,
  Center,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <>
      <Box
        position="relative"
        bgImage="url('/home/home-cover.svg')"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        height="90vh"
        width="100%"
      >
        <Box
          position="absolute"
          pl="41px"
          w="643px"
          bottom="50px"
          right="200px"
          h="443px"
          bgColor="#FFF3E3"
          borderRadius="10px"
        >
          <VStack alignItems="left" pt="52px">
            <Text
              fontSize="16px"
              fontStyle="normal"
              fontWeight="600"
              lineHeight="normal"
              letterSpacing="3px"
              color="#333"
            >
              New Arrival
            </Text>
            <Text
              fontSize="52px"
              fontWeight="700"
              lineHeight="65px"
              fontStyle="normal"
              color="#B88E2F"
            >
              Discover Our <br />
              New Collection
            </Text>
            <Text
              pt="17px"
              pb="46px"
              maxW="546px"
              fontSize="18px"
              fontStyle="normal"
              fontWeight="500"
              lineHeight="24px"
              color="#333"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </Text>
          </VStack>
          <Button color="#fff" bgColor="#B88E2F" p="25px 72px">
            Buy Now
          </Button>
        </Box>
      </Box>
      <Box justifyContent="center">
        <VStack pt="77px" pb="77px">
          <Text
            fontSize="32px"
            fontStyle="normal"
            fontWeight="700"
            lineHeight="normal"
            color="#333"
          >
            Browse The Range
          </Text>
          <Text
            fontSize="20px"
            fontStyle="normal"
            fontWeight="400"
            lineHeight="normal"
            color="#666"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </VStack>
        <Link href="/Shop">
          <HStack justifyContent="center" gap="30px" textAlign="center">
            <Box
              _hover={{
                transform: "scale(1.1)",
                cursor: "pointer",
                transition: "transform 0.3s ease",
              }}
            >
              <Image src="/home/dining.svg" alt="dining" borderRadius="10px" />
              <Text
                p="22px"
                fontSize="24px"
                fontStyle="normal"
                fontWeight="600"
                lineHeight="normal"
                color="#333"
              >
                Dining
              </Text>
            </Box>
            <Box
              _hover={{
                transform: "scale(1.1)",
                cursor: "pointer",
                transition: "transform 0.3s ease",
              }}
            >
              <Image src="/home/living.svg" alt="living" borderRadius="10px" />
              <Text
                p="22px"
                fontSize="24px"
                fontStyle="normal"
                fontWeight="600"
                lineHeight="normal"
                color="#333"
              >
                Living
              </Text>
            </Box>
            <Box
              _hover={{
                transform: "scale(1.1)",
                cursor: "pointer",
                transition: "transform 0.3s ease",
              }}
            >
              <Image
                src="/home/bedroom.svg"
                alt="bedroom"
                borderRadius="10px"
              />
              <Text
                p="22px"
                fontSize="24px"
                fontStyle="normal"
                fontWeight="600"
                lineHeight="normal"
                color="#333"
              >
                Bedroom
              </Text>
            </Box>
          </HStack>
        </Link>
      </Box>
      <Box justifyContent="center" w="100%">
        <VStack pt="77px" pb="25px">
          <Text
            fontSize="32px"
            fontStyle="normal"
            fontWeight="700"
            lineHeight="normal"
            color="#333"
          >
            Our Products
          </Text>
        </VStack>
        <Center>
          <Link href="/Shop">
            <SimpleGrid margin="auto" spacing="40px" columns={4}>
              <Box maxWidth="285px" cursor="pointer">
                <Image src="/home/product1.svg" alt="product1" />
                <Box pl="24px" pt="24px" color="#3A3A3A" bgColor="#F4F5F7">
                  <Text
                    fontSize="24px"
                    fontStyle="normal"
                    fontWeight="600"
                    lineHeight="120%"
                  >
                    Syltherine
                  </Text>
                  <Text pt="8px">Stylish cafe chair</Text>
                  <Text
                    pt="8px"
                    fontStyle="normal"
                    fontWeight="600"
                    color="#3A3A3A"
                  >
                    Rs 2500.000
                  </Text>
                </Box>
              </Box>
              <Box maxWidth="285px" cursor="pointer">
                <Image src="/home/product2.svg" alt="product2" />
                <Box pl="24px" pt="24px" color="#3A3A3A" bgColor="#F4F5F7">
                  <Text
                    fontSize="24px"
                    fontStyle="normal"
                    fontWeight="600"
                    lineHeight="120%"
                  >
                    Grifo
                  </Text>
                  <Text pt="8px">Night lamp</Text>
                  <Text
                    pt="8px"
                    fontStyle="normal"
                    fontWeight="600"
                    color="#3A3A3A"
                  >
                    Rs 1500.000
                  </Text>
                </Box>
              </Box>
              <Box maxWidth="285px" cursor="pointer">
                <Image src="/home/product3.svg" alt="product3" />
                <Box pl="24px" pt="24px" color="#3A3A3A" bgColor="#F4F5F7">
                  <Text
                    fontSize="24px"
                    fontStyle="normal"
                    fontWeight="600"
                    lineHeight="120%"
                  >
                    Muggo
                  </Text>
                  <Text pt="8px">Small mug</Text>
                  <Text
                    pt="8px"
                    fontStyle="normal"
                    fontWeight="600"
                    color="#3A3A3A"
                  >
                    Rs 150.000
                  </Text>
                </Box>
              </Box>
              <Box maxWidth="285px" cursor="pointer">
                <Image src="/home/product4.svg" alt="product4" />
                <Box pl="24px" pt="24px" color="#3A3A3A" bgColor="#F4F5F7">
                  <Text
                    fontSize="24px"
                    fontStyle="normal"
                    fontWeight="600"
                    lineHeight="120%"
                  >
                    Pingky
                  </Text>
                  <Text pt="8px">Cute bed set</Text>
                  <Text
                    pt="8px"
                    fontStyle="normal"
                    fontWeight="600"
                    color="#3A3A3A"
                  >
                    Rs 7000.000
                  </Text>
                </Box>
              </Box>
              <Box maxWidth="285px" cursor="pointer">
                <Image src="/home/product5.svg" alt="product5" />
                <Box pl="24px" pt="24px" color="#3A3A3A" bgColor="#F4F5F7">
                  <Text
                    fontSize="24px"
                    fontStyle="normal"
                    fontWeight="600"
                    lineHeight="120%"
                  >
                    Potty
                  </Text>
                  <Text pt="8px">Minimalist flower pot</Text>
                  <Text
                    pt="8px"
                    fontStyle="normal"
                    fontWeight="600"
                    color="#3A3A3A"
                  >
                    Rs 500.000
                  </Text>
                </Box>
              </Box>
              <Box maxWidth="285px" cursor="pointer">
                <Image src="/home/product6.svg" alt="product6" />
                <Box pl="24px" pt="24px" color="#3A3A3A" bgColor="#F4F5F7">
                  <Text
                    fontSize="24px"
                    fontStyle="normal"
                    fontWeight="600"
                    lineHeight="120%"
                  >
                    Respira
                  </Text>
                  <Text pt="8px">Outdoor bar table and stool</Text>
                  <Text
                    pt="8px"
                    fontStyle="normal"
                    fontWeight="600"
                    color="#3A3A3A"
                  >
                    Rs 500.000
                  </Text>
                </Box>
              </Box>
              <Box maxWidth="285px" cursor="pointer">
                <Image src="/home/product7.svg" alt="product7" />
                <Box pl="24px" pt="24px" color="#3A3A3A" bgColor="#F4F5F7">
                  <Text
                    fontSize="24px"
                    fontStyle="normal"
                    fontWeight="600"
                    lineHeight="120%"
                  >
                    Leviosa
                  </Text>
                  <Text pt="8px">Stylish Cafe Chair</Text>
                  <Text
                    pt="8px"
                    fontStyle="normal"
                    fontWeight="600"
                    color="#3A3A3A"
                  >
                    Rs 2500.000
                  </Text>
                </Box>
              </Box>
              <Box maxWidth="285px" cursor="pointer">
                <Image src="/home/product8.svg" alt="product8" />
                <Box pl="24px" pt="24px" color="#3A3A3A" bgColor="#F4F5F7">
                  <Text
                    fontSize="24px"
                    fontStyle="normal"
                    fontWeight="600"
                    lineHeight="120%"
                  >
                    Lolito
                  </Text>
                  <Text pt="8px">Luxury Large Sofa</Text>
                  <Text
                    pt="8px"
                    fontStyle="normal"
                    fontWeight="600"
                    color="#3A3A3A"
                  >
                    Rs 7000.000
                  </Text>
                </Box>
              </Box>
            </SimpleGrid>
          </Link>
        </Center>
        <Center>
          <Button
            m="32px"
            p="12px 40px"
            color="#B88E2F"
            border="2px solid #B88E2F"
            _hover={{ color: "black", bgColor: "#B88E2F" }}
          >
            Show More
          </Button>
        </Center>
      </Box>
    </>
  );
};

export default HomePage;
