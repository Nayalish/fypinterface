import PopulardesignData from "./PopulardesignData";
import "./PopulardesignStyles.css";
import img5 from "../assets/ds1.jpg";
import img6 from "../assets/ds2.jpg";
import img7 from "../assets/ds3.jpg";
import img8 from "../assets/ds4.jpg";

const Populardesign = () => {
  return (
    <div className="populardesign_container">
      <h1>popular Design</h1>
      <p>Here are some of our Populer Design</p>

      {/* making first Popular design interface */}
      <PopulardesignData
      classname="first-des"
      heading="Cloth Go Design"
      text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam maxime fugiat repellendus temporibus doloremque. Optio, illo velit modi quis maxime quidem ipsum atque odit corporis sunt voluptatem fugit veritatis temporibus ratione quibusdam commodi nisi necessitatibus voluptatum ea quas consectetur similique excepturi. Maiores atque accusantium, blanditiis magni commodi architecto porro, numquam recusandae impedit praesentium, qui labore!"
      img1={img5}
      img2={img6}/>


      {/* making second popular design interface */}
      <PopulardesignData
      classname="first-des-reverse"
      heading="Clothing line Design"
      text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam maxime fugiat repellendus temporibus doloremque. Optio, illo velit modi quis maxime quidem ipsum atque odit corporis sunt voluptatem fugit veritatis temporibus ratione quibusdam commodi nisi necessitatibus voluptatum ea quas consectetur similique excepturi. Maiores atque accusantium, blanditiis magni commodi architecto porro, numquam recusandae impedit praesentium, qui labore!"
      img1 = {img7}
      img2={img8}
      />
      
    </div>
  );
};

export default Populardesign;
