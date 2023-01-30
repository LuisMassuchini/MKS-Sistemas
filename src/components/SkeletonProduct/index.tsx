import { Flex, Grid, Skeleton } from '@chakra-ui/react';

export const SkeletonProduct = () => {
  const productsSkeleton = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  return (
    <Flex
      h="100vh"
      direction="column"
      justifyContent="center"
      alignItems="center"
      w="100%"
    >
      <Grid templateColumns="repeat(4, 1fr)" width="70%" h="100%">
        {productsSkeleton.map((index, key) => (
          <Flex key={key} mt="24px">
            <Skeleton className="Skeleton" borderRadius="8px" />
          </Flex>
        ))}
      </Grid>
    </Flex>
  );
};
