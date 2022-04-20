import React from 'react'

const ButtonQuote = ( {link, icon} ) => {
  return (
    <button>
        <a target="_blank" href={link}>{icon}</a>
    </button>
  )
}

export default ButtonQuote