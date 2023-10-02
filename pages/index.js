import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <div className="text-3xl text-orange-800">hehehe</div>
      {/* <a href="/store-list">Go to StoreList</a> */}
      <Link className="text-blue-500" href="/store-list" target="_blank">
        Go to StoreList
      </Link>
    </div>
  );
}
