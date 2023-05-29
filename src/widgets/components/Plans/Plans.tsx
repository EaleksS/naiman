import { FC } from "react";
import styles from "./Plans.module.scss";
import { Button, Text } from "../../../shared";
import { TbMessageCircle2Filled } from "react-icons/tb";
import { useStore } from "../../store/nav.store";

export const Plans: FC = (): JSX.Element => {
  const { setIsActive } = useStore();

  return (
    <div className={styles.plans} id="plans">
      <Text type="h2" mt="60px" fw="500">
        Планировки NAIMAN RESIDENCE
      </Text>
      <div className={styles.items}>
        <div className={styles.item}>
          <img
            src="https://i.1.creatium.io/6b/2e/b7/2bebf1b2728723d93857de2315d0640d78/db0e6b2e08315a103517925df2a380bf.png"
            alt="svg"
          />
          <Text type="h4" fw="600">
            Типовой план этажа
          </Text>
        </div>
        <div className={styles.item}>
          <img
            src="https://i.1.creatium.io/52/da/a0/5f2413d4a97d2727c8c47d1c725292fd1d/2e2b763859c76c5976b05d2cd0422ee4.png"
            alt="svg"
          />
          <Text type="h4" fw="600">
            Планировка 1-комн 37 м2
          </Text>
        </div>
        <div className={styles.item}>
          <img
            src="https://i.1.creatium.io/70/35/fe/bfa0e4e619da97ada5046b2b93bb0a9568/4a39d012a1efe822373063f5050899b4.png"
            alt="svg"
          />
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
