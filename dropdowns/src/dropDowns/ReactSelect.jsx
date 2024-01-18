import Select from 'react-select'
import { useState } from 'react';

function ReactSelect() {
const [options, setOptions] = useState([
  
     {value: "Hasham",id:1},
     {value: 'Ali', id:2},
     {value: 'Ahmed', id:3},
     {value: 'Computer', id:4},
     {value: 'Medical', id:5},
     {value: '22', id:6},
     {value: '23', id:7},
     {value: '24', id: 8}
  
])

const [selectedOption, setSelectedOption] = useState()
const [value2, setValue2] = useState()
   

   const optionLabel = ({value})=>(
    <div>
    
   {value}
    </div>
   )

  return (
    <div className="App">
     <Select 
     options={options}
     formatOptionLabel={optionLabel}
     onChange={(selectedOption)=>{
      setSelectedOption(selectedOption)
     }}
     value={selectedOption}
     getOptionValue={(option)=> option.value}
     style={{
      color: 'black'
     }}
     isMulti={true}
     />
    </div>
  );
}

export default ReactSelect;
