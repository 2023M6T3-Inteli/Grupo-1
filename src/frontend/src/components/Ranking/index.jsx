import "./style.css";
import silverTrophy from "../../assets/award-trophy 2.svg";
import goldTrophy from "../../assets/award-trophy 3.svg";
import bronzeTrophy from "../../assets/award-trophy 4.svg";
import { useId, useState } from "react";
import DocPost from "../DocPost/DocPost";
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
    <div>
      <div className="ranking">
        <div className="rankingTable">
          <div className="rankingLine">
            <img src={goldTrophy} alt="goldTrophy"></img>
            <div>{dados[0].fullName}</div>
            <div className="dell-points"> {dados[0].rankPoints} xp</div>
          </div>
          <div className="rankingLine1">
            <img
              className="itemSilverTrophy"
              src={silverTrophy}
              alt="silverTrophy"
            ></img>
            <div>{dados[1].fullName}</div>
            <div className="dell-points">{dados[1].rankPoints} xp</div>
          </div>
          <div className="rankingLine1">
            <img src={bronzeTrophy} alt="bronzeTrophy"></img>
            <div>{dados[2].fullName}</div>
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
