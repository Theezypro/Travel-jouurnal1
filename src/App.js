import "./App.css";
import Navbar from "./Navbar";
import Main from "./Main";
import data from "./data";

function App() {
  const journals = data.map((item) => {
    return <Main {...item} />;
  });

  return (
    <div>
      <Navbar />
      {journals}
    </div>
  );
}

export default App;
