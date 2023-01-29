import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Text,
  Flex,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { IProducts } from '../../api/interface/product';
import { showPurchase } from '../../store/productStore';
import { CardCart } from '../CardCart';
import { DynamicIcon } from '../DynamicIcon';
import { BlackButton, CartButton } from '../ProductCard/CardButton';

export const CartDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  let list: IProducts[] = useSelector(showPurchase).value.data;
  const totalPrice = list.reduce((prev, next) => {
    return prev + parseFloat(next.price);
  }, 0);
  list = list
    .filter((item, index) => list.indexOf(item) === index)
    .sort((a, b) => a.id - b.id);
  const noEditList: IProducts[] = useSelector(showPurchase).value.data;

  return (
    <>
      <CartButton onClick={onOpen}>
        <Flex>
          <DynamicIcon h="18px" icon="cart" />
        </Flex>
        <Text>{noEditList.length}</Text>
      </CartButton>
      <Drawer isOpen={isOpen} onClose={onClose} size="sm">
        <DrawerContent backgroundColor="primary.blue">
          <DrawerHeader pl="37px" pt="26px" mb="70px">
            <Flex justifyContent="space-between">
              <Flex direction="column" textStyle="cartDrawer" fontSize="24px">
                <Text>Carrinho</Text>
                <Text> de compras</Text>
              </Flex>
              <Flex onClick={onClose} cursor="pointer">
                <DynamicIcon w="30px" h="30px" icon="close" />
              </Flex>
            </Flex>
          </DrawerHeader>

          {list !== undefined && list.length > 0 && (
            <DrawerBody className="scroll-custom">
              <Stack spacing="24px" mb="120px">
                {list.map((index, key) => (
                  <Flex key={key} w="100%">
                    <CardCart prop={index} />
                  </Flex>
                ))}
              </Stack>
            </DrawerBody>
          )}

          <DrawerFooter
            w="100%"
            flexDirection="column"
            p="0"
            position="fixed"
            bottom="0"
            backgroundColor="primary.blue"
          >
            <Flex className="flexDrawerFooter" textStyle="cartDrawer">
              <Text>Total:</Text>
              <Text>R${totalPrice.toFixed(0)}</Text>
            </Flex>
            <BlackButton>Finalizar Compra</BlackButton>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
