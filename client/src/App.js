import react from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Chat from "./components/chat/chat";
import Homepage from "./components/hompage/homepage";
import Create from "./components/create/create";
import Join from "./components/join/join";
import Invite from "./components/invite/invite";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact component={Homepage} />
        <Route path="/create" component={Create} />
        <Route path="/chat" component={Chat} />
        <Route path="/join" component={Join} />
        <Route path="/invite" component={Invite} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
