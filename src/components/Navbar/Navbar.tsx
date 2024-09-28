import { AnchorHTMLAttributes } from "react"

const Navbar = ()=>{
    return(
        <nav>
            <></>
        </nav>
    )
}

const Navlink = ({href}:
    {
    href:AnchorHTMLAttributes<HTMLAnchorElement>["href"]
})=>{
    return (
        <a href={href}></a>
    )
}