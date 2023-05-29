import { FC } from "react";
import styles from "./Gallery.module.scss";
import { Button, Text } from "../../../shared";
import { TbMessageCircle2Filled } from "react-icons/tb";
import { useStore } from "../../store/nav.store";

export const Gallery: FC = (): JSX.Element => {
  const { setIsActive } = useStore();

  return (
    <div className={styles.gallery} id="gallery">
      <Text type="h2" mt="60px" fw="500">
        NAIMAN RESIDENCE
      </Text>

      <div className={styles.items}>
        <img className={styles.item} src="/preview.webp" alt="webp" />
        <img className={styles.item} src="/img/1.webp" alt="gif" />
        <img className={styles.item} src="/img/2.webp" alt="gif" />
        <img className={styles.item} src="/img/3.webp" alt="gif" />
        <img className={styles.item} src="/img/4.webp" alt="gif" />
        <img className={styles.item} src="/img/5.webp" alt="gif" />
        <img className={styles.item} src="/img/6.webp" alt="gif" />
        <img className={styles.item} src="/img/7.webp" alt="gif" />
        <img className={styles.item} src="/img/8.webp" alt="gif" />
      </div>

      <div className={styles.btn}>
        <Button type="primary" onClick={setIsActive}>
          <TbMessageCircle2Filled />
          <Text fw="500">Получить больше фото на WhatsApp</Text>
        </Button>
      </div>

      <div className={styles.img}>
        <img className={styles.img_preview} src="/img/9.webp" alt="preview" />
        <div className={styles.bg}></div>

        <Text type="h2" color="#fff">
          Ваши апартаменты будут приносить вам доход <br /> во все времена года
        </Text>

        <div className={styles.btn}>
          <Button type="primary" onClick={setIsActive}>
            <TbMessageCircle2Filled />
            <Text fw="500">Получить инвестиционные расчеты на WhatsApp</Text>
          </Button>
        </div>
      </div>
    </div>
  );
};
