import React, { useState } from 'react'
import { Navbar, Container, Nav, ButtonGroup, Row, Col, Tab, Tabs, Modal, Button, Form, FormGroup } from 'react-bootstrap'
import { faChartLine, faCode, faDatabase, faDownload, faHdd, faServer, faTable, faTerminal, faUpload } from '@fortawesome/free-solid-svg-icons'
import NavButton from './layout/NavButton'
import TestPlot from '../img/test.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MainScreen = () => {
	const [key, setKey] = useState('yourCollections')
	const [modalShown, setShown] = useState(false)
	const [command, setCommand] = useState('')

	const hideModal = () => setShown(false)
	const showModal = () => setShown(true)

	const handleSubmit = (e) => {
		e.preventDefault()

		console.log(command)
		hideModal()
	}

  return (
		<>
			<Container>
				<Modal show={modalShown} onHide={hideModal} backdrop="static">
					<Modal.Header closeButton>
						<Modal.Title>Nowe polecenie</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form>
							<FormGroup className='mb-3'>
								<Form.Label>Wpisz polecenie gnuplota (wiele poleceń oddziel średnikiem): </Form.Label>
								<Form.Control type="text" placeholder='plot sin(x)' value={command} onChange={(e) => setCommand(e.target.value)} />
							</FormGroup>
						</Form>
					</Modal.Body>
					<Modal.Footer>
					<Button variant="secondary" onClick={hideModal}>
							Zamknij
						</Button>
						<Button variant="primary" onClick={handleSubmit}>Wykonaj</Button>
					</Modal.Footer>
				</Modal>
			</Container>

			<Navbar bg="light" expand="md">
				<Container fluid>
					<Nav>
						<ButtonGroup className="nav-button-group" size="md">
							<NavButton icon={faChartLine} caption={'Nowy wykres'}></NavButton>
							<Button className="navbtn" onClick={showModal}>
								<FontAwesomeIcon icon={faTerminal} /><br />
									Nowe polecenie
							</Button>
							{/* <NavButton onClick={showModal} icon={faTerminal} caption={'Nowe polecenie'}></NavButton> */}
							<NavButton icon={faCode} caption={'Nowy skrypt'}></NavButton>
							<NavButton icon={faTable} caption={'Edytor tabel'}></NavButton>
							<NavButton icon={faHdd} caption={'Nowa kolekcja'}></NavButton>
							<NavButton icon={faDownload} caption={'Wczytaj kolekcję'}></NavButton>
							<NavButton icon={faServer} caption={'Dysk internetowy'}></NavButton>
							<NavButton icon={faUpload} caption={'Prześlij plik'}></NavButton>
							<NavButton icon={faDatabase} caption={'Prześlij kolekcję'}></NavButton>
						</ButtonGroup>
					</Nav>
				</Container>
			</Navbar>
			<Container fluid>
				<Row className="flex-xl-nowrap">
					<Col md={3} lg={3} id="collectionview">
						<Tabs activeKey={key} id="collection-tabs" onSelect={(key) => setKey(key)}>
							<Tab eventKey='yourCollections' title="Twoje kolekcje">
								Tu będzie widok kolekcji
							</Tab>
							<Tab eventKey='internetCollections' title="Kolekcje internetowe">
								Tu będzie widok dysków internetowych
							</Tab>
						</Tabs>
					</Col>
					<Col md={3} lg={9} id="plotview">
						<img className="plot-img" src={TestPlot} />
						<textarea className="form-control log-area" value={'Tu będzie test logów'} readOnly></textarea>
					</Col>
				</Row>
			</Container>
		</>
  )
}

export default MainScreen