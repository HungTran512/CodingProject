import { AxiosResponse } from "axios";
import { IProduct } from "../interfaces/Product.interface";
import api from ".";

export const searchProducts = async (query: string): Promise<IProduct[]> => {
  try {
    const response: AxiosResponse<{ products: IProduct[] }> = await api.get(
      `/search?q=${query}`
    );
    return response.data.products;
  } catch (error) {
    console.error("Error searching products:", error);
    throw error;
  }
};
