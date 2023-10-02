import imgUrl from "/images/next.svg";
import Image from "next/image";
import Layout from "@/components/Layout";
import Link from "next/link";

// getStaticProps getServerProps


//獲取靜態 props，return 的 props 內容可以直接被使用
//在 server 端運行
export async function getStaticProps() {
  const apiUrl = "https://jsonplaceholder.typicode.com/users/";
  const res = await fetch(apiUrl);
  const data = await res.json();

  return {
    props: { apple: data },
  };
}

function StoreList({ apple }) {
  return (
    <Layout>
      <div>
        StoreList
        <Image src={imgUrl} alt="next.js" />
        <ul>
          {apple.map((item) => (
            <li key={item.id}>
              <Link href={"/store-list/" + item.id}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export default StoreList;
