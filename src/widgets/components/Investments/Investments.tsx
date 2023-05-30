import { FC } from "react";
import styles from "./Investments.module.scss";
import { Button, Text } from "../../../shared";
import { useStore } from "../../store/nav.store";
import { TbMessageCircle2Filled } from "react-icons/tb";
export const Investments: FC = (): JSX.Element => {
  const { setIsActive } = useStore();

  return (
    <div className={styles.investments}>
      <img src="/img/16.jpg" alt="img" />
      <Button type="primary" onClick={setIsActive}>
        <TbMessageCircle2Filled />
        <Text fw="500">Получить инвестиционный расчёт на WhatsApp</Text>
      </Button>
    </div>
  );
};
