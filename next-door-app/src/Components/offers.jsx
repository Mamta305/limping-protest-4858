import {Box,Image,SimpleGrid,Heading,} from "@chakra-ui/react";
export default function ACard(props) {
    const {hd,proper}=props;
    return (
    <Box>
        <Box width="30%" m="20px auto">
<Heading as='h3'size="lg">
    {hd}
  </Heading>
</Box>
        <SimpleGrid minChildWidth='100px' spacing='20px'>
     {proper.map((item)=>(
      <Box maxW='sm' borderWidth='1px' borderRadius='xl' overflow='hidden'>
        <Image src={item.imageUrl} alt={item.imageAlt} />
        <Box p='6'>
          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            noOfLines={1}
          >
            {item.title}
          </Box>
          <Box>
            Starting at {item.price}
          </Box>       
            <Box as='span' ml='2' color='gray.600' fontSize='sm'>
              {item.offers} offers 
            </Box>
          </Box>
        </Box>
     )
     )
}
     </SimpleGrid>
     </Box>
    )
  }