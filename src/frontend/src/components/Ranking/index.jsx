import "./style.css"
import silverTrophy from "../../assets/award-trophy 2.svg"
import goldTrophy from "../../assets/award-trophy 3.svg"
import bronzeTrophy from "../../assets/award-trophy 4.svg"

export default function Ranking() {
    return (
        <div>
            <div className="ranking">
                <div className="rankingTable">
                    <div className="rankingLine">
                        <img src={goldTrophy} alt="goldTrophy"></img>
                        <div>João</div>
                        <div className="dell-points"> 100 xp</div>
                    </div>
                    <div className="rankingLine1">
                        <img clasname="itemSilverTrophy" src={silverTrophy} alt="silverTrophy"></img>
                        <div>Thiago</div>
                        <div className="dell-points">95 xp</div>
                    </div>
                    <div className="rankingLine1">
                        <img src={bronzeTrophy} alt="bronzeTrophy"></img>
                        <div>Vitoria</div>
                        <div className="dell-points">75 xp</div>
                    </div>
                    <div className="ellipsis">
                        <div>...</div>
                    </div>
                    <div className="user">
                        <p className="you">You</p>
                        <div>Seu Nome</div>
                        <div className="dell-points">35 xp</div>
                    </div>
                </div>
            </div>
        </div>
    );
}