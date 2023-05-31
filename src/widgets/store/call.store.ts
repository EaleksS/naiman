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
  call: Call | null;
  getCall: (phone: string) => void;
};

export const useCall = create(
  devtools<Store>((set) => ({
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

            setTimeout(() => {
              set({ call: null });
              
            }, 100000);
          })
          .catch((e) => console.error(e));
      } catch (error) {
        console.error("ошибка", error);
      }
    },
  }))
);
