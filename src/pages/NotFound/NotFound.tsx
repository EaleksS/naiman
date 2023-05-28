import { FC } from "react";
import { Layout } from "../../widgets";
import styles from "./NotFound.module.scss";
import { Text } from "../../shared";

export const NotFound: FC = (): JSX.Element => {
  return (
    <Layout>
      <div className={styles.not_found}>
        <Text type="h1">404</Text>
        <Text type="h3">
          Что-то пошло не так... Попробуйте перезагрузить страницу.
        </Text>
        <Text>
          Эта ошибка произошла, пока сервер обрабатывал ваш запрос. <br />
          Пожалуйста, свяжитесь с нами, если считаете, что проблема на нашей
          <br /> стороне. Почта поддержки: <>Ваша почта</>
        </Text>
      </div>
    </Layout>
  );
};
