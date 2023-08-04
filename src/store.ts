import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeStore {
  mode: "dark" | "light";
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      mode: "light",
      toggleTheme: () =>
        set(({ mode }) => ({ mode: mode === "light" ? "dark" : "light" })),
    }),
    {
      name: "theme",
    }
  )
);

interface CartItem {
  _id: string;
  title: string;
  img: string;
  price: number;
  quantity: number;
}

interface CartStoreInterface {
  items: CartItem[];
  addToCart: (cart: CartItem) => void;
  removeItem: (itemId: string) => void;
  incQuantity: (itemId: string) => void;
  decQuantity: (itemId: string) => void;
  isOpen: boolean;
  handleOpen: () => void;
}

export const useCartStore = create<CartStoreInterface>()(
  persist(
    (set) => ({
      items: [],
      isOpen: false,
      addToCart: (item) =>
        set(({ items }) => {
          const isPresent = items.find((i) => i._id === item._id);
          if (!isPresent) {
            return { items: [...items, item] };
          }
          const updatedItem = items.map((i) =>
            i._id === item._id ? { ...i, quantity: i.quantity + 1 } : i
          );

          return { items: updatedItem };
        }),
      removeItem: (id) =>
        set(({ items }) => ({ items: items.filter((i) => i._id !== id) })),
      incQuantity: (id) =>
        set(({ items }) => {
          const updatedItem = items.map((i) =>
            i._id === id ? { ...i, quantity: i.quantity + 1 } : i
          );

          return { items: updatedItem };
        }),
      decQuantity: (id) =>
        set(({ items }) => {
          const updatedItem = items.map((i) =>
            i._id === id ? { ...i, quantity: i.quantity - 1 } : i
          );
          return { items: updatedItem };
        }),
      handleOpen: () =>
        set(({ isOpen }) => ({ isOpen: isOpen ? false : true })),
    }),
    {
      name: "cart-sotre",
    }
  )
);

interface ProductQuery {
  brandId?: string;
  price?: number;
}

interface GameQueryStore {
  productQuery: ProductQuery;
  setBrandId: (brandId: string) => void;
  setPrice: (price: number) => void;
}

export const useProductQueryStore = create<GameQueryStore>((set) => ({
  productQuery: {},

  setBrandId: (brandId) =>
    set((store) => ({
      productQuery: {
        ...store.productQuery,
        brandId: brandId,
        searchText: undefined,
      },
    })),
  setPrice: (price) =>
    set((store) => ({
      productQuery: {
        ...store.productQuery,
        price: price,
      },
    })),
}));
