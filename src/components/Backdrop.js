import React from 'react'

export default function Backdrop(props) {

  const cssClasses = ['backdrop', props.show ? 'open' : 'closed']
  return <div onClick={props.toggleAside} className={cssClasses.join(' ')}></div>

}
