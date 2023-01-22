import { SimpleGrid,Box,Heading} from "@chakra-ui/react";
export default function Slides(props){
const {hd,pram}=props;
    return (
<Box margin="90px" w="80%">
<Box width="30%" m="10px">
<Heading as='h3'size="md">
    {hd}
  </Heading>
</Box>
<SimpleGrid minChildWidth='100px' spacing='30px'>
{pram.map((item) => (
          <Box width="90%" height='50px' m="25px">
          <img src={item}/>
            </Box>
        ))}
</SimpleGrid>
</Box>
    )
}