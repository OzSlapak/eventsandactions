import { useState } from "react"
import "./App.css"
function Carousel() {
  const data = [
    { name: "M-350", img: "https://hips.hearstapps.com/hmg-prod/images/2020-mercedes-benz-e350-atiyeh-29a-1588702602.jpg?crop=0.712xw:0.534xh;0.0513xw,0.286xh&resize=1200:*" },
    { name: "dodge", img: "https://www.motortrend.com/uploads/2021/11/2022-Dodge-Challenger-TA-5-7-Hemi-9.jpg?fit=around%7C875:492.1875" },
    { name: "crv", img: "https://autoimage.capitalone.com/cms/Auto/assets/images/1129-hero-2021-Honda-CR-V-Hybrid-Touring-White-Front-Quarter-Left.jpg" },
    { name: "f150", img: "https://www.autotrader.com/wp-content/uploads/2021/02/2021-dodge-ram-1500-vs-2021-ford-f-150.jpg" },
    { name: "rav4", img: "https://cdn.jdpower.com/JDPA_2020%20Toyota%20RAV4%20TRD%20Off-Road%20Lunar%20Rock%20Front%20View.jpg" }
  ]
  const [imageIndex, setImageIndex] = useState(0)
  const handleRight = () => {
    if (imageIndex < data.length - 1) {

      setImageIndex(imageIndex + 1)
    } else {
      setImageIndex(0)
    }
  }
  const handleLeft = () => {
    if (imageIndex > 0) {
      setImageIndex(imageIndex - 1)
    } else {
      setImageIndex(data.length - 1)
    }
  }
  return (
    <div className="App">
      <h1>{data[imageIndex].name.toUpperCase()}</h1>
      <img width="100%" height="280px" src={data[imageIndex].img} alt="" />
      <div>
        <button onClick={handleLeft}>left</button>
        <button onClick={handleRight}>right</button>
      </div>
    </div>
  )
}

export default Carousel;
