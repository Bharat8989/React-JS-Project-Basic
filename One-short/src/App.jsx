import React from 'react';
// import Header from './componets/Header.jsx';
// import Routing from './componets/Routing.jsx';
import Background from './Docs/Background.jsx';
import Foreground from './Docs/Foreground.jsx';
const App = () => {
  // const [marks, setMarks] = useState("Bharat");
  // const [first, setFirst] = useState("Suraj")
  return (
    <>
      {/* <h1>My marks were {marks}</h1>
      <button onClick={() => setMarks(marks+1)}>Update</button> */}
      
      {/* <Header data={marks} data1={first}/> */}
      {/* <h2>{marks}</h2> */}

      {/* routing */}
      {/* <Routing/> */}
      {/* <Header/> */}
       
       <div className='relative w-full h-screen bg-zinc-900'>
          <Background/>
         <Foreground/>
       </div>


    </>
  );
}

export default App;
//  