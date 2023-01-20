import TopBar from "../Components/TopBar";
import MidNav from "../Components/Midnav";
import TopSec from "../Components/Details";
import Footer from "../Components/Footer";
export default function Mainpage(){
    return(
        <div>
        <TopSec />
        <MidNav/>
        <TopBar/>
        <Footer/>
        </div>
    )
}