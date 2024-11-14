import { strapiApi } from "./api/strapi.api";
import { addHost } from "./utils";

interface Product {
  id: string;
  Nombre: string;
  Activo: boolean;
  Precio: number;
  Imagen: { url: string };
  Medida: string;
  Descuento: boolean;
  PrecioDescuento: number;
}

export interface ProductItem {
  id: string;
  name: string;
  price: number;
  isActive: boolean;
  img: string | null;
  measurement: string;
  hasDiscount: boolean;
  priceAfterDiscount?: number;
}

export const getProductsInfo = async (
  category?: string
): Promise<ProductItem[]> => {
  const res = strapiApi.get(
    `productos?populate=Imagen&filters[categoria][slug][$contains]=${category}`
  );
  const data: Product[] = (await res).data.data;

  const products = data.map(
    ({
      Nombre,
      Precio,
      Activo,
      Imagen,
      id,
      Medida,
      Descuento,
      PrecioDescuento,
    }): ProductItem => {
      return {
        id,
        name: Nombre,
        price: Precio,
        isActive: Activo,
        img: Imagen ? addHost(Imagen.url) : null,
        measurement: Medida,
        hasDiscount: Descuento,
        priceAfterDiscount: PrecioDescuento,
      };
    }
  );
  return products;
};
