import React from "react";
import { chakra, Box, Flex, useColorModeValue } from "@chakra-ui/react";

const Ma = (props) => {
  return (
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        w="sm"
        mx="auto"
      >
        <Box
          bg="gray.300"
          h={64}
          w="full"
          rounded="lg"
          shadow="md"
          bgSize="cover"
          bgPos="center"
          style={{
            backgroundImage:
              `url(${props.url})`,
          }}
        ></Box>

        <Box
          w={{ base: 56, md: 64 }}
          bg={useColorModeValue("white", "gray.800")}
          mt={-10}
          shadow="lg"
          rounded="lg"
          overflow="hidden"
        >
          <chakra.h3
            py={2}
            textAlign="center"
            fontWeight="bold"
            textTransform="uppercase"
            color={useColorModeValue("gray.800", "white")}
            letterSpacing={1}
          >
            {props.name}
          </chakra.h3>

          <Flex
            alignItems="center"
            justifyContent="space-between"
            py={2}
            px={3}
            bg={useColorModeValue("gray.200", "gray.700")}
          >
            <chakra.span
              fontWeight="bold"
              color={useColorModeValue("gray.800", "gray.200")}
            >
             $ {props.price}
            </chakra.span>
            <chakra.button
              bg="gray.800"
              fontSize="xs"
              fontWeight="bold"
              color="white"
              px={2}
              py={1}
              rounded="lg"
              textTransform="uppercase"
              _hover={{
                bg: useColorModeValue("gray.700", "gray.600"),
              }}
              _focus={{
                bg: useColorModeValue("gray.700", "gray.600"),
                outline: "none",
              }}
            >
              Add to cart
            </chakra.button>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Ma;