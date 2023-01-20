import {Box,Text,HStack} from "@chakra-ui/react";
export default function TopBar(){
    return(
        <Box>
<HStack spacing='50px' w="60%" bg="white" margin="auto">
  <Box w='100px' h='100px' bg='white.200' _hover={{ color
:"red" }} >
  <Box  w='50px' h='50px' bg='white' align='center'margin='auto' marginTop="30px" >
 <img src="https://img4.nbstatic.in/tr:w-/60af2a061e2731000ba1096a.png" />
 </Box>
 <Text align='center' fontSize="16px" fontWeight="bold">All Deals</Text>
    </Box>
    <Box w='100px' h='100px' bg='white.200'_hover={{ color
:"red" }} >
  <Box  w='50px' h='50px' bg='white' align='center'margin='auto' marginTop="30px" >
 <img src="https://img4.nbstatic.in/tr:w-/636ce20122156b000b884b63.png" />
 </Box>
 <Text align='center' fontSize="16px" fontWeight="bold">Buffet Deals</Text>
    </Box>
    <Box w='100px' h='100px' bg='white.200' _hover={{ color
:"red" }}>
  <Box  w='50px' h='50px' bg='white' align='center'margin='auto' marginTop="30px" >
 <img src="https://img4.nbstatic.in/tr:w-/5f7d8150b7b01c000b8d348c.png" />
 </Box>
 <Text align='center' fontSize="16px" fontWeight="bold">Premium Resturant</Text>
    </Box>
    <Box w='100px' h='100px' bg='white.200'_hover={{ color
:"red" }} >
  <Box  w='50px' h='50px' bg='white' align='center'margin='auto' marginTop="30px" >
 <img src="https://img4.nbstatic.in/tr:w-/5f7c375cb7b01c000b8d3118.png" />
 </Box>
 <Text align='center' fontSize="16px" fontWeight="bold"> Deals On Nightlife</Text>
    </Box>
    <Box w='100px' h='100px'   _hover={{ color
:"red" }}>
  <Box  w='50px' h='50px' bg='white' align='center'margin='auto' marginTop="20px"  >
 <img src="https://img4.nbstatic.in/tr:w-/5f7d81ceb7b01c000b8d3492.png" />
 </Box>
 <Text align='center' fontSize="16px" fontWeight="bold">Set Menu Meals</Text>
    </Box>
</HStack>
</Box>
);
}