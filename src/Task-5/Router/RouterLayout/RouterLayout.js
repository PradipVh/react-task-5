import React from 'react';
import { Outlet } from 'react-router'

function RouterLayout() {

  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default RouterLayout;
