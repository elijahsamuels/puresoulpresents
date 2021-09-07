// import logo from './logo.svg';
import "./App.css";
import { getAllPureSoulPresentsMusicians } from "./actions/userActions";
import { UserDetails } from "./components/userDetails";

let userGigList = "imported gig list";
function App() {
  return (
    <div className="App">
      <UserDetails />
    </div>
  );
}

export default App;
