import { MdElectricBolt } from "react-icons/md";
import "./App.css";
import Card from "./components/Card";
import { FaMemory, FaRegEye } from "react-icons/fa";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

function App() {
  const data = [
    {
      id: 1,
      icon: <MdElectricBolt />,
      // color: "#ffeeee",
      category: "reaction",
      marks: 80,
    },
    {
      id: 2,
      icon: <FaMemory />,
      // color: "#fff7e8",
      category: "memory",
      marks: 92,
    },
    {
      id: 3,
      icon: <IoChatbubbleEllipsesOutline />,
      // color: "#e5f8f3",
      category: "verbal",
      marks: 61,
    },
    {
      id: 4,
      icon: <FaRegEye />,
      // color: "#e7e9fa",
      category: "visual",
      marks: 72,
    },
  ];
  return (
    <div className="main">
      <div className="wrapper">
        <div className="left">
          <h3 className="result">Your Result</h3>
          <div className="marks">
            <span className="score">76</span>
            <span className="outof">of 100</span>
          </div>
          <span className="great">Great</span>
          <p className="conclusion">
            you scored higher than 65% of the people who have taken these tests
          </p>
        </div>
        <div className="right">
          <h4 className="summary">Summary</h4>
          <div className="card-wrapper">
            {data.map((item) => {
              return (
                <Card
                  key={item.id}
                  icon={item.icon}
                  color={item.color}
                  category={item.category}
                  marks={item.marks}
                />
              );
            })}
          </div>
          <button className="btn">Continue</button>
        </div>
      </div>
      <footer className="footer">
        <p>
          Challange by
          <a href="https://www.crio.do/" className="links" target="_blank">
            CrioDo
          </a>
          Coded by
          <a
            href="https://github.com/Pratik-Tulkane14/x-results"
            className="links"
            target="_blank"
          >
            Pratik
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
