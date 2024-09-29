import React from 'react'

function SideDrawer({close}:any) {
  return (
    <div className='h-screen
    w-screen md:w-[400px]
    bg-white
    shadow-md p-5 z-20 sticky'>
        <button onClick={()=>close()}>Close</button>
    </div>
  )
}

export default SideDrawer