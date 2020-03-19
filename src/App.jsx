import React, {useState} from 'react';
import RegisterAccount from './components/RegisterAccount'
import RegisterList from './components/RegisterList'

function App() {
  const [recordList, setRecordList] = useState([]);

  return (
    <div className="App">
      <RegisterAccount
        handleSetRecordList = {function handleSetRecordList(title, amount){
          const newList = [...recordList];
          newList.push({title, amount});
          newList.sort((a,b) => b.amount-a.amount);
          setRecordList(newList);

        }}
      />
      <RegisterList 
        recordList= {recordList}
      />

    </div>
  );
}

export default App;
