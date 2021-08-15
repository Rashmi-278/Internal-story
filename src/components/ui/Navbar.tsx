import { DarkModeSwitch } from './DarkModeSwitch'
import React from "react";
import dynamic from 'next/dynamic';
import Link from 'next/link';
  const WalletButton = dynamic(() => import('../ConnectWallet'), {
    ssr: false,
  });
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";

export default function Gslr() {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();

  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
              <VisuallyHidden>Choc</VisuallyHidden>
            </chakra.a>
            <chakra.h1 fontSize="xl" fontWeight="bold" ml="2" color="pink.500" >
              Internal Story
            </chakra.h1>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{ base: "none", md: "inline-flex" }}
            >
             <Link href='/products'>
                <Button w="full" variant="ghost">
                  Products
                </Button>
                </Link>
                <Link href='/operate'>
                <Button w="full" variant="ghost">
                  Manage
                </Button>
                </Link>
                <Link href='/wallet'>
                <Button w="full" variant="ghost">
                  Payment
                </Button>
                </Link>

              
            </HStack>
            <WalletButton/>

            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color={useColorModeValue("gray.800", "inherit")}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />
                <Link href='/products'>
                <Button w="full" variant="ghost">
                  Products
                </Button>
                </Link>
                <Link href='/operate'>
                <Button w="full" variant="ghost">
                  Manage
                </Button>
                </Link>
                <Link href='/wallet'>
                <Button w="full" variant="ghost">
                  Payment
                </Button>
                </Link>
                
                
                <WalletButton/>
                <DarkModeSwitch/>


              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
}