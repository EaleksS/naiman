import { FC, useRef, useState } from "react";
import styles from "./Book.module.scss";
import { Button, Input, Text } from "../../../shared";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

export const Book: FC = (): JSX.Element => {
  const [valueTel, setValueTel] = useState<string>("9");
  const [valueName, setValueName] = useState<string>("");

  const [captcha, setCaptcha] = useState<string | null>(null);

  const navigate = useNavigate();

  const form = useRef<any>(null);

  const handleClick = () => {
    if (typeof captcha !== "string") return;

    if (!valueTel) return;

    if (valueTel.length < 9) return;

    if (valueTel.includes("_")) return;

    emailjs
      .sendForm(
        "service_uolwggt",
        "template_yjrfoju",
        form.current,
        "mKOADVKQy493uyxFV"
      )
      .then(
        () => {
          navigate("/thankyou");
        },
        (error) => {
          alert(`Ошибка:"${error}", попробуйте позже`);
        }
      );
  };

  return (
    <div className={styles.book} id="contacts">
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
          <form ref={form} onSubmit={(e) => e.preventDefault()}>
            <Text type="h4">Забронировать апартамент сейчас</Text>
            <div className={styles.inputs}>
              <Input
                placholder="Имя"
                value={valueName}
                setValue={setValueName}
              />
              <Input
                type="tel"
                placholder="Номер телефона *"
                value={valueTel}
                setValue={setValueTel}
              />
            </div>
            <div className={styles.captcha}>
              <ReCAPTCHA
                sitekey="6LcRaPolAAAAANy9LLcMs7-1A2RHHFM32KMPI7fc"
                onChange={(value) => setCaptcha(value)}
              />
            </div>
            <Button
              mt="1rem"
              isActive={
                typeof captcha === "string" &&
                valueTel &&
                valueTel.length > 9 &&
                !valueTel.includes("_")
                  ? true
                  : false
              }
              onClick={handleClick}
            >
              Забронировать апартамент
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
