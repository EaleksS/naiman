import { FC } from "react";
import styles from "./Header.module.scss";
import { Text } from "../../../shared";

export const Header: FC = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/logo2.svg" alt="logo" />
        <Text type="h4">NAIMAN</Text>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Text>О комплексе</Text>
          </li>
          <li>
            <Text>Фото</Text>
          </li>
          <li>
            <Text>Преимущества</Text>
          </li>
          <li>
            <Text>Планировки</Text>
          </li>
          <li>
            <Text>Контакты</Text>
          </li>
        </ul>
      </nav>
    </header>
  );
};
