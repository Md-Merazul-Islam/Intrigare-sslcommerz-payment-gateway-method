import "./App.css";
import Home from "./components/Home/Home";
import Blog from "./components/Blogs/Blogs";
import Click from "./components/Click/Click";
import Services from "./components/Services/Services";
function App() {
  return (
    <div>
      <Services name="Repair"></Services>
      <Services name="Call"></Services>
      <Services name="Email"></Services>
      <Services name="Health"></Services>
      {/* <Click></Click>
      <Home></Home>
      <Blog></Blog> */}
    </div>
  );
}

export default App;
