import "../assets/styles/card.css";

const Card = (props) => {
  return (
    <div className="container">
      <div className="card__shell">
        <div className="card__content">
          <div className="main__content">
            <h2 className="card__title">{props.repos.nameRepos}</h2>
            {/* <p className="arhive__text">{item.archive}</p> */}
            <a href="#" className="arhive__text">
              {props.repos.archive}
            </a>
          </div>
          <p className="card__subtitle">{props.repos.comment}</p>
          <div className="text__block">
            <div className="circle"></div>
            <p className="card__text">{props.repos.langProg}</p>
            <p className="card__text">Update on {props.repos.updated}</p>
          </div>
        </div>
      </div>
      );
    </div>
  );
};

export default Card;
