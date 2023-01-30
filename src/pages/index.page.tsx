import { Flex, Grid, GridItem } from '@chakra-ui/react';
import { NextPage } from 'next';
import { IProducts } from '../api/interface/product';
import { useProducts } from '../api/products';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ProductCard } from '../components/ProductCard';
import { SkeletonProduct } from '../components/SkeletonProduct';
import { useWindowSize } from '../hooks/useWindowSize';

const Home: NextPage = () => {
  const productsFound: IProducts[] = useProducts().products?.data.products;
  const largerThan768 = useWindowSize();
  return (
    <Flex direction="column" w="100%">
      <Header />
      {productsFound !== undefined ? (
        <Flex className="home" mb={largerThan768 ? '' : '100px'} h="100%">
          <Flex justifyContent="center" h="95%">
            <Grid
              templateColumns={
                largerThan768 ? 'repeat(4, 1fr)' : 'repeat(2, 1fr)'
              }
              width="70%"
              h="100%"
            >
              {productsFound.map((index, key) => (
                <GridItem key={key} mt="24px" minW="260px">
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
