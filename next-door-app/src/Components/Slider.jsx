import React from "react";
import "../Css/slide.css";
// const colors = ["https://img4.nbstatic.in/tr:w-2800/63b3af1e22b317000c1336a8.jpg", "https://img4.nbstatic.in/tr:w-2800/63c4f59222b317000b619c56.jpg", "https://img4.nbstatic.in/tr:w-2800/63c90b038db992000bee9614.jpg","https://img4.nbstatic.in/tr:w-2800/63b3af1e22b317000c1336a8.jpg"];
const delay = 2500;

export default function Slideshow({pram}) {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === pram.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {pram.map((item,index) => (
          <div
            className="slide"
            key={index}
            // style={{ backgroundColor }}
          >
            <img src={item}/>
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {pram.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}