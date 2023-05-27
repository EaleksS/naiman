import { FC } from "react";
import styles from "./Book.module.scss";
import { Button, Input, Text } from "../../../shared";

export const Book: FC = (): JSX.Element => {
  return (
    <div className={styles.book}>
      <img className={styles.img_preview} src="/i2.jpg" alt="preview" />
      <div className={styles.bg}></div>

      <div className={styles.content}>
        <div className={styles.title}>
          <Text color="#fff">NAIMAN RESIDENCE заинтересовал вас?</Text>
          <div className={styles.line}></div>
          <Text type="h2" color="#fff" mt="1rem" fw="700">
            Забронировано 193 <br /> апартамента из 260! <br />
            Успейте забронировать
            <br />
            ваш апартамент!
          </Text>
          <Text color="#fff" mt="2rem" fz="15px">
            <span>
              Застройщик повышает цены после продажи каждого 5 номера!
              <br />
              <br />
              Успейте приобрести апартаменты в NAIMAM RESIDENCE
              <br />
              <br />
              по выгодной для вас цене!
            </span>
          </Text>
        </div>
        <div className={styles.form}>
          <form onSubmit={(e) => e.preventDefault()}>
            <Text type="h4">Забронировать апартамент сейчас</Text>
            <div className={styles.inputs}>
              <Input placholder="Имя" />
              <Input type="tel" placholder="Номер телефона *" />
            </div>
            <Button mt="2rem">Забронировать апартамент</Button>
          </form>
        </div>
      </div>
    </div>
  );
};
