import React, {useState} from 'react'
import SideNav from './sidenavComponent'
import Body from './bodyComponent'

export default () => {
  const [state, setstate] = useState(true)
    return (
      <div className="container-fluid" id="Dashboard">
        <SideNav state={state}/>
        <Body action={setstate} state={state}/>
      </div>
    );
}   