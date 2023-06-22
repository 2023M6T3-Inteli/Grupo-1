
import NavBar from "../../components/NavBar/NavBar"
import "./style.css"
import FaqCard from "../../components/FaqCards";
import TopBar from "../../components/TopBar/TopBar";
import Search from "../../components/Search/Search";

export default function FaqPage() {
    return (
      <div className="body">
        <TopBar title={"FAQ"} ></TopBar>
        <div className="componentFaq">
          <Search />
          <FaqCard
            question={"What is the purpose of Dell Genius?"}
            answer={
              "Dell Genius is designed as a collaborative platform for employees to create, share, and communicate ideas, projects, and posts with their colleagues."
            }
          />
          <FaqCard
            question={"How do I create a new project on the website?"}
            answer={
              "Navigate to the 'Projects' section from the dashboard. Fill in the necessary details such as the project title, description, and roles, then click on 'Submit'."
            }
          />
          <FaqCard
            question={"How do I post on the website?"}
            answer={
              "To make a post, go to the 'Community' section, write your post, add relevant tags, link the content you want to share, and then click on 'Publish'."
            }
          />
          <FaqCard
            question={"How can I collaborate with my colleagues on a project?"}
            answer={
              "You have the option to express interest in a project that appeals to you. The project leader is responsible for member selection and will inform you regarding your approval status."
            }
          />
        </div>
        <div className="navBar">
          <NavBar />
        </div>
      </div>
    );
}