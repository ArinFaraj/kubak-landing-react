import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App flex items-center justify-center flex-col content-center">
      <h1 className="text-9xl font-bold">Hello World! Wow</h1>
      {/* <img src={logo} alt="Logo" /> */}
      <div
        className="p-6 max-w-sm mx-auto rounded-xl shadow-lg hover:scale-110 hover:shadow-2xl 
      bg-sky-50 hover:bg-sky-100 transition-all ease-in-out duration-450 flex items-center space-x-4 mt-10"
      >
        <div className="shrink-0">
          <img className="h-12 w-12" src={logo} alt="Logo" />
        </div>
        <div>
          <div className="text-xl font-medium text-black">Kubak.dev</div>
          <p className="text-gray-500">Your app wont be slow</p>
        </div>
      </div>
    </div>
  );
}

export default App;
