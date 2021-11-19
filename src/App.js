import Header from "./components/Header";
import ImageSlider from "./components/ImageSlider";
import Main from "./components/Main";
import { SliderData } from "./components/SliderData";


function App() {
  return (
    <div className="App">
      <Header />
      <ImageSlider slides={SliderData} />
      <Main />
    </div>
  );
}

export default App;
