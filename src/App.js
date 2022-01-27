import Spotify from "./components/Spotify";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h2>Rechercher un / des album(s)</h2>
      <Spotify></Spotify>
    </div>
  );
}
