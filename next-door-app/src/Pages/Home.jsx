import TopBar from "../Components/TopBar";
import MidNav from "../Components/Midnav";
import TopSec from "../Components/Details";
import Slideshow from "../Components/Slider";
import Footer from "../Components/Footer";

export default function Mainpage(){
    const pram=["https://img4.nbstatic.in/tr:w-2800/637dac5222b317000b774c8b.jpg","https://img4.nbstatic.in/tr:w-2800/636b8e7f22b317000b638322.jpg","https://img4.nbstatic.in/tr:w-2800/637b4c8a22156b000b18f311.jpg"];
    const colors = ["https://img4.nbstatic.in/tr:w-2800/63b3af1e22b317000c1336a8.jpg", "https://img4.nbstatic.in/tr:w-2800/63c4f59222b317000b619c56.jpg", "https://img4.nbstatic.in/tr:w-2800/63c90b038db992000bee9614.jpg"];
    return(
        <div>
        <TopSec />
        <MidNav/>
        <TopBar/>
        <Slideshow pram={colors}/>
        <Slideshow pram={pram}/>
        <Footer/>
        </div>
    )
}