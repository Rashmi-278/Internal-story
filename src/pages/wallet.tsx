import {
    Box,
    Input,
    Flex,
    Center,
    Text,
    Stack,
    List,
    ListItem,
    ListIcon,
    Button,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { CheckIcon } from '@chakra-ui/icons';
  import  showAddress  from '@root/pillar/showAddress';
  import { useClipboard } from "@chakra-ui/react"
  import Navbar from '../components/ui/Navbar'
import { useState } from 'react';
  export async function getStaticProps(context) {
    const payAddress = await showAddress();

    return {
      props: { payAddress : payAddress.address}, // will be passed to the page component as props
    }
  }



  export default function ShowPaymentAddress(props) {
    const [value, setValue] = useState(props.payAddress)
  const { hasCopied, onCopy } = useClipboard(value)

    return (
    <>
    <Navbar/>
      <Center py={6}>
        <Box
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'green.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
          <Stack
            textAlign={'center'}
            p={6}
            color={useColorModeValue('gray.800', 'white')}
            align={'center'}>
            <Text
              fontSize={'sm'}
              fontWeight={500}
              bg={useColorModeValue('green.50', 'green.900')}
              p={2}
              px={3}
              color={'green.500'}
              rounded={'full'}>
              Payment Details
            </Text>
            <Stack direction={'row'} align={'center'} justify={'center'}>
              <Text fontSize={'3xl'}>ETH</Text>
              <Text fontSize={'6xl'} fontWeight={800}>
                50
              </Text>
            </Stack>
          </Stack>
  
          <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                 Wallet : {props.payAddress}
              </ListItem>
              
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                Make sure to verify your transaction
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                Send the requested amount to the below wallet address.
              </ListItem>
              <Flex mb={2}>
                <Input value={value} isReadOnly placeholder="Welcome" />
                <Button onClick={onCopy} ml={2}>
                {hasCopied ? "Copied" : "Copy"}
                </Button>
            </Flex>
            </List>
  
            
          </Box>
        </Box>
      </Center>
      </>
    );
  }


  