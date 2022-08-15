import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import constants from "constants/constants";

export default function Home() {
  const title = "Challenge " + constants.year
  return (
    <div className="container">
      <Head>
        <title>Challenge {constants.year}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title={title} />
      </main>

      <Footer />
    </div>
  );
}
