import { Flex, Text } from "@chakra-ui/react"


export const Footer = () => {
    return (
        <Flex w="100%">
        <Flex bgColor="primary.gray" py="8px" justifyContent="center" position="fixed" bottom="0" w="100%">
           
                <Text textStyle="footer">MKS sistemas © Todos os direitos reservados</Text>
           
        </Flex>
        </Flex>
    )
}