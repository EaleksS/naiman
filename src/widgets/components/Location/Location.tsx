import { FC } from "react";
import styles from "./Location.module.scss";
import { Button, Text } from "../../../shared";
import { TbMessageCircle2Filled } from "react-icons/tb";
import { useStore } from "../../store/nav.store";

export const Location: FC = (): JSX.Element => {
  const { setIsActive } = useStore();

  return (
    <div className={styles.location}>
      <Text type="h2" mt="60px" fw="500">
        ЛОКАЦИЯ NAIMAN
      </Text>

      <div className={styles.items}>
        <div className={styles.item}>
          <img
            src="https://i.1.creatium.io/da/8a/87/a493d909be291bfdfd0efbfd241fccda31/2211212.jpg"
            alt="svg"
          />
          <Text type="h4" fw="600">
            Пляж 5 мин
          </Text>
        </div>
        <div className={styles.item}>
          <img
            src="https://i.1.creatium.io/cd/df/14/18e4b97bef5eaba37b7dbf15cbf1a9223e/d60b51fd826b492145bf3e2ee77ddd50.jpg"
            alt="svg"
          />
          <Text type="h4" fw="600">
            Ж/Д вокзал 10 мин
          </Text>
        </div>
        <div className={styles.item}>
          <img
            src="https://i.1.creatium.io/dc/34/62/8ad2f1b4bf186169d1a4a6e294012cab3a/mg_6418.jpg"
            alt="svg"
          />
          <Text type="h4" fw="600">
            Центр Сочи 10 мин
          </Text>
        </div>
        <div className={styles.item}>
          <img
            src="https://i.1.creatium.io/75/49/e2/2387d82b64b9309126f16f439e4ef1824b/aeroport_sochi_taximus_arenda_minivena_s_voditelem_v_moskve_.jpg"
            alt="svg"
          />
          <Text type="h4" fw="600">
            Аэропорт 19 мин
          </Text>
        </div>
        <div className={styles.item}>
          <img
            src="https://i.1.creatium.io/ec/2f/ee/99ff5601dcf26524e009ab4f48be63fee4/1638587632_70_krot_info_p_sochi_adler_olimpiiskii_park_krasi.jpg"
            alt="svg"
          />
          <Text type="h4" fw="600">
            Олимпийский парк 30 мин
          </Text>
        </div>
        <div className={styles.item}>
          <img
            src="https://i.1.creatium.io/d5/df/3b/0b6513311157239f77b30873fb3586161c/depositphotos_33093235_xl_2015.jpg"
            alt="svg"
          />
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
