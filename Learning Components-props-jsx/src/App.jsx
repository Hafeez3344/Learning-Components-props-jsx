import UserCard from "./components/UserCard";
import "./App.css";
import img1 from './assets/img1.jpeg'
import img2 from './assets/img2.jpeg'
import img3 from './assets/img3.jpg'

function App() {
  return (
    <div className="container">
      <UserCard name="Hafeez" desc="web dev" image={img1} style={{"border-radius":"10px"}}/>
      <UserCard name="khan" desc="frontend" image={img2}/>
      <UserCard name="alex" desc="UI.ux" image={img3}/>
    </div>
  );
}

export default App;
