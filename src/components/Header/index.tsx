import { Flex, Text } from "@chakra-ui/react"
import { CartDrawer } from "../CartDrawer"



export const Header = () => {
    return (
        <Flex w="100%" >
     <Flex className="header">
            <Flex gap="8px" w="100%">
                <Text textStyle="logoMain">MKS</Text>
                <Text textStyle="logoSec" mt="6px">Sistemas</Text>
            </Flex>
            <CartDrawer />
        </Flex>
        </Flex>
       
    )
}