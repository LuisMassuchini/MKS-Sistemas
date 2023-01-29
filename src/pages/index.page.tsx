import { Flex, Grid, GridItem } from '@chakra-ui/react';
import { NextPage } from 'next';
import { IProducts } from '../api/interface/product';
import { useProducts } from '../api/products';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ProductCard } from '../components/ProductCard';
import { SkeletonProduct } from '../components/SkeletonProduct';

const Home: NextPage = () => {
  const productsFound: IProducts[] = useProducts().products?.data.products;

  return (
    <Flex direction="column" w="100%">
      <Header />
      {productsFound !== undefined ? (
        <Flex className="home" >
          <Flex justifyContent="center" h="95%">
            <Grid templateColumns="repeat(4, 1fr)" width="70%" h="100%">
              {productsFound.map((index, key) => (
                <GridItem key={key} mt="24px">
                  <ProductCard prop={index} />
                </GridItem>
              ))}
            </Grid>
          </Flex>
        </Flex>
      ) : (
        <SkeletonProduct />
      )}
      <Footer />
    </Flex>
  );
};

export default Home;
