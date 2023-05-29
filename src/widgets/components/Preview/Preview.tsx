import { FC } from "react";
import styles from "./Preview.module.scss";
import { Button, Text } from "../../../shared";
import { TbMessageCircle2Filled } from "react-icons/tb";
import { useStore } from "../../store/nav.store";

export const Preview: FC = (): JSX.Element => {
  const { setIsActive } = useStore();

  return (
    <div className={styles.preview}>
      <img className={styles.img_preview} src="/preview.webp" alt="preview" />
      <div className={styles.bg}></div>

      <Text type="h1" color="#fff">
        NAIMAN RESIDENCE <br />
        АПАРТАМЕНТЫ В СОЧИ
      </Text>
      <Text color="#fff" type="h3" mt="3rem">
        Продажа премиальных сервисных апартаментов в Сочи для отдыха и
        пассивного дохода
      </Text>
      <div className={styles.btn}>
        <Button type="primary" onClick={setIsActive}>
          <TbMessageCircle2Filled />
          <Text fw="500">Получить информацию на WhatsApp</Text>
        </Button>
      </div>
    </div>
  );
};
