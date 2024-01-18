import logo from './logo.svg';
import './App.css';
import ReactSelect from './dropDowns/ReactSelect';
import Select_2 from './dropDowns/Select_2';

function App() {


  return (
    <div className="App">
      <div style={{paddingTop: '10%', width: '20%', marginLeft: '40%'}}>
      <label>React-Select</label>
    <ReactSelect />
    </div>
    
    <div style={{paddingTop: "5%", width: '20%', marginLeft: '40%', }}>
    <label>React-Select2-wrapper</label>
    <Select_2 />
    </div>
    </div>
  );
}

export default App;
