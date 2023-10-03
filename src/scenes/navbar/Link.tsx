import { SelectedPage } from "@/shared/type";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
    page:string;
    selectedPage:SelectedPage;
    setSelectedPage: (value:SelectedPage) => void;
}
const Link = ({page,selectedPage,setSelectedPage}: Props) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

    return(
     <AnchorLink onClick={()=> setSelectedPage(lowerCasePage)} href={`#${lowerCasePage}`}className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}transition duration-500 hover:text-primary-300`} >
        {page}
     </AnchorLink>
    )
}

export { Link };