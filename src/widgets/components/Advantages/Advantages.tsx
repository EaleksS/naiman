import { FC } from "react";
import styles from "./Advantages.module.scss";
import { Button, Text } from "../../../shared";
import { TbMessageCircle2Filled } from "react-icons/tb";
import { useStore } from "../../store/nav.store";

export const Advantages: FC = (): JSX.Element => {
  const { setIsActive } = useStore();

  return (
    <div className={styles.advantages} id="advantages">
      <Text type="h2" mt="60px" fw="500">
        Преимущества NAIMAN RESIDENCE
      </Text>
      <div className={styles.items}>
        <div className={styles.item}>
          <img src="/adv/1.svg" alt="svg" />
          <Text fw="300" fz="16px">
            Удобная и выгодная локация
            <br />
            <br />
            Находится в самой зеленой и экологической чистой части города Сочи
          </Text>
        </div>
        <div className={styles.item}>
          <img src="/adv/2.svg" alt="svg" />
          <Text fw="300" fz="16px">
            Развитая инфраструктура
            <br />
            <br />
            Всё, что нужно для комфортного отдыха - у вас под рукой
          </Text>
        </div>
        <div className={styles.item}>
          <img src="/adv/3.svg" alt="svg" />
          <Text fw="300" fz="16px">
            Превосходный дизайн
            <br />
            <br />В номерах будет готовый дизайнерский ремонт
          </Text>
        </div>
        <div className={styles.item}>
          <img src="/adv/4.svg" alt="svg" />
          <Text fw="300" fz="16px">
            Инвестиционно привлекателен
            <br />
            <br />
            Получите актуальные расчеты пассивного дохода с апартаментов на ваш
            WhatsApp
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
