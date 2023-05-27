import { Dispatch } from "react";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

type Store = {
  isActive: boolean;
  setIsActive: Dispatch<React.SetStateAction<boolean | null>>;
};

export const useStore = create(
  devtools<Store>(
    (set, get) => ({
      isActive: false,
      setIsActive: (bool = null) => {
        if (typeof bool === "boolean") {
          set({ isActive: bool });
          return;
        }

        set({ isActive: !get().isActive });
      },
    }),
    { name: "products" }
  )
);
