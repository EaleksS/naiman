import axios from "../../../node_modules/axios";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

type Store = {
  isSuccess: boolean | null;
  getCall: (phone: string) => void;
};

export const useCall = create(
  devtools<Store>(() => ({
    isSuccess: null,
    getCall: async (phone) => {
      // const YOUR_PUBLICK_KEY = "6496a0b33f8e3c5164fc703a56d7a367";
      const customer_phonenumber = phone
        .replaceAll("(", "")
        .replaceAll(")", "")
        .replaceAll("-", "")
        .replaceAll(" ", "")
        .replaceAll("+", "");
      // const campaign_id = "1896905949";
      console.log(customer_phonenumber);

      // const URL_API = `https://zvonok.com/manager/cabapi_external/api/v1/phones/confirm/`;
      // const URL_API3 = `https://zvonok.com/manager/cabapi_external/api/v1/phones/calls_by_phone/?campaign_id=149850533&phone=%2B${customer_phonenumber}&public_key=6496a0b33f8e3c5164fc703a56d7a367`;
      const URL_API2 = `https://zvonok.com/manager/cabapi_external/api/v1/phones/flashcall/?campaign_id=149850533&phone=%2B${customer_phonenumber}&public_key=6496a0b33f8e3c5164fc703a56d7a367`;

      axios
        .post(URL_API2)
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });

      //   try {
      //     await axios
      //       .post(URL_API)
      //       .then((e) => {
      //         console.log(e);
      //       })
      //       .catch((e) => {
      //         console.error(e, "ошибка");
      //       });

      //     await setTimeout(async () => {
      //       await axios
      //         .get(URL_API2)
      //         .then(() => set({ isSuccess: true }))
      //         .catch((e) => {
      //           console.error(e, "ошибка");
      //           set({ isSuccess: false });
      //         });
      //     }, 60000);
      //   } catch (error) {
      //     console.error(error);
      //   }
    },
  }))
);
