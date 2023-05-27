import { Dispatch } from "react";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

type Store = {
  isActive: boolean;
  setIsActive: Dispatch<React.SetStateAction<boolean>>;
};

export const useStore = create(
  devtools<Store>(
    (set, get) => ({
      isActive: false,
      setIsActive: (bool) => {
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
