import  Select2  from 'react-select2-wrapper'
import 'react-select2-wrapper/css/select2.css';

function Select_2(){
    const data = [
      {
        text: "Name",
    children: [
      {text: 'Hasham', id: 1},
      {text: 'Ali', id: 2},
      {text: 'Hamza', id: 3}
    ]
  },
    {
      text: "Profesion",
      children: [
        {text: "Computer S", id: 4},
        {text: 'Medical', id: 5}
      ]
    },
    {
      text: "Age",
      children: [
        {text: "22", id:6},
        {text: '24', id: 7},
        {text: '23', id:8}
      ]
    }
    ]

    return (
        <div className='select2-container--classic'>
          <button>
        <Select2
        multiple
        className="select2-search--dropdown"
        data={data}
        options={{
          placeholder: 'search by tags',
        }}
        />
        </button>

        </div>
    )
}

export default Select_2