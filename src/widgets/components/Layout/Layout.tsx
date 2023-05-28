import { FC, ReactNode } from "react";
import styles from "./Layout.module.scss";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Zayavka } from "../Zayavka/Zayavka";

interface Props {
  children: ReactNode;
  btn?: boolean;
}

export const Layout: FC<Props> = ({ children, btn = false }): JSX.Element => {
  return (
    <div className={styles.wrapper} id="wrapper">
      <Header />
      {children}
      <Footer btn={btn} />
      <Zayavka />
    </div>
  );
};
