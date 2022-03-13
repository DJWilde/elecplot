import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button } from 'react-bootstrap'

const NavButton = (props) => {
  return (
		<>
    	<Button onClick={props.showModal} className="navbtn">
				<FontAwesomeIcon icon={props.icon} /><br />
				{props.caption}
			</Button>
		</>
  )
}

export default NavButton