import "./style.css";
import silverTrophy from "../../assets/award-trophy 2.svg";
import goldTrophy from "../../assets/award-trophy 3.svg";
import bronzeTrophy from "../../assets/award-trophy 4.svg";
import { useId, useState } from "react";
import React, { useEffect } from "react";
import axios from "../../../api";

export default function Ranking() {
  const [dados, setDados] = useState(null);
  const [user, setDadosUser] = useState(null);

  useEffect(() => {
    axios.get("/getRank")
      .then((response) => {
        // Armazena os dados da resposta no estado
        console.log(response.data);
        setDados(response.data);
      })
      .catch((error) => {
        // console.error(error);
      });

    const userId = JSON.parse(sessionStorage.getItem("user"));

    console.log(userId.user.id);
    axios
      .get(`/getRankUser/${userId.user.id}`)
      .then((response) => {
        // Armazena os dados da resposta no estado
        console.log(response.data);
        setDadosUser(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    console.log(user);
  }, []);

  if (dados === null) {
    return <div>Loading...</div>;
  }
  return (
    <div className="ranking-content">
      <div className="ranking">
        <div className="rankingTable">
          <div className="rankingLine">
            <div className="trophyDiv">
              <img 
                className="goldTrophy"
                src={goldTrophy} 
                alt="goldTrophy"
              ></img>
            </div>
            
            <div className="postionRankng">{dados[0].fullName}</div>
            <div className="dell-points"> {dados[0].rankPoints} xp</div>
          </div>
          <div className="rankingLine">
            <div className="trophyDiv">
              <img
                className="silverTrophy"
                src={silverTrophy} 
                alt="silverTrophy"
              ></img>
            </div>
            
            <div className="postionRankng">{dados[1].fullName}</div>
            <div className="dell-points">{dados[1].rankPoints} xp</div>
          </div>
          <div className="rankingLine">
            <div className="trophyDiv">
              <img 
                className="bronzeTrophy"
                src={bronzeTrophy} 
                alt="bronzeTrophy"
                ></img>
            </div>
            
            <div className="postionRankng">{dados[2].fullName}</div>
            <div className="dell-points">{dados[2].rankPoints} xp</div>
          </div>
          <div className="ellipsis">
            <div>...</div>
          </div>
          <div className="user">
            <p className="you">You</p>
            <div>{user.fullName}</div>
            <div className="dell-points">{user.rankPoints} xp</div>
          </div>
        </div>
      </div>
    </div>
  );
}
