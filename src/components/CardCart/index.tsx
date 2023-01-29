import { Flex, Image, Text } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { IProducts } from '../../api/interface/product';
import { removePurchase } from '../../store/productStore';
import { DynamicIcon } from '../DynamicIcon';
import { QuantityButton } from '../QuantityButton';

export const CardCart = (prop: { prop: IProducts }) => {
  const product = prop.prop;
  const dispatch = useDispatch();
  return (
    <Flex className="CardCartMain">
      <Flex className="CardCartSec">
        <Flex className="CardCartTer">
          <Image h="57px" src={product.photo} alt={product.name} />
          <Text color="black" textStyle="cartCardName">
            {product.name}
          </Text>
          <Flex direction="column" gap="4px">
            <Text textStyle="cartCardText">Qnt:</Text>
            <QuantityButton prop={product} />
          </Flex>
          <Text color="black" textStyle="cartCardPrice">
            R${product.price.split('.')[0]}
          </Text>
        </Flex>
      </Flex>
      <Flex
        className="CardCartRemoveB"
        onClick={() => dispatch(removePurchase(product.id))}
      >
        <DynamicIcon h="18px" icon="close" />
      </Flex>
    </Flex>
  );
};
