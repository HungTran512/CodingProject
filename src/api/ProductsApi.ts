import { AxiosResponse } from "axios";
import { IProduct } from "../interfaces/Product.interface";
import api from ".";

export const getProducts = async (
  limit: number,
  skip: number
): Promise<IProduct[]> => {
  try {
    const response: AxiosResponse<{ products: IProduct[] }> = await api.get(
      `?limit=${limit}&skip=${skip}`
    );
    return response.data.products;
  } catch (error) {
    console.error("Error loading products:", error);
    throw error;
  }
};
