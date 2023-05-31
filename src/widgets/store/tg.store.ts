import axios from "axios";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

type Store = {
  sendTg: (
    title: string,
    phone: string,
    name?: string,
    isSuccess?: boolean
  ) => void;
};

export const useSendTG = create(
  devtools<Store>(() => ({
    sendTg: (title, phone, name = "Не указано", isSuccess = false) => {
      const TOKEN = "6227172461:AAH38PUCFGP3LQtTxOAgZPY18IrrrYktmbU";
      const CHAT_ID = "-1001879039233";
      const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

      const message = `<b>${title}</b> - Заявка с сайта!\n<b>Имя: </b> ${name}\n<b>Номер: </b>${phone}\n<b>Время отправки: </b>${new Date().toLocaleDateString()}\n<b>Номер подтержден: </b>${
        isSuccess ? "да" : "нет"
      }`;

      axios
        .post(URL_API, {
          chat_id: CHAT_ID,
          parse_mode: "HTML",
          text: message,
        })
        .then(() => console.log("заявка успешно отправлено"))
        .catch((e) => console.error(e, "ошибка отправки сообщения в тг"));
    },
  }))
);
