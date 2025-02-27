import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";

const Header = () => {
  return(
    // border location border color border padding
    //md medium sized screens
    <div className="border-b-2 border-b-blue-500 py-6">
        <div className="container mx-auto flex justify-between items-center">
            <Link 
            to="/" 
            className="text 3x1 font-bold tracking-tight text-blue-500">
            MERNFood
            </Link>
            <div className="md:hidden">
                <MobileNav />
            </div>
            <div className="hidden md:block">
                <MainNav />
            </div>
        </div>
    </div>
  )
}


export default Header;