import React from 'react'

export const Game = ({ selectedComponent }) => {
  return (
    <div>
       <iframe height="380" width="675" src="https://www.youtube.com/embed/HY9-5CTXf2s" title="Closures in Javascript" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 
      {selectedComponent}
      {/* <iframe src="https://gunaasin.github.io/firegunfire/" height="380" width="675" title="Iframe Example"></iframe>  */}
    </div>
  )
}
