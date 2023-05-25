// eslint-disable-next-line no-unused-vars
import {OwnerOptions} from '../../components/OwnerOptions/OwnerOptions.jsx';
import { DeleteProject } from '../../components/DeleteProject/DeleteProject';

function AuxPage(){
    return(
        <div>
            <OwnerOptions/>
            <br></br>
            <DeleteProject/>
            <br></br>
        </div>
    )
}
export default AuxPage;