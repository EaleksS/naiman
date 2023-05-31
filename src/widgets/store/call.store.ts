import axios from "axios";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

type Store = {
  isSuccess: boolean | null;
  getCall: (phone: string) => void;
};

export const useCall = create(
  devtools<Store>((set) => ({
    isSuccess: null,
    getCall: async (phone) => {
      const YOUR_PUBLICK_KEY = "6496a0b33f8e3c5164fc703a56d7a367";
      const customer_phonenumber = phone
        .replaceAll("(", "")
        .replaceAll(")", "")
        .replaceAll("-", "")
        .replaceAll(" ", "");
      const campaign_id = "1896905949";
      console.log(customer_phonenumber);

      const URL_API = `https://zvonok.com/manager/cabapi_external/api/v1/phones/confirm/`;
      const URL_API2 = `https://zvonok.com/manager/cabapi_external/api/v1/phones/calls_by_phone/`;

      const formData = new FormData();
      formData.append("public_key", YOUR_PUBLICK_KEY);
      formData.append("phone", customer_phonenumber);
      formData.append("campaign_id", campaign_id);

      const config = {
        method: "post",
        maxBodyLength: Infinity,
        url: URL_API,
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: formData,
      };

      const config2 = {
        method: "get",
        maxBodyLength: Infinity,
        url: URL_API2,
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: formData,
      };

      axios(config)
        .then(function (response) {
          console.log(1, JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(1, error);
        });

      setTimeout(() => {
        axios(config2)
          .then(function (response) {
            console.log(2, JSON.stringify(response.data));
          })
          .catch(function (error) {
            console.log(2, error);
          });
      }, 60000);

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
