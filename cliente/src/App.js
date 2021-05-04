import React, {Fragment} from 'react';
import Navbar from './Components/Navbar';
import OperationsList from './Components/OperationsList'

function App() {
  return (
    <Fragment>
      <Navbar brand='App Gastos'/>
      <div className="container">
        <div className="row">
          <div className="col-7">
            <h2 style={{textAlign:'center'}}>Operations List</h2>
            <OperationsList/>
          </div>
          <div className="col-5">
            <h2 style={{textAlign:'center'}}>Operation Form</h2>
          </div>
        </div>
      </div>
    </Fragment>
    
  );
}

export default App;
