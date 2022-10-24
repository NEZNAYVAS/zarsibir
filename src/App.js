import "./App.css";
import HeaderTop from "./components/Header";
import HeaderBanner from "./components/HeaderBanner";
import Company from "./components/Company";
import Offers from "./components/Offers";
import Cont from "./components/Scene";
import Card from "./components/Card";
import Conts from "./components/Cont1";
import Cont1 from "./components/Cont2";
import Cont3 from "./components/Cont3";
import Cont4 from "./components/Cont4";
import Contakt from "./components/Contakt";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <div className="app">
        <HeaderTop />
        <HeaderBanner />
        <Company />
        <Offers />
        <Cont />
        <Card />
        <Conts />
        <Cont1 />
        <Cont3 />
        <Cont4 />
        <Contakt />
        <Footer />
      </div>

      <div className="app-2">
      <Main/>
      </div>
    </div>
  );
}

export default App;
