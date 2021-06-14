import Firebase from './component/Firebase';
import AppSync from './component/AppSync'
import Sns from './component/Sns'
import Websocket from './component/Websocket'


function App() {
  return (
    <div class="row">
      <div class="col">
        <h1>Firebase</h1>
        <Firebase /> 
      </div>
      <div class="col">
      <h1>Websocket</h1>
        <Websocket />                              
      </div>
      <div class="w-100"></div>
      <div class="col">
      <h1>AppSync</h1>
        <AppSync />                              
      </div>
      <div class="col">
          <h1>SNS</h1>
          <Sns />                             
      </div>
    </div>
  )
}

export default App;
