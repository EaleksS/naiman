import { Dispatch, FC } from "react";
import styles from "./Input.module.scss";
import InputMask from "react-input-mask";

interface Props {
  type?: "email" | "text" | "tel";
  placholder?: string;
  value?: string;
  setValue?: Dispatch<React.SetStateAction<string>>;
}

export const Input: FC<Props> = ({
  type = "text",
  placholder,
  value,
  setValue,
}): JSX.Element => {
  switch (type) {
    case "email":
      return (
        <label className={styles.label}>
          <div>
            <input
              type="email"
              placeholder={
                placholder ? placholder : "Введите тел.номер или эл.почту"
              }
            />
          </div>
        </label>
      );

    case "tel":
      return (
        <label className={styles.label}>
          <div>
            <InputMask
              mask="+7 (999) 999-99-99"
              name="message"
              placeholder={placholder ? placholder : "Введите тел.номер"}
            ></InputMask>
            {/* <input
              type="tel"
              
            /> */}
          </div>
        </label>
      );

    default:
      return (
        <label className={`${styles.label}`}>
          <div>
            <input
              type="text"
              placeholder={placholder ? placholder : "Текст"}
            />
          </div>
        </label>
      );
  }
};
