import type { NextPage } from "next";
import { Layout } from "../layout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="scroll"></div>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </footer>
    </Layout>
  );
};

export default Home;
