
import NavBar from "../../components/NavBar/NavBar"
import "./style.css"
import FaqCard from "../../components/FaqCards";
import TopBar from "../../components/TopBar/TopBar";
import Search from "../../components/Search/Search";

export default function FaqPage() {
    return (
      <div className="body">
        <TopBar title={"FAQ"} subtitle={"Frequently Asked Questions"}></TopBar>
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