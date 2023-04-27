import logo from './logo.svg';
import './App.css';
import Welcome from "./components/Welcome"
import ChatBox from "./components/ChatBox"
import NavigationBar from "./components/NavigationBar"
import { useState} from "react";

function App() {
    const [user, setUser] = useState(false);

    return (
      <>
        <img src={logo} className="App-logo" alt="logo" width={120} height={120} />
          <NavigationBar />
          {!user ? (
              <Welcome />
          ) : (
              <>
                  <ChatBox />
              </>
          )}
      </>
  );
}

export default App;