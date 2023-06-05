import "./ManageApply.css"

import ApplyRequest from "../../components/ApplyRequest/ApplyRequest"
import x from "../../assets/x.svg"


function ManageApply(props){
    return(
       <>
            <div className="backgroundApply">
                <div className="applyModal">
                    <div className="modalTitle">
                        <label>Applications</label>
                        <img 
                        onClick={()=>props.onCloseManageModal()}
                        src={x}></img>
                    </div>
                    <hr></hr>
                    <div className="modalContent">
                        <ApplyRequest/>
                        <ApplyRequest/>
                    </div>
                </div>
                
            </div>
       </>
    )
}

export default ManageApply