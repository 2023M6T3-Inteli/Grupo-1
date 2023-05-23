import Ranking from "../../components/Ranking/index";
import TopBar from "../../components/TopBar/TopBar";
import NavBar from "../../components/NavBar/NavBar"
import "./style.css"
import silverTrophy from "../../assets/award-trophy 2.svg"
import goldTrophy from "../../assets/award-trophy 3.svg"
import bronzeTrophy from "../../assets/award-trophy 4.svg"

export default function RankingPage() {
    return (
        <div className="body">
            <TopBar title={"Ranking"}></TopBar>
            <div className="blueRow">
                <div className="trophyContainer">
                    <div className="divSilverTrophy">
                        <img className="itemSilverTrophy" src={silverTrophy} alt="silverTrophy"></img>
                    </div>
                </div>
                <div className="trophyContainer">
                    <div className="divGoldTrophy">
                        <img className="itemGoldTrophy" src={goldTrophy} alt="goldTrophy"></img>
                    </div>
                </div>
                <div className="trophyContainer">
                    <div className="divBronzeTrophy">
                        <img className="itemBronzeTrophy" src={bronzeTrophy} alt="bronzeTrophy"></img>
                    </div>
                </div>
            </div>
            <div className="componentRanking">
                <Ranking />
            </div>
            <NavBar/>
        </div>
    );
}