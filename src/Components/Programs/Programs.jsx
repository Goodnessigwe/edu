import "./Programs.css"
import Program_1 from "../../assets/Program_1.jpg";
import Program_2 from "../../assets/Program_2.jpg";
import Program_3 from "../../assets/Program_3.jpg";
import Favicon from "../../assets/Favicon.png";

const Programs = () => {
  return (
    <div className="programs">
    <div className="program">
        <img src={Program_1} alt=""/>
        <div className="caption">
            <img src={Favicon} alt="" />
            <p>Graduation Degree</p>
        </div>
    </div>

    <div className="program">
        <img src={Program_2} alt=""/>
        <div className="caption">
            <img src={Favicon} alt="" />
            <p>Masters Degree</p>
        </div>
    </div>

    <div className="program">
        <img src={Program_3} alt=""/>
        <div className="caption">
            <img src={Favicon}alt="" />
            <p>Post Degree</p>
        </div>
    </div>

    </div>
  )
}

export default Programs