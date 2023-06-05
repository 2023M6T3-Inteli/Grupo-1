import NavBar from '../../components/NavBar/NavBar';
import TopBar from '../../components/TopBar/TopBar';
import './profile.css';
import Picture from '../../assets/Picture.jsx'

function Profile() {
  return (
  <>
  <TopBar title={'Profile'}></TopBar>
  <div className='bodyP'>
    <div className='FirstContainer'>

      <div className='Picture'>
      <Picture></Picture>
      </div>

      <div className='Name'>
        <p>Ana Clara</p>
      
      <div className='FullName'>
      <p>Ana Clara</p>
      </div>

      <div className='Occupation'>
      <p>Front-End Developer</p>
      </div>

      <div className='Area'>
      <p>Development</p>
      </div>

      </div>

      <div className='ButtonsP'>
      <button className='DellCurriculum'>Dell Curriculum</button>
      <button className='Teams'>Teams</button>
      </div>

    </div>

    <div className='SecondContainer'>
      <div className='Technologies'>
      <div className='TextTechnologies'>
      <p>Technologies</p>   
      </div>
      </div>
      <div className='Experience'>  
      <div className='TextExperience'>
      <p>Experience</p>
      </div>
      </div> 
    </div>

    <div className='ThirdContainer'>
      <div className='TextProjects'>
      <p>Projects</p>
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
