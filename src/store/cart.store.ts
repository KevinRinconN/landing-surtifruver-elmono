import type { ProductItem } from "@/lib/get-products-info";
import { create } from "zustand";

type Product = ProductItem & { quantity: number };

interface CartState {
  cart: Product[];
  addProduct: (product: Omit<Product, "quantity">) => void;
  removeProduct: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

const useCartStore = create<CartState>((set) => ({
  cart: [],

  addProduct: (product) =>
    set((state) => {
      const existingProductIndex = state.cart.findIndex(
        (item) => item.id === product.id
      );
      if (existingProductIndex !== -1) {
        const newCart = [...state.cart];
        newCart[existingProductIndex].quantity += 1;
        return { cart: newCart };
      } else {
        return { cart: [...state.cart, { ...product, quantity: 1 }] };
      }
    }),

  removeProduct: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId),
    })),

  updateQuantity: (productId, quantity) =>
    set((state) => {
      const newCart = state.cart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      );
      return { cart: newCart };
    }),

  clearCart: () => set({ cart: [] }),
}));

export default useCartStore;