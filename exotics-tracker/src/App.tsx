import "./App.css";
import { ExoticsList } from "./components/ExoticsList/ExoticsList";
import { exotics } from "./exotics";

// const apiKey = process.env.API_KEY as string;

const App = () => {
  return (
    <div className="App">
      <ExoticsList exotics={exotics} />
    </div>
  );
};

export default App;
