import Populardesign from "../components/Populardesign";
import Footer from "../components/Footer";
import Main_section from "../components/Main_section";
import Navbar from "../components/Navbar";
import Recentdesign from "../components/Recentdesign";

function Home() {
  return (
    <>
      <Navbar/>
      <Main_section
      clasname="Main_section"
      // imgurl="https://images.unsplash.com/photo-1462392246754-28dfa2df8e6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80"
      // imgurl="https://lh4.googleusercontent.com/2XoTkGQ8KewmWprNA-OTCuEcLVMrnGAh4Nz817m3ag4kqpKs9TMQBhdNBU9cVuXXShYTYlJmn2-Q_nYaojM1bJ1O5_Og35g9AeH6wMRi2UkePAvHXaBjMGdmuYuC5rP1Nbl-J5Q"
      imgurl="https://codesrevolvewordpress.s3.us-west-2.amazonaws.com/revolveai/2022/10/15105933/ai-in-fashion.jpg"
      // text="Search For Your Design"
      // title="We Make a Design For You"
      url= "/"
      // btnClass="show"
      // buttonText="Travel plan"
      />
      <Populardesign/>
      <Recentdesign/>
      <Footer/>
    </>
  );
}

export default Home;
