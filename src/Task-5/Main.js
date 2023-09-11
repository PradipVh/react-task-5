import React from 'react';
import { RouterProvider } from 'react-router-dom';
import {router} from './Router/router';
function Task5Main() {

 

  return (
    <div>
        <RouterProvider router={router}/>
    </div>
  )
}

export default Task5Main;
