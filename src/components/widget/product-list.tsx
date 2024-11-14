import { useEffect, useState } from "react";
import { IconWrapper } from "../icon/icon-wrapper";
import type { IconUi } from "../icon/icons";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";
import { calculateDiscountPercentage, cn } from "@/lib/utils";
import { getProductsInfo, type ProductItem } from "@/lib/get-products-info";
import { useLocation } from "react-router-dom";
import useCartStore from "@/store/cart.store";
import { ImgAvatar } from "../img-avatar";

interface Colors {
  Amarillo: IconUi;
  Rojo: IconUi;
  Verde: IconUi;
}

interface Props {
  initialCategory?: string;
  categories?: {
    name: string;
    slug: string;
    color: keyof Colors;
  }[];
}

const colors: Colors = {
  Amarillo: "wheat",
  Rojo: "apple",
  Verde: "bean",
};

export const unitMeasurement = {
  UNIDAD: "Und",
  LIBRA: "Lb",
  Kilo: "Kg",
};

export const ProductList = ({ initialCategory, categories }: Props) => {
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState<ProductItem[] | undefined>();

  const loadProducts = async () => {
    const products = await getProductsInfo(category || "");
    setProducts(products);
  };

  useEffect(() => {
    loadProducts();
  }, [category]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get("category");
    setCategory(categoryParam || "");
  }, []);

  const addProduct = useCartStore((state) => state.addProduct);

  return (
    <div className="flex gap-x-4">
      <article className="w-full max-w-xs">
        <Card className="px-6 py-4">
          <h2 className="text-xl text-muted-foreground">Categorias</h2>
          <ul className="flex flex-col space-y-2 mt-4">
            <li
              className={cn(
                "flex gap-x-4 items-center text-[#474747] px-4  py-2 rounded-lg cursor-pointer",
                category == "" && "text-[#64965f] bg-[#c1eebd]"
              )}
              onClick={() => {
                setCategory("");
              }}
            >
              <IconWrapper
                className="w-6 h-6"
                icon="archive"
                strokeWidth="bold"
              />{" "}
              <p className="text-xl font-medium capitalize">Todos</p>
            </li>
            {categories &&
              categories.map(({ name, slug, color }) => (
                <li
                  key={name}
                  className={cn(
                    "flex gap-x-4 items-center text-[#474747] px-4  py-2 rounded-lg cursor-pointer",
                    category == slug && "text-[#64965f] bg-[#c1eebd]"
                  )}
                  onClick={() => {
                    setCategory(slug);
                  }}
                >
                  <IconWrapper
                    className="w-6 h-6"
                    icon={colors[color]}
                    strokeWidth="bold"
                  />{" "}
                  <p className="text-xl font-medium capitalize">
                    {name.toLowerCase()}
                  </p>
                </li>
              ))}
          </ul>
        </Card>
      </article>
      <article className="flex-1 grid grid-cols-3 gap-x-4">
        {products &&
          products.map((product) => {
            const {
              id,
              name,
              price,
              img,
              measurement,
              hasDiscount,
              priceAfterDiscount,
            } = product;
            return (
              <Card key={id}>
                <CardHeader>
                  <ImgAvatar className="rounded-lg w-full h-32" img={img} />
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col space-y-2 mb-4">
                    <p className="font-bold text-2xl">{name}</p>
                    <div className="flex items-center gap-x-2 ">
                      <span className="font-semibold text-muted-foreground">
                        1{" "}
                        {measurement &&
                          unitMeasurement[
                            measurement as keyof typeof unitMeasurement
                          ]}
                      </span>
                      {hasDiscount && priceAfterDiscount && (
                        <div>
                          <span className="p-1 px-2 bg-[#fff7be] text-[#b39d64] rounded-lg font-semibold">
                            -
                            {calculateDiscountPercentage(
                              price,
                              priceAfterDiscount
                            )}
                            %
                          </span>
                          <span className="font-semibold text-muted-foreground ml-2 line-through">
                            ${price}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <p className="text-4xl font-bold text-primary">
                    ${" "}
                    {hasDiscount && priceAfterDiscount
                      ? priceAfterDiscount
                      : price}
                  </p>
                  <Button
                    className="w-full text-xl flex gap-x-2 items-center py-6 mt-4"
                    onClick={() => {
                      addProduct(product);
                    }}
                  >
                    <IconWrapper size="lg" icon="buyCar" strokeWidth="bold" />{" "}
                    Agregar
                  </Button>
                </CardContent>
              </Card>
            );
          })}
      </article>
    </div>
  );
};
