import { Link } from "react-router-dom"
import { useMatch } from "react-router-dom";
import { FC } from 'react';
type text={
    text:string,
    href:string
}
export const CastomLink:FC<text> =({text,href})=>{
   let match = useMatch(href)
    return(
        <Link  style={{
            color:match?"lightskyblue": "black",
            textDecoration: match?"underline":"none"

        }}  to={href}>{text}</Link>
    )
}