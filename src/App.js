import Foods from "./components/Foods";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import Plan from "./components/Plan";
import Rooms from "./components/Rooms";

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Offers />
      <Plan />
      <Rooms />
      <Foods />
      <Footer />
    </div>
  );
}

export default App;
