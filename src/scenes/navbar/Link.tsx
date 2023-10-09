import { SelectedPage } from "@/shared/type";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
    title:string;
    page:string;
    selectedPage:SelectedPage;
    setSelectedPage: (value:SelectedPage) => void;
}
const Link = ({title,page,selectedPage,setSelectedPage}: Props) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

    return(
     <AnchorLink onClick={()=> setSelectedPage(lowerCasePage)} href={`#${lowerCasePage}`}className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}transition duration-500 hover:text-primary-300`} >
       {title}
     </AnchorLink>
    )
}

export { Link };