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
          <img src="/adv/4.svg" alt="svg" />
          <Text fw="300" fz="16px">
            Эскроу-счета
            <br />
            ФЗ-214
            <br />
            Рассрочка до конца строительства
          </Text>
        </div>
        <div className={styles.item}>
          <img src="/adv/7.svg" alt="svg" />
          <Text fw="300" fz="16px">
            Надёжный застройщик с опытом работы в Сочи
          </Text>
        </div>
        <div className={styles.item}>
          <img src="/adv/8.svg" alt="svg" />
          <Text fw="300" fz="16px">
            Проектное финансирование от Сбербанк
          </Text>
        </div>
        <div className={styles.item}>
          <img src="/adv/9.svg" alt="svg" />
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
