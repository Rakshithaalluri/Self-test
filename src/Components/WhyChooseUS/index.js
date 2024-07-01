import { HiOutlineLightBulb } from "react-icons/hi";
import "./index.css";

const WhyChooseUS = () => {
  return (
    <div className="choose-us-container">
      <h1 className="heading"> Why Choose Us? </h1>
      <div className="sections-container">
        <div className="section">
          <HiOutlineLightBulb size="25" />
          <p className="titles"> Expert Faculty </p>
          <p className="description">
            To be successful as a professor, you should be able to balance
            teaching and research responsibilities.
          </p>
        </div>
        <div className="section">
          <HiOutlineLightBulb size="25" />
          <p className="titles"> Complete Success Package </p>
          <p className="description">
            To be successful as a professor, you should be able to balance
            teaching and research responsibilities.
          </p>
        </div>
        <div className="section">
          <HiOutlineLightBulb size="25" />
          <p className="titles"> Placements </p>
          <p className="description">
            To be successful as a professor, you should be able to balance
            teaching and research responsibilities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUS;
