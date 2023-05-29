import { FC } from "react";
import styles from "./Location.module.scss";
import { Button, Text } from "../../../shared";
import { TbMessageCircle2Filled } from "react-icons/tb";
import { useStore } from "../../store/nav.store";

export const Location: FC = (): JSX.Element => {
  const { setIsActive } = useStore();

  return (
    <div className={styles.location} id="location">
      <Text type="h2" mt="60px" fw="500">
        ЛОКАЦИЯ NAIMAN
      </Text>

      <div className={styles.items}>
        <div className={styles.item}>
          <img src="/img/10.jpg" alt="svg" />
          <Text type="h4" fw="600">
            Пляж 5 мин
          </Text>
        </div>
        <div className={styles.item}>
          <img src="/img/11.jpg" alt="svg" />
          <Text type="h4" fw="600">
            Ж/Д вокзал 10 мин
          </Text>
        </div>
        <div className={styles.item}>
          <img src="/img/12.jpg" alt="svg" />
          <Text type="h4" fw="600">
            Центр Сочи 10 мин
          </Text>
        </div>
        <div className={styles.item}>
          <img src="/img/13.jpg" alt="svg" />
          <Text type="h4" fw="600">
            Аэропорт 19 мин
          </Text>
        </div>
        <div className={styles.item}>
          <img src="/img/14.jpg" alt="svg" />
          <Text type="h4" fw="600">
            Олимпийский парк 30 мин
          </Text>
        </div>
        <div className={styles.item}>
          <img src="/img/15.jpg" alt="svg" />
          <Text type="h4" fw="600">
            Красная Поляна 50 мин
          </Text>
        </div>
      </div>

      <div className={styles.btn}>
        <Button type="primary" onClick={setIsActive}>
          <TbMessageCircle2Filled />
          <Text fw="500">Получить больше информации на WhatsApp</Text>
        </Button>
      </div>
    </div>
  );
};
