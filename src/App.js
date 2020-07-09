import React , {useEffect, useState} from 'react';
import './App.css';

function App() {
  let data = {title : 'waiting'};
   const [todo, settodo] = useState(data);
   const [isData, setData] = useState(false);
   const [isFetch, setFetch] = useState(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { 
    async function getData(){
      setFetch(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      console.log("response = ",response);
  
      settodo(await response.json());
      setFetch(false);
    }
    getData();
 
  },[isData]);

  if (isFetch===true){
    return <div>data is loading.....</div>
  }
  return (
    <div>
      hello fetch     
      <span>title : {todo.title}</span>
    </div>
  );
}

export default App;
