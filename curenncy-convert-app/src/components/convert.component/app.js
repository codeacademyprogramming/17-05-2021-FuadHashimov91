import ConvertVal from './child.component/child.component';
import React from 'react';

class App extends React.Component {
  render(){
    return (
      <section id="convert">
        <div className="container">
          <div className=" d-flex justify-content-center align-items-center">
            <div style={{width:'450px'}}>
              <div className="app">
                <ConvertVal />
              </div>
            </div>
          </div>
        </div>
    </section>
    )
  }
}
export default App;
