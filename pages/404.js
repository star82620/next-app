import Image from "next/image";
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function PageNotFound() {
  // const router = useRouter();
  // useEffect(() => {
  //   setTimeout(() => {
  //     router.push("/");
  //   }, 3000);
  // }, []);

  return (
    <>
      <Head>
        <title>QQQ~~~oh no~~~QQQ</title>
      </Head>
      <div>
        <h1>404</h1>
        QQ
        <Image
          src="https://picsum.photos/600/350?random=10"
          width={200}
          height="300"
          alt="next"
        />
      </div>
    </>
  );
}
