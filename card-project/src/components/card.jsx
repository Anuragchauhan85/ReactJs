import { Bookmark } from "lucide-react";
import '../styles/card.css'

const Card = (elem) => {
  return (
    <div>
      <div className="card">
        <div>
          <div className="top">
            <img src={elem.logo} alt="" />
            <button>
              Save <Bookmark size={12} />
            </button>
          </div>

          <div className="centre">
            <h3>
              {elem.companyName} <span>{elem.datePosted}</span>
            </h3>
            <h2>{elem.post}</h2>
            <div className="tag">
              <h4>{elem.tag1}</h4>
              <h4>{elem.tag2}</h4>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h3>${elem.payPerHour}/hr</h3>
            <p>{elem.location}</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
    </div>
  );
}

export default Card