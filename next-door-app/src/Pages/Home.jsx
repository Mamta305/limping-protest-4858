import TopBar from "../Components/TopBar";
import MidNav from "../Components/Midnav";
import TopSec from "../Components/Details";
import Slideshow from "../Components/Slider";
import Footer from "../Components/Footer";
import Slides from "../Components/card";
import ACard from "../Components/offers";
// import Events from "../Components/Events";
import { Link } from "react-router-dom";
export default function Mainpage(){
    const pram=["https://img4.nbstatic.in/tr:w-2800/637dac5222b317000b774c8b.jpg","https://img4.nbstatic.in/tr:w-2800/636b8e7f22b317000b638322.jpg","https://img4.nbstatic.in/tr:w-2800/637b4c8a22156b000b18f311.jpg"];
    const colors = ["https://img4.nbstatic.in/tr:w-2800/63b3af1e22b317000c1336a8.jpg", "https://img4.nbstatic.in/tr:w-2800/63c4f59222b317000b619c56.jpg", "https://img4.nbstatic.in/tr:w-2800/63c90b038db992000bee9614.jpg"];
    const cards=["https://img4.nbstatic.in/tr:w-350/636b9db122156b000b884685.jpg","https://img4.nbstatic.in/tr:w-350/634cf69222156b000bc6057a.jpg","https://img4.nbstatic.in/tr:w-350/636b9dac22b317000b63874e.jpg","https://img4.nbstatic.in/tr:w-350/60374bd000106d000bde80e6.jpg","https://img4.nbstatic.in/tr:w-350/60014f4ce1ecca000b0330a5.jpg","https://img4.nbstatic.in/tr:w-350/634aa77922156b000bc5fa5e.jpg"];
    const crd=["https://img4.nbstatic.in/tr:w-350/63285c0bc10843000be89e58.jpg","https://img4.nbstatic.in/tr:w-350/63285c1d54f372000bdf5ea4.jpg","https://img4.nbstatic.in/tr:w-350/63285c2fc10843000be89e59.jpg","https://img4.nbstatic.in/tr:w-350/63285c40c10843000be89e5a.jpg"];
    const colors1=["https://img4.nbstatic.in/tr:w-2800/627b4e0db3c621000b5f5e77.jpg","https://img4.nbstatic.in/tr:w-2800/627b4e163b031b000b774d60.jpg","https://img4.nbstatic.in/tr:w-2800/627b4e033b031b000b774d5f.jpg"];
    const property = [{
        imageUrl: 'https://img4.nbstatic.in/tr:w-350/58502be5dc0e82000d1800c6.jpg',
        imageAlt: 'img',
        title: 'Cannought Place',
        price: 'Rs.90',
        offers: "25",
      },{imageUrl: 'https://img4.nbstatic.in/tr:w-350/6385d1e822156b000c42f6de.jpg',
      imageAlt:'img',
      title: 'Club Road',
      price: 'Rs.59',
      offers: "10",},
      {imageUrl: 'https://img4.nbstatic.in/tr:w-350/58d3616746e0fb000dc3ad7e.jpg',
      imageAlt: 'img',
      title: 'Aerocity',
      price: 'Rs.599',
      offers: "8",},
      {imageUrl: 'https://img4.nbstatic.in/tr:w-350/584ffd09c9e77c000d174e6f.jpg',
      imageAlt: 'img',
      title: 'Hauz Khas Village',
      price: 'Rs.80',
      offers: "8", },
      {imageUrl: 'https://img4.nbstatic.in/tr:w-350/6385c23a22b317000b621160.jpg',
      imageAlt: 'img',
      title: 'Maharaja Surajmal Road',
      price: 'Rs.299',
      offers: "5", }
  ];
  const bite = [{
    imageUrl: 'https://img4.nbstatic.in/tr:w-350/63bea6188db992000b7a15f1.jpg',
    imageAlt: 'img',
    title: 'Swiggy',
    price: 'GET 9%',
    offers: "INSTANT DISCOUNT",
  },
  {
    imageUrl: 'https://img4.nbstatic.in/tr:w-350/63c7a48822b317000b61a5f0.jpg',
    imageAlt: 'img',
    title: 'Dominos',
    price: 'GET 17.5%',
    offers: "INSTANT DISCOUNT",
  },
  {
    imageUrl: 'https://img4.nbstatic.in/tr:w-350/636ced9622156b000b884ce7.jpg',
    imageAlt: 'img',
    title: 'KFC',
    price: 'GET 8%',
    offers: "INSTANT DISCOUNT",
  },
  {
    imageUrl: 'https://img4.nbstatic.in/tr:w-350/636ced9e22b317000b638d9e.jpg',
    imageAlt: 'img',
    title: 'Pizza Hut',
    price: 'GET 8%',
    offers: "INSTANT DISCOUNT",
  },
  {
    imageUrl: 'https://img4.nbstatic.in/tr:w-350/636cee8422156b000b884cef.jpg',
    imageAlt: 'img',
    title: 'Costa Cofee',
    price: 'GET 9%',
    offers: "INSTANT DISCOUNT",
  },
  {
    imageUrl: 'https://img4.nbstatic.in/tr:w-350/636ced7e22b317000b638d9d.jpg',
    imageAlt: 'img',
    title: 'Cafe Cofee Day',
    price: 'GET 10%',
    offers:"INSTANT DISCOUNT",
  },
];
    return(
        <div>
        <TopSec />
        <MidNav/>
        <TopBar/>
        <Slideshow pram={colors}/>
        <Slideshow pram={pram}/>
        <Slides hd="Top Brands" pram={cards} />
        <Slides hd="Everything On Buffet" pram={crd} />
        <Slideshow pram={colors1}/>
        <ACard hd="Popular Hangouts" proper={property} />
        <ACard hd="Quick Bites" proper={bite} />
        <Footer/>
        </div>
    )
}