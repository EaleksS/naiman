import { FC } from "react";
import styles from "./About.module.scss";
import { Text } from "../../../shared";

export const About: FC = (): JSX.Element => {
  return (
    <div className={styles.about} id="about">
      <Text type="h2" mt="60px" fw="500">
        NAIMAN RESIDENCE
      </Text>

      <div className={styles.items}>
        <div className={styles.item}>
          <img src="/about/p1.svg" alt="svg" />
          <Text fw="300" fz="16px">
            Сильная архитектурная концепция от бюро UNK project
          </Text>
        </div>
        <div className={styles.item}>
          <img src="/about/p2.svg" alt="svg" />
          <Text fw="300" fz="16px">
            Надёжный застройщик с опытом работы в Сочи АЛЬПИКА GROUP
          </Text>
        </div>
        <div className={styles.item}>
          <img src="/about/p3.svg" alt="svg" />
          <Text fw="300" fz="16px">
            Проектное финансирование от Сбербанк
          </Text>
        </div>
        <div className={styles.item}>
          <img src="/about/p4.svg" alt="svg" />
          <Text fw="300" fz="16px">
            Управление от гостиничного оператора мирового уровня
          </Text>
        </div>
      </div>

      <div className={styles.img}>
        <img className={styles.img_preview} src="/i2.webp" alt="preview" />
        <div className={styles.bg}></div>
      </div>
    </div>
  );
};
