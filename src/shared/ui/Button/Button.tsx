import { Dispatch, FC, ReactNode, SetStateAction } from "react";
import styles from "./Button.module.scss";

interface Props {
  type?: "default" | "primary";
  children: ReactNode;
  onClick?: Dispatch<SetStateAction<any>>;
  mt?: string;
}

export const Button: FC<Props> = ({
  type = "default",
  children,
  mt = "0",
  onClick = () => "",
}): JSX.Element => {
  switch (type) {
    case "primary":
      return (
        <button
          className={`${styles.btn} ${styles.primary}`}
          style={{ marginTop: mt }}
          onClick={onClick}
        >
          {children}
        </button>
      );

    default:
      return (
        <button
          className={`${styles.btn} ${styles.default}`}
          style={{ marginTop: mt }}
          onClick={onClick}
        >
          {children}
        </button>
      );
  }
};
