import "./index.css";

const LearnACCA = () => {
  return (
    <div className="learn-in-acca-container">
      <h1 className="ACCA-Heading"> What will you Learn in ACCA? </h1>
      <div className="Learning-sections">
        <div className="each-section">
          <p className="learning-title"> Knowledge Level </p>
          <ul className="learnings">
            <li> Business and Technology </li>
            <li> Management Training </li>
            <li> Financial Accounting </li>
          </ul>
          <p className="learning-papers"> 3 papers </p>
        </div>
        <div className="each-section">
          <p className="learning-title"> Skill Level </p>

          <ul className="learnings">
            <li> HTML </li>
            <li> Javascript </li>
            <li> React </li>
            <li> Node JS </li>
          </ul>

          <p className="learning-papers"> 6 papers </p>
        </div>
        <div className="each-section">
          <p className="learning-title"> Professional Level </p>
          <ul className="learnings">
            <li> Business and Technology </li>
            <li> Management Training </li>
            <li> Financial Accounting </li>
          </ul>
          <p className="learning-papers"> 4 papers </p>
        </div>
      </div>
    </div>
  );
};

export default LearnACCA;
