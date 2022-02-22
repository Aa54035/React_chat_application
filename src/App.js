import './App.css';
import { ChatEngine } from 'react-chat-engine';

function App() {
  return (
    <div className="App">
      <div className="container ds-flex mt-5 align-item-center justify-content-center text-center">
          <h4 className="display-4 bg-primary">This is Char react APP </h4>
        </div>

      <ChatEngine height="100vh" projectID="aec87bbf-4bf4-4684-a567-50f3dbf20e31"
        userName="aa54035@gmail.com"
        userSecret="Ash@123456">
        
        </ChatEngine>
    </div>
    
  );
}

export default App;
