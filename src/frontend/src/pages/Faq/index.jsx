
import NavBar from "../../components/NavBar/NavBar"
import "./style.css"
import FaqCard from "../../components/FaqCards";
import TopBarFaq from "../../components/TopBarFaq";
import Search from "../../components/Search/Search";

export default function FaqPage() {
    return (
      <div className="body">
        <TopBarFaq />
        <div className="componentFaq">
          <Search/>  
          <FaqCard />
          <FaqCard />
          <FaqCard />
        </div>
        <div className="navBar">
          <NavBar />
        </div>
      </div>
    );
}