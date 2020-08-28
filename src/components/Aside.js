import React from 'react'

export default function Aside(props) {

  const cssClasses = ['aside', props.show ? 'open' : 'closed']

  return (
    <aside className={cssClasses.join(' ')}>
      <a href="https://github.com/DenekD" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
      <a href="https://www.facebook.com/tomasz.denkiewicz.1" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-f"></i></a>
      <a href="https://www.linkedin.com/in/tomasz-denkiewicz-70700276/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i></a>
    </aside>
  )
}
