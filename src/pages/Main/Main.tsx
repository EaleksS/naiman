import { FC } from "react";
import {
  About,
  Advantages,
  Apartments,
  Book,
  Contacts,
  Gallery,
  Investments,
  Layout,
  Location,
  Plans,
  Preview,
} from "../../widgets";
// import styles from "./Main.module.scss";

export const Main: FC = (): JSX.Element => {
  return (
    <Layout btn={true}>
      
      <Preview />
      <About />
      <Gallery />
      <Advantages />
      <Location />
      <Apartments />
      <Plans />
      <Investments />
      <Book />
      <Contacts />

    </Layout>
  );
};
