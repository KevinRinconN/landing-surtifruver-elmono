import { useState } from "react";
import { IconWrapper } from "./icon/icon-wrapper";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import useCartStore from "@/store/cart.store";
import { ImgAvatar } from "./img-avatar";
import { unitMeasurement } from "./widget/product-list";
import { calculateDiscountPercentage, createWhatsAppMessage } from "@/lib/utils";

export const CartSheet = () => {
  const [open, setOpen] = useState(false);
  const cart = useCartStore((state) => state.cart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeProduct = useCartStore((state) => state.removeProduct);

  const encodedMessage = encodeURIComponent(createWhatsAppMessage(cart));

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <div className="relative">
          <Button
            size="icon"
            className="text-white border rounded-md border-primary font-medium cursor-pointer text-center"
          >
            <IconWrapper icon="buyCar" strokeWidth="bold" />
          </Button>

          {cart?.length > 0 && (
            <div className="flex items-center justify-center text-white text-xs absolute rounded-full -right-2 -bottom-1">
              <span className="relative flex h-5 w-5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative flex items-center justify-center rounded-full h-5 w-5 bg-red-500">
                  {cart?.length}
                </span>
              </span>
            </div>
          )}
        </div>
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-2">
        <SheetHeader>
          <SheetTitle>Carrito de compras 🛒</SheetTitle>
          <SheetDescription>
            Aquí puedes ver todos los productos que has seleccionado. Revisa tu
            lista, ajusta las cantidades o elimina lo que no desees.
          </SheetDescription>
        </SheetHeader>
        <h2 className="text-muted-foreground mt-2">{cart?.length} artículos</h2>
        <div className="flex flex-col flex-1 divide-y">
          {cart.map(
            ({
              id,
              measurement,
              img,
              name,
              hasDiscount,
              price,
              quantity,
              priceAfterDiscount,
            }) => (
              <div className="py-4">
                <div className="flex gap-x-4 items-start">
                  <ImgAvatar className="rounded-lg" img={img} />
                  <div>
                    <p className="text-xl">{name}</p>
                    <div className="flex items-center gap-x-2 mt-1 ">
                      <span className="text-muted-foreground">
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
                          <span className="text-muted-foreground ml-2 line-through">
                            ${price}
                          </span>
                        </div>
                      )}
                    </div>
                    <p className="text-lg font-medium mt-2">
                      ${" "}
                      {hasDiscount && priceAfterDiscount
                        ? priceAfterDiscount
                        : price}
                    </p>
                    <div className="flex items-center gap-x-4">
                      <div className="w-fit flex gap-x-2 items-center rounded-full border mt-1">
                        <Button
                          className="rounded-full"
                          size="icon"
                          variant="ghost"
                          onClick={() => {
                            let newQuantity = quantity - 1;

                            if (newQuantity < 1) {
                              removeProduct(id);
                              return;
                            }
                            updateQuantity(id, newQuantity);
                          }}
                        >
                          -
                        </Button>
                        <span>{quantity}</span>
                        <Button
                          className="rounded-full"
                          size="icon"
                          variant="ghost"
                          onClick={() => {
                            updateQuantity(id, quantity + 1);
                          }}
                        >
                          +
                        </Button>
                      </div>
                      <Button
                        className="rounded-full"
                        size="icon"
                        variant="secondary"
                        onClick={() => {
                          removeProduct(id);
                        }}
                      >
                        x
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
        <SheetFooter className="flex sm:flex-col sm:space-x-0 border-t ">
          <div className="font-medium mb-4 mt-4">
            <div className="flex items-center justify-between">
              <p>Subtotal: </p>
              <p>
                ${" "}
                {cart.reduce(
                  (total, item) => total + item.price * item.quantity,
                  0
                )}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p>Total:</p>
              <p className="text-2xl">
                ${" "}
                {cart.reduce(
                  (total, item) => total + item.price * item.quantity,
                  0
                )}{" "}
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col space-y-2">
            <Button variant="outline">Vaciar carrito</Button>
            <Button className="w-full text-white" asChild>
              <a
                href={(`https://wa.me/3207686012?text=${encodedMessage}`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconWrapper
                  className="mr-2 w-6 h-6"
                  strokeWidth="bold"
                  icon="message"
                />
                Contactar por WhatsApp
              </a>
            </Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
