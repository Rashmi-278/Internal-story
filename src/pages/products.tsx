import Navbar from '../components/ui/Navbar'
import Card  from '../components/ui/dashboard/card'
import { Flex } from '@chakra-ui/layout';
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then(res => res.json())

export default function Test(){
  const { data, error } = useSWR('/api/product/list', fetcher)
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

 return(
     <>
     <Flex>
         {data.products.map((product) => (
                 <div key={product._id}>
                <Card name={product.name} price={product.price['amount']} url={product.featuredImageUrls[0]}/>

                 </div>
         ))
         
         }
     </Flex>
    

    </>
 )
}

