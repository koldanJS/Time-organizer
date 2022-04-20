import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

function App() {

  const title = useSelector(state => state.some.title)

  return (
    <div>
      <p>{title}</p>
    </div>
  );
}

export default App;
