import Header from "./Components/Header";
import ACCAPrep from "./Components/ACCAPrep";
import WhyChooseUS from "./Components/WhyChooseUS";
import Eligibility from "./Components/Eligibility";
import LearnACCA from "./Components/LearnACCA";
import Placements from "./Components/Placements";
import BecomeACCAIn18Months from "./Components/BecomeACCAIn18Months";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <BecomeACCAIn18Months />
      <WhyChooseUS />
      <Eligibility />
      <LearnACCA />
      <Placements />
      <ACCAPrep />
    </>
  );
}

export default App;
