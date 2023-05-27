import { FC } from "react";
import styles from "./Gallery.module.scss";
import { Button, Text } from "../../../shared";
import { TbMessageCircle2Filled } from "react-icons/tb";
import { useStore } from "../../store/nav.store";

export const Gallery: FC = (): JSX.Element => {
  const { setIsActive } = useStore();

  return (
    <div className={styles.gallery}>
      <Text type="h2" mt="60px" fw="500">
        NAIMAN RESIDENCE
      </Text>

      <div className={styles.items}>
        <img className={styles.item} src="/preview.jpg" alt="jpg" />
        <img
          className={styles.item}
          src="https://i.1.creatium.io/67/05/77/dad60af6d8cba7308bfba7bde9df1802b4/438x330q8/c66f2179acb7628f3b5f2c92170e4acb.jpg"
          alt="gif"
        />
        <img
          className={styles.item}
          src="https://i.1.creatium.io/3c/ea/85/b48082988b041855cc82904c1a52075e32/587x330q8/whatsapp_image_2023_05_22_at_19_14_33_1.jpg"
          alt="gif"
        />
        <img
          className={styles.item}
          src="https://i.1.creatium.io/a5/91/6a/057308762c54363f22985da67e8c1d4ce7/441x330q8/234324324324.png"
          alt="gif"
        />
        <img
          className={styles.item}
          src="https://i.1.creatium.io/e9/23/4b/54d7191a246ab8fff1cd8d4358ed7d821c/350x350q8/whatsapp_image_2023_05_22_at_19_14_36_2.jpg"
          alt="gif"
        />
        <img
          className={styles.item}
          src="https://i.1.creatium.io/ec/73/80/a2cc096ac1412cfbd2f9de0e13adc4b599/587x330q8/whatsapp_image_2023_05_22_at_19_14_33_2.jpg"
          alt="gif"
        />
        <img
          className={styles.item}
          src="https://i.1.creatium.io/65/20/7c/7782b11946a00f9e7918ff5b503eac9505/350x350q8/whatsapp_image_2023_05_22_at_19_14_37.jpg"
          alt="gif"
        />
        <img
          className={styles.item}
          src="https://i.1.creatium.io/5d/65/7a/693e0d7c8c2f1fa6af36be6d84d139d64f/442x330q8/4482c7f68e40f5c1b0e503309607130d.jpg"
          alt="gif"
        />
        <img
          className={styles.item}
          src="https://i.1.creatium.io/60/23/0d/0207ad8c841e1c10e2d8e64e1f94e064f8/350x350q8/whatsapp_image_2023_05_22_at_19_14_35_1.jpg"
          alt="gif"
        />
      </div>

      <div className={styles.btn}>
        <Button type="primary" onClick={setIsActive}>
          <TbMessageCircle2Filled />
          <Text fw="500">Получить больше фото на WhatsApp</Text>
        </Button>
      </div>

      <div className={styles.img}>
        <img
          className={styles.img_preview}
          src="https://i.1.creatium.io/ec/73/80/a2cc096ac1412cfbd2f9de0e13adc4b599/1600x900q8/whatsapp_image_2023_05_22_at_19_14_33_2.jpg"
          alt="preview"
        />
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
