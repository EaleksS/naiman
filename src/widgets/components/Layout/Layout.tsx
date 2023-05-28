import { FC, ReactNode, useRef, useState } from "react";
import styles from "./Layout.module.scss";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Modal } from "../../../entities";
import { Button, Input, Text } from "../../../shared";
import ReCAPTCHA from "react-google-recaptcha";
import { TbMessageCircle2Filled } from "react-icons/tb";
import { useStore } from "../../store/nav.store";
import { AiFillCloseCircle } from "react-icons/ai";

interface Props {
  children: ReactNode;
}

export const Layout: FC<Props> = ({ children }): JSX.Element => {
  const { setIsActive, isActive } = useStore();

  const [captcha, setCaptcha] = useState<string | null>(null);
  const [value, setValue] = useState<string>("");

  console.log(captcha);

  const form = useRef<any>(null);

  // const handleClick = () => {
  //   if (typeof captcha !== "string") return;

  //   if (!value && value.includes("_")) return;
  // };

  return (
    <div className={styles.wrapper} id="wrapper">
      <Header />
      {children}
      <Footer />
      <Modal isActive={isActive} setIsActive={setIsActive}>
        <div className={styles.container}>
          <div className={styles.close} onClick={() => setIsActive(false)}>
            <AiFillCloseCircle />
          </div>
          <Text type="h3" color="#fff" fw="900">
            Оставьте заявку на получение планировок, фотографий и
            спецпредложений в
            <br />
            NAIMABN
          </Text>
          <Text color="#fff" mt=".5rem">
            Напишите Ваш номер телефона, к которому <br /> привязан WhatsApp
          </Text>
          <form ref={form} onSubmit={(e) => e.preventDefault()}>
            <Text type="h5">НОМЕР ТЕЛЕФОНА C WHATSAPP</Text>
            <Input type="tel" value={value} setValue={setValue} />
            <div className={styles.captcha}>
              <ReCAPTCHA
                sitekey="6LcRaPolAAAAANy9LLcMs7-1A2RHHFM32KMPI7fc"
                onChange={(value) => setCaptcha(value)}
              />
            </div>
            {/* <button
              className={`${
                typeof captcha === "string" &&
                value &&
                !value.includes("_") &&
                styles.active
              }`}
              onClick={handleClick}
              value="Send"
            ></button> */}

            <Button>
              <TbMessageCircle2Filled /> Отправить на WhatsApp
            </Button>
          </form>
        </div>
      </Modal>
    </div>
  );
};
