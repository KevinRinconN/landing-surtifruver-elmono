import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { STRAPI_HOST } from "./api/strapi.api";
import type { ProductItem } from "./get-products-info";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const addHost = (url: string) => {
  return `${STRAPI_HOST}${url}`;
};

export function calculateDiscountPercentage(
  originalPrice: number,
  discountedPrice: number
) {
  if (
    originalPrice <= 0 ||
    discountedPrice < 0 ||
    discountedPrice > originalPrice
  ) {
    throw new Error("Los precios no son válidos.");
  }

  const discount = ((originalPrice - discountedPrice) / originalPrice) * 100;
  return discount.toFixed(0); // Redondea a dos decimales
}

type Product = ProductItem & { quantity: number };

export function createWhatsAppMessage(cart: Product[]): string {
  // Mensaje inicial
  let message = "Hola, estoy interesado en los siguientes productos:\n\n";

  // Iterar sobre los productos en el carrito
  cart.forEach((product) => {
    const price =
      product.hasDiscount && product.priceAfterDiscount
        ? product.priceAfterDiscount
        : product.price;

    message += `- ${product.name}\n  Cantidad: ${
      product.quantity
    }\n  Precio: $${price}\n\n`;
  });

  // Agregar nota final o despedida (opcional)
  message +=
    "Por favor, confírmeme disponibilidad y tiempo de entrega. Gracias.";

  return message;
}
