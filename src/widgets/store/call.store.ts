import axios from "axios";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface Call {
  status: "ok";
  data: {
    balance: "88.810000";
    call_id: 2305312198469598;
    created: "2023-05-31T14:58:18.657Z";
    phone: "+79659943654";
    pincode: "5986";
  };
}

type Store = {
  isSuccess: boolean;
  call: Call | null;
  getCall: (phone: string) => void;
};

export const useCall = create(
  devtools<Store>((set, get) => ({
    isSuccess: false,
    call: null,
    getCall: async (phone) => {
      const customer_phonenumber = phone
        .replaceAll("(", "")
        .replaceAll(")", "")
        .replaceAll("-", "")
        .replaceAll(" ", "")
        .replaceAll("+", "");

      try {
        await axios
          .get(
            `https://phonemarsol.onrender.com/api/phone/phoneVerify/${customer_phonenumber}`
          )
          .then((res) => {
            set({ call: res.data });
            const pass = prompt("Введите последние 4 цифры номера");
            if (pass === get().call?.data.pincode) {
              set({ isSuccess: true });
            }
          })
          .catch((e) => {
            set({ isSuccess: false });
            console.error(e);
          });
      } catch (error) {
        set({ isSuccess: false });
        console.error("ошибка", error);
      }
    },
  }))
);
