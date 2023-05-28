import { FC, useRef, useState } from "react";
import styles from "./Zayavka.module.scss";
import { Modal } from "../../../entities";
import { useStore } from "../../store/nav.store";
import { AiFillCloseCircle } from "react-icons/ai";
import { Input, Text, Button } from "../../../shared";
import ReCAPTCHA from "react-google-recaptcha";
import { TbMessageCircle2Filled } from "react-icons/tb";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

export const Zayavka: FC = (): JSX.Element => {
  const { setIsActive, isActive } = useStore();

  const [captcha, setCaptcha] = useState<string | null>(null);
  const [value, setValue] = useState<string>("9");

  const navigate = useNavigate();

  const form = useRef<any>(null);

  const handleClick = () => {
    if (typeof captcha !== "string") return;

    if (!value) return;

    if (value.length < 9) return;

    if (value.includes("_")) return;

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
          setIsActive(false);
        },
        (error) => {
          alert(`Ошибка:"${error}", попробуйте позже`);
        }
      );
  };

  return (
    <Modal isActive={isActive} setIsActive={setIsActive}>
      <div className={styles.container}>
        <div className={styles.close} onClick={() => setIsActive(false)}>
          <AiFillCloseCircle />
        </div>
        <Text type="h3" color="#fff" fw="900">
          Оставьте заявку на получение планировок, фотографий и спецпредложений
          в
          <br />
          NAIMAN
        </Text>
        <Text color="#fff" mt=".5rem">
          Напишите Ваш номер телефона, к которому <br /> привязан WhatsApp
        </Text>
        <form ref={form} onSubmit={(e) => e.preventDefault()}>
          <Text type="h5">НОМЕР ТЕЛЕФОНА C WHATSAPP</Text>
          <Input type="tel" value={value} setValue={setValue} placholder="" />
          <div className={styles.captcha}>
            <ReCAPTCHA
              sitekey="6LcRaPolAAAAANy9LLcMs7-1A2RHHFM32KMPI7fc"
              onChange={(value) => setCaptcha(value)}
            />
          </div>
          <Button
            isActive={
              typeof captcha === "string" && value && !value.includes("_")
                ? true
                : false
            }
            onClick={handleClick}
          >
            <TbMessageCircle2Filled /> Отправить на WhatsApp
          </Button>
        </form>
      </div>
    </Modal>
  );
};
