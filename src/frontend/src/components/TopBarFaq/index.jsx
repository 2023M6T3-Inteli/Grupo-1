import "./style.css"
import faq from "../../assets/faq.svg"
export default function TopBarFaq() {
    return (
        <div className="TopBarFaq">
            <p className="Faq">FAQ</p>
           
            <p className="TextFaq">Frequently asked questions</p>
         
            <img className="faq" src={faq} alt="faq" />
        </div>
    )
}