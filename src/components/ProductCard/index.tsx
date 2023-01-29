import { Flex, Image, Text } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { IProducts } from '../../api/interface/product';
import { addPurchase } from '../../store/productStore';
import { DynamicIcon } from '../DynamicIcon';
import { BlueButton } from './CardButton';

export const ProductCard = (prop: { prop: IProducts }) => {
  const product = prop.prop;
  const dispatch = useDispatch();

  return (
    <Flex className="productCard">
      <Flex className="productCard1">
        <Image className="image" src={product.photo} alt={product.name} />
        <Flex justifyContent="space-between" gap="8px">
          <Text textStyle="productCard">{product.name}</Text>
          <Flex textStyle="productCardPrice" className="productCardPrice">
            R${product.price.split('.')[0]}
          </Flex>
        </Flex>
        <Flex>
          <Text textStyle="productCardDescription">{product.description}</Text>
        </Flex>
      </Flex>

      <Flex w="100%">
        <BlueButton onClick={() => dispatch(addPurchase(product))}>
          <Flex gap="8px">
            <DynamicIcon w="12px" h="13,5px" icon="shopping-bag" />
            <Text>COMPRAR</Text>
          </Flex>
        </BlueButton>
      </Flex>
    </Flex>
  );
};
