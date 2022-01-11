import * as React from 'react';
import Home from './Home';
import HomeGrid from './HomeGrid';

export default function HomePage(){
    return(
        <React.Fragment>
          <Home/>
          <HomeGrid/>
        </React.Fragment>
    )
}