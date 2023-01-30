import { Flex, Text } from '@chakra-ui/react';

export const Footer = () => {
  return (
    <Flex w="100%">
      <Flex className="footer">
        <Text textStyle="footer">
          MKS sistemas © Todos os direitos reservados
        </Text>
      </Flex>
    </Flex>
  );
};
