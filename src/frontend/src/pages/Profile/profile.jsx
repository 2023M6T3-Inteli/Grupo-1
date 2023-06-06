import NavBar from '../../components/NavBar/NavBar';
import TopBar from '../../components/TopBar/TopBar';
import './profile.css';
import Picture from '../../assets/Picture.jsx'


function Profile() {

  return (
  <>
  <div className='bodyP'>
  <TopBar title={'Profile'}></TopBar>
  
    <div className='FirstContainer'>

      <div className='Picture'>
      <Picture></Picture>
      </div>

      <div className='Name'>
        <p>Ana Clara</p>
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
        <div className='TextAbout'>
        <div className='TextExperience'>
        <p>Experience</p>
        </div>
        <div className='TextExperience2'>
        <h1>30px</h1>
        </div>
        </div>
    </div>

    <div className='ThirdContainer'>
      <div className='TextSkils'>
      <p>Skils</p>
      </div>
      <div className='Skils'>
        <div className='NameSkils'>
        <p>Web development</p>
        </div>
      </div>
    </div>

    <div className='FourContainer'>
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