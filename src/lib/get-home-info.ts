import { STRAPI_HOST, strapiApi } from "./api/strapi.api";
import { addHost } from "./utils";

export const getHomeInfo = async () => {
  const res = strapiApi.get("inicio?populate=Banner&populate=Precios");
  const { Banner, Precios } = (await res).data.data;

  const bannerImgs = Banner.map((img: any) => {
    return addHost(img.url);
  });

  const priceImgs = Precios.map((img: any) => {
    return addHost(img.url);
  });
  return { bannerImgs, priceImgs };
};
