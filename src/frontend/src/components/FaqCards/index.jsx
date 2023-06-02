import "./style.css"


export default function FaqCard(props) {
    return (
      <div className="post-item-faq">
        <div className="item-1">
          <div>
            <h3 className="questions">{props.question}</h3>
          </div>
        </div>
        <div className="item-2">
          <p>
            {props.answer}
          </p>
        </div>
        <div className="item-3"></div>
      </div>
    );
}