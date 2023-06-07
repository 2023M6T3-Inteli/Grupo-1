import NavBar from '../../components/NavBar/NavBar';
import TopBar from '../../components/TopBar/TopBar';
import Tags from '../../components/Tags/Tags'
import './profile.css';
import Picture from '../../assets/Picture.jsx'
import {useState} from "react"


function Profile() {

  //const [loading, setLoading] = useState(true);
  const userData = JSON.parse(sessionStorage.getItem("user"));
  const[userExp,setUserExp]=useState([])

  function showUserSkills(){
    setUserExp(userData.user.projects)
  }

  return (
  <>
  <div className='bodyP'>
  <TopBar title={'Profile'}></TopBar>
  
    <div className='FirstContainer'>

      <div className='Picture'>
      <Picture></Picture>
      </div>

      <div className='Name'>
        <p>{userData.user.fullName}</p>
        <div className='Occupation'>
        <p>{userData.user.job}</p>
      </div>
       

      </div>

      <div className='ButtonsP'>
        <button className='DellCurriculum'>Dell Curriculum</button>
        <button className='Teams'>Teams</button>
      </div>

    </div>

    <div className='SecondContainer'>
        <div className='TextAbout'>
        <div className='TextExperience'>
        <p>Experience</p>
        </div>
        <div className='TextExperience2'>
        <h1>{userData.user.rankPoints} xp</h1>
        </div>
        </div>
    </div>

    <div className='ThirdContainer'>
      <div className='TextSkils'>
      <p>Skils</p>
      </div>
      {/* <div className='Skils'>
        <div className='NameSkils'>
        <p>Web development</p>
        </div>
      </div> */}
      {userExp.map(item=>(
        <Tags  description={item.skill}></Tags>
      ))}
    </div>

    <div className='FourContainer'>
      <div className='TextProjects'>
      <p>Subscribed Projects</p>
      </div>
      <div className='Projects'>
        <div className='NameProject'>
        <p>Web development</p>
        </div>
      </div>
    </div>

    
  </div>
  <NavBar></NavBar>
  </>
    
  );
};

export default Profile;