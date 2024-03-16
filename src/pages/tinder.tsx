import Head from "next/head";
import NavBar from "~/components/NavBar";

export default function Tinder() {
  return (
    <>
      <Head>
        <title>UniEvent</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-background min-h-svh">
        <NavBar route={1} />
      </div>
    </>
  );
}
