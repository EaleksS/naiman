import { FC } from "react";
import styles from "./Apartments.module.scss";
import { Text } from "../../../shared";

export const Apartments: FC = (): JSX.Element => {
  return (
    <div className={styles.apartments}>
      <div className={styles.title}>
        <Text type="h2" color="#000" fw="600">
          Апартаменты с готовым ремонтом
        </Text>
        <Text mt="2rem">
          Дизайн-проекты номеров будут выдержаны в едином <br /> стиле.
          Используются только премиальные материалы, <br /> мебель и техника.
          <br />
          <br />
          Особую роскошь номерам придают раздвижные <br /> панорамные окна без
          угловых несущих колонн, которые <br /> позволяют наслаждаться
          прекрасными видами и <br />
          гармонично объединить внутреннее пространство <br /> апартаментов с
          окружающей средой.
        </Text>
      </div>
      <img src="/img/04.png" alt="img" />
    </div>
  );
};
