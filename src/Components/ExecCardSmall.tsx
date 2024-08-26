

interface Props{
    imgURL: string,
    name: string,
    subname: string,
    desc: string,
}

function ExecCardSmall({imgURL, name, subname, desc}: Props){
    return (<>
    <div className="small-card">
      <button className="mail">
        <svg
          className="lucide lucide-mail"
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 24 24"
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect rx="2" y="4" x="2" height="16" width="20"></rect>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
        </svg>
      </button>
      <div className="profile-pic">
        <img src={imgURL} />
      </div>
      <div className="bottom">
        <div className="content">
          <span className="name ">{name}<br/>{subname}</span>
          <span className="about-me show-hover">
            {desc}
          </span>
        </div>
        <div className="bottom-bottom">
          <div className="social-links-container"></div>
        </div>
      </div>
    </div>

    </>)
}

export default ExecCardSmall;