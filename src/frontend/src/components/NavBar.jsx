import './NavBar.css';
import CarryCase from '../assets/carry-case.svg';
import People from '../assets/user-group.svg';
import Person from '../assets/user-cir.svg';
import Trophy from '../assets/award-trophy.svg';
import Create from '../assets/create-comp.svg';
//import Pagina1 from '../pages/Projects.jsx';

function NavBar(){

  return (
    // <div className='nav-toda'>
            <div className="nav-bar">
                <div className='nav-item'>
                    <img src={CarryCase} alt="carry-case"/>
                    <p>Projects</p>
                </div>
            <div className='nav-item'>
                <img src={People} alt="people"/>
                <p>Community</p>
            </div>
            <div className='nav-item'>
                <img src={Create} alt="create" />
            </div>
            <div className='nav-item'>
                <img src={Trophy} alt="trophy"/>
                <p>Ranking</p>
            </div>
            <div className='nav-item'>
                <img src={Person} alt="person"/>
                <p>Profile</p>
            </div>
        </div>
    // </div>
  );
};

export default NavBar;