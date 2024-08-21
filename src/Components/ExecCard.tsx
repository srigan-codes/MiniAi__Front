import Socials from "./Socials";

interface Props{
    imgURL: string,
    name: string,
    subname: string,
    desc: string,
}
function ExecCard({imgURL, name, subname, desc}: Props){
    return(
    <>
      <div className="contact__container">
        <div className="contact__card">
          <div className="contact__image__col">
            <div className="contact__image__content">
              <div className="contact__image">
                <img src={imgURL}/>
              </div>
              <div className="contact__label"></div>
            </div>
          </div>
          <div className="contact__text__col">
            <div className="contact__name">
              <h1>{name}</h1>
              <h1>{subname}</h1>
            </div>
            <div className="contact__text">
              <p>
                {desc}
              </p>
              <div className="card__foot">
                <div className="body__button">
                  <div className="body__button__bg">
                    <button type="button" onClick={() => {}}>More Info</button>
                  </div>
                </div>
                <Socials/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>)
}

export default ExecCard;