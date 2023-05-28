import { FC } from "react";
import styles from "./Header.module.scss";
import { Text } from "../../../shared";
import { Link } from "react-scroll";

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
            <Link to="about" smooth={true}>
              <Text>О комплексе</Text>
            </Link>
          </li>
          <li>
            <Link to="gallery" smooth={true}>
              <Text>Фото</Text>
            </Link>
          </li>
          <li>
            <Link to="advantages" smooth={true}>
              <Text>Преимущества</Text>
            </Link>
          </li>
          <li>
            <Link to="plans" smooth={true}>
              <Text>Планировки</Text>
            </Link>
          </li>
          <li>
            <Link to="contacts" smooth={true}>
              <Text>Контакты</Text>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
