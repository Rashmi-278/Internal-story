import React, { useState } from "react";
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  SimpleGrid,
  GridItem,
  Heading,
  Text,
  Stack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  FormHelperText,
  Textarea,
  Avatar,
  Icon,
  Button,
  VisuallyHidden,
  Select,
  Checkbox,
  RadioGroup,
  useToast,
  Radio,
} from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
import Navbar from '../components/ui/Navbar'

export default function Component() {
  const toast = useToast();
  const [productname, setpname] = useState(String);
  const [ brandname, setbname] = useState(String);
  const [ imageurl, setimageurl] = useState(String);
  const [ productid, setpid] = useState(String);
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 'pname' : productname , 'bname' : brandname , 'imageurl' : imageurl, 'pid':productid })
  };


  function createProduct(){



  }

  function updateProduct(){

  }

  function deleteProduct(){

  }

  return (
      <>
    <Navbar/>

    <Box bg={useColorModeValue("gray.50", "inherit")} p={10}>
      
      <Box visibility={{ base: "hidden", sm: "visible" }} aria-hidden="true">
        <Box py={5}>
          <Box
            borderTop="solid 1px"
            borderTopColor={useColorModeValue("gray.200", "whiteAlpha.200")}
          ></Box>
        </Box>
      </Box>

      <Box mt={[10, 0]}>
        <SimpleGrid
          display={{ base: "initial", md: "grid" }}
          columns={{ md: 3 }}
          spacing={{ md: 6 }}
        >
          <GridItem colSpan={{ md: 1 }}>
            <Box px={[4, 0]}>
              <Heading fontSize="lg" fontWeight="medium" lineHeight="6">
                Manage Products
              </Heading>
              <Text
                mt={1}
                fontSize="sm"
                color={useColorModeValue("gray.600", "gray.400")}
              >
                Create product from your inventory.
              </Text>
            </Box>
          </GridItem>
          <GridItem mt={[5, null, 0]} colSpan={{ md: 2 }}>
            <chakra.form
             onSubmit={createProduct}
              method="POST"
              shadow="base"
              rounded={[null, "md"]}
              overflow={{ sm: "hidden" }}
            >
              <Stack
                px={4}
                py={5}
                p={[null, 6]}
                bg={useColorModeValue("white", "gray.700")}
                spacing={6}
              >
                <SimpleGrid columns={6} spacing={6}>
                  <FormControl as={GridItem} colSpan={[6, 3]}>
                    <FormLabel
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue("gray.700", "gray.50")}
                    >
                      Product Name
                    </FormLabel>
                    <Input
                      type="text"
                      name="productname"
                      id="productname"
                      autoComplete="productname"
                      mt={1}
                      value={productname}
                      onChange={(e)=>{setpname(e.target.value)}}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 3]}>
                    <FormLabel
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue("gray.700", "gray.50")}
                    >
                      Brand
                    </FormLabel>
                    <Input
                      type="text"
                      name="brandname"
                      id="brandname"
                      autoComplete="brandname"
                      mt={1}
                      value={brandname}
                      onChange={(e)=>{setbname(e.target.value)}}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 4]}>
                    <FormLabel
                      for="imageurl"
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue("gray.700", "gray.50")}
                    >
                      Image URL
                    </FormLabel>
                    <Input
                      type="text"
                      name="imageurl"
                      id="imageurl"
                      autoComplete="email"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      value={imageurl}
                      onChange={(e)=>{setimageurl(e.target.value)}}
                    />
                  </FormControl>

                  

                 

                  <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
                    <FormLabel
                      for="productid"
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue("gray.700", "gray.50")}
                    >
                      Product ID
                    </FormLabel>
                    <Input
                      type="text"
                      name="pid"
                      id="pid"
                      autoComplete="pid"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      value={productid}
                      onChange={(e)=>{setpid(e.target.value)}}
                    />
                  </FormControl>


                  {/* <FormControl id="about" mt={1} as={GridItem} colSpan={6}>
                    <FormLabel
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue("gray.700", "gray.50")}
                    >
                      About
                    </FormLabel>
                    <Textarea
                      placeholder="you@example.com"
                      mt={1}
                      rows={3}
                      shadow="sm"
                      focusBorderColor="brand.400"
                      fontSize={{ sm: "sm" }}
                    />
                    <FormHelperText>
                      Brief description of the product.
                    </FormHelperText>
                  </FormControl>

                   */}
                </SimpleGrid>
              </Stack>
              <Box
                px={{ base: 4, sm: 6 }}
                py={3}
                bg={useColorModeValue("gray.50", "gray.900")}
                textAlign="right"
              >
                <Button
                  type="submit"
                  colorScheme="pink"
                  _focus={{ shadow: "" }}
                  fontWeight="md"
                  onClick={createProduct}
                >
                  Create product
                </Button>
                <Button
                  type="submit"
                  ml={2}
                  colorScheme="pink"
                  _focus={{ shadow: "" }}
                  fontWeight="md"
                  onClick={updateProduct}
                >
                  Update product
                </Button>
                <Button
                  ml={2}
                  type="submit"
                  colorScheme="pink"
                  _focus={{ shadow: "" }}
                  fontWeight="md"
                  onClick={deleteProduct}
                >
                  Delete product
                </Button>
              </Box>
            </chakra.form>
          </GridItem>
        </SimpleGrid>
      </Box>


      
     

      <Box visibility={{ base: "hidden", sm: "visible" }} aria-hidden="true">
        <Box py={5}>
          <Box
            borderTop="solid 1px"
            borderTopColor={useColorModeValue("gray.200", "whiteAlpha.200")}
          ></Box>
        </Box>
      </Box>

      
    </Box>
    </>
  );
}