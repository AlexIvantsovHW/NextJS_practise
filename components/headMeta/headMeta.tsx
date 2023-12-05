import Head from "next/head";

type PropsType={
    title:string,
    descreption?:string
}
export const HeadMeta = (props:PropsType) => {
    const {title,descreption}=props
  return (
   <Head>
        <title>{title}</title>
        <meta name="descreption" content={descreption||"Generate description"}/>
        <meta name="viewport" content="width=device-width, initial-scale=1*"/>
        <link rel='icon' href="/favicon.ico"/>
   </Head>
  );
};
