import { strapiApi } from "./api/strapi.api";
import { addHost } from "./utils";

export const getCategoriesWithImgInfo = async () => {
  const res = strapiApi.get("categorias?populate=Imagen");
  const categories = (await res).data.data;

  return categories.map((category: any) => {
    return {
      name: category.Nombre,
      slug:category.slug,
      img: addHost(category.Imagen.url),
      color: category.Color,
    }
  });
};

export const getCategoriesInfo = async () => {
  const res = strapiApi.get("categorias");
  const categories = (await res).data.data;

  return categories.map((category: any) => {
    return {
      name: category.Nombre,
      slug:category.slug,
      color: category.Color,
    }
  });
};

