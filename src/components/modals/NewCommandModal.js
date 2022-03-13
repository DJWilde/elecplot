import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Button, Modal } from 'react-bootstrap'

const NewCommandModal = ({ isShown, hide }) => isShown ? ReactDOM.createPortal(
	<>
			<Modal backdrop="static">
				<Modal.Header closeButton>
					<Modal.Title>Nowe polecenie</Modal.Title>
				</Modal.Header>
				<Modal.Body>

				</Modal.Body>
				<Modal.Footer>
				<Button variant="secondary" onClick={hide}>
            Zamknij
          </Button>
          <Button variant="primary">Wykonaj</Button>
				</Modal.Footer>
			</Modal>
	</>, document.body
) : null

export default NewCommandModal