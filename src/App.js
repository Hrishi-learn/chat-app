import {ChatEngine} from "react-chat-engine";
import './App.css';
import ChatFeed from "./components/ChatFeed.jsx";
import LoginForm from "./components/LoginForm";

function App() {

  if(!localStorage.getItem('username')) return <LoginForm/>

  return (
        <ChatEngine
          height="100vh"
          projectID="5bdc570f-12cc-45ca-bfab-1e02f89e647b"
          userName={localStorage.getItem('username')}
          userSecret={localStorage.getItem('password')}
          renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
         />
  );
}

export default App;
