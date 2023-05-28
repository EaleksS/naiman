import { FC } from "react";
import styles from "./ThankYou.module.scss";
import { Layout } from "../../widgets";
import { Text } from "../../shared";
import { BsCheckCircle } from "react-icons/bs";

export const ThankYou: FC = (): JSX.Element => {
  return (
    <Layout>
      <div className={styles.thank_you}>
        <BsCheckCircle className={styles.icon} />
        <Text type="h1">Спасибо, заявка отправлена!</Text>
        <Text type="h5">
          Наш эксперт по инвестициям в недвижимость Сочи скоро с вами свяжется.
          <br />
          Всего вам хорошего.
        </Text>
      </div>
    </Layout>
  );
};
