import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

import { HeadMeta } from "@/components/headMeta/headMeta";
import { getLayout } from "@/components/layouts/Layouts";

const inter = Inter({ subsets: ["latin"] });

 function Home() {
  const logoutHandler=()=>{
    alert('Logout')
  }
  return (
    <div>
      <h1>Main Page from lexter!!</h1>
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
}
Home.getLayout=getLayout
export default Home;
