import {Box,Flex,Spacer,Text,Button,ButtonGroup,IconButton,Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator} from "@chakra-ui/react";
import {ChevronDownIcon,LockIcon} from "@chakra-ui/icons";
export default function TopSec(){
    return(
<Flex bg='#dcdbd8'>
  <Flex p='1' w="20%" bg='#dcdbd8'>
  <Box w="10%" >
    <img src="https://cdn-icons-png.flaticon.com/512/484/484167.png" />
  </Box>
  <Text fontWeight="bold">Select Location</Text>
  <ButtonGroup size='sm' isAttached variant='outline'>
  <Button borderRadius="10%">Delhi</Button>
  <IconButton aria-label='Add to friends' icon={<ChevronDownIcon />} />
</ButtonGroup>
  </Flex>
  <Spacer />
  <Box p='1'>
  <Breadcrumb>
  <BreadcrumbItem>
    <BreadcrumbLink href='#'>We're hiring</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbItem>
    <BreadcrumbLink href='#'>How it's working </BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href='#'>List Your Business</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbItem>
    <BreadcrumbLink href='#'>
    <Button leftIcon={<LockIcon />}  variant='solid'>
    Login/Signup
  </Button>
    </BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
  </Box>
</Flex>
    )
};
