import { NextPage } from "next";
import { PropsWithChildren, ReactElement } from "react";
import Navbar from "../navbar/Navbar";
import { HeadMeta } from "../headMeta/headMeta";

export const Layouts:NextPage<PropsWithChildren>=(props)=>{
    const {children}=props
    return(
        <div>
            <HeadMeta title={"Main"} />
            <Navbar/>
            {children}
        </div>
    )
}
export const getLayout=(page:ReactElement)=>{
    return(<Layouts>{page}</Layouts>)
}