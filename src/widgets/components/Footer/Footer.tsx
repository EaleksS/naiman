import { FC } from "react";
import styles from "./Footer.module.scss";
import { Button, Text } from "../../../shared";
import { TbMessageCircle2Filled } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useStore } from "../../store/nav.store";
import { Link as Link2 } from "react-scroll";

interface Props {
  btn?: boolean;
}

export const Footer: FC<Props> = ({ btn = false }): JSX.Element => {
  const { setIsActive } = useStore();

  return (
    <footer className={styles.footer} id="footer">
      <Link2 to="wrapper" smooth={true}>
        <div className={styles.logo}>
          <img src="/logo3.svg" alt="logo" />
          <Text type="h4" color="#fff" fw="900">
            NAIMAN
          </Text>
        </div>
      </Link2>
      {btn ? (
        <Button type="primary" onClick={setIsActive}>
          <TbMessageCircle2Filled />
          <Text fw="500">Получить информацию на WhatsApp</Text>
        </Button>
      ) : (
        <div></div>
      )}
      <Text>
        <Link to=".#">Политика конфиденциальности</Link>
      </Text>
    </footer>
  );
};
