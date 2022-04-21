import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import RedditIcon from '@mui/icons-material/Reddit';


const ButtonQuote = ( {link, icon} ) => {

  switch(icon){
    case 'twitter':
      return (<a target="_blank" href={link}><TwitterIcon/></a>)
    case 'tumblr':
      return (<a target="_blank" href={link}><RedditIcon/></a>)
    default:
      return (<a target="_blank" href={link}>{icon}</a>)
  }
}

export default ButtonQuote