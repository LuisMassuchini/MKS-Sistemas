import { useQuery } from "@tanstack/react-query";
import { axiosConnection } from "./axios-instance";
import { IProducts } from "./interface/product";

export const getProducts = async () => {
    try {
      const data = await axiosConnection.get(`?page=1&rows=8&sortBy=id&orderBy=ASC`);
      return {
        status: data.status,
        message: 'Sucesso em obter produtos',
        data: data.data,
      };
    } catch (error: any) {
      return {
        data: [],
        message: 'Falha em obter produtos',
        status: error?.response.status,
      };
    }
  };

  export const useProducts = () => {
    const {
      data: products,
      isLoading: isLoadingProducts,
      isError,
    } = useQuery(['products'], () => getProducts());
    return { products, isLoadingProducts };
  };

// export const getProducts = async () => {
//         try {
//           const data = await axiosConnection.get(`?page=1&rows=8&sortBy=id&orderBy=ASC`);
//           return  data
//         } catch (error: any) {
//          console.log(error)
//         }
//       };