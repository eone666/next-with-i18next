import Head from "next/head";
import styles from "../styles/Home.module.css";
import { withTranslation, i18n } from "../i18n";

const Home = ({ t }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <button onClick={() => i18n.changeLanguage("ru")}>RU</button>
        <button onClick={() => i18n.changeLanguage("en")}>EN</button>
        <h1 className={styles.title}>
          {t("common:welcome_to")} <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          {t("common:get_started_by_editing")}{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>{t("common:documentation")} &rarr;</h3>
            <p>{t("common:documentation_desc")}</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>{t("common:learn")} &rarr;</h3>
            <p>{t("common:learn_desc")}</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>{t("common:examples")} &rarr;</h3>
            <p>{t("common:examples_desc")}</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>{t("common:deploy")} &rarr;</h3>
            <p>{t("common:deploy_desc")}</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("common:powered_by")}{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
};

Home.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default withTranslation()(Home);
