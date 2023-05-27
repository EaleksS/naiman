import { FC } from "react";
import styles from "./Plans.module.scss";
import { Button, Text } from "../../../shared";
import { TbMessageCircle2Filled } from "react-icons/tb";
import { useStore } from "../../store/nav.store";

export const Plans: FC = (): JSX.Element => {
  const { setIsActive } = useStore();

  return (
    <div className={styles.plans}>
      <Text type="h2" mt="60px" fw="500">
        Планировки NAIMAN RESIDENCE
      </Text>
      <div className={styles.items}>
        <div className={styles.item}>
          <img src="/i3.jpg" alt="svg" />
          <Text type="h4" fw="600">
            Типовой план этажа
          </Text>
        </div>
        <div className={styles.item}>
          <img src="/i3.jpg" alt="svg" />
          <Text type="h4" fw="600">
            Планировка 1-комн 37 м2
          </Text>
        </div>
        <div className={styles.item}>
          <img src="/i3.jpg" alt="svg" />
          <Text type="h4" fw="600">
            Планировка 2-комн 60 м2
          </Text>
        </div>
      </div>

      <div className={styles.btn}>
        <Button type="primary" onClick={setIsActive}>
          <TbMessageCircle2Filled />
          <Text fw="500">Получить все планировки на WhatsApp</Text>
        </Button>
      </div>
    </div>
  );
};
