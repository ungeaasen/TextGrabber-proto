import { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
const myLeads = []


export default function Textgrab() {
	const [state, setState] = useState({
	  value:'',
	  show:''
  });
	const [show, setShow] = useState(false)
	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)
	const [string, setString] = useState(0)
	const [currentUrl, setCurrentUrl] = useState(0)
	let stringTo = '';

	const handleChange = (e) => {
    setState({value: e.target.value})
	}

	const handleSend = (e) => {
		if (typeof window !== 'undefined') {
			let locale = localStorage.getItem("name")
			if(myLeads.indexOf(stringTo) <= -1) {
				//myLeads.push("from", stringTo)
				//myLeads.push("to", state.value)
				//myLeads.push("url", currentUrl)
				localStorage.setItem("name.from", JSON.stringify(string))
				localStorage.setItem("name.to", JSON.stringify(state.value))
				localStorage.setItem("name.url", JSON.stringify(currentUrl))
				//localStorage.setItem("name", JSON.stringify(myLeads))
				setState({value: e.target.value})
				console.log("locale " + locale + "MyLeads: " + myLeads)
				alert("Sendt inn til retting! :)")
				handleClose()
				window.dispatchEvent(new Event("storage"));
			}
		}
	}

	useEffect(() => {
		if (typeof window !== 'undefined') {
			document.onmouseup = () => {
				if (window.getSelection().toString().length > 3) {
					setString(window.getSelection().toString())
					setCurrentUrl(window.location.href.toString())
					handleShow()
				}
			}
		}
	}, []) 

	{ if (stringTo !== string) {
		stringTo = string
		}
	}

	return <>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Send inn forslag</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Label>Original</Form.Label>
         <p>{string}</p><a href={currentUrl}> <p>{currentUrl}</p> </a>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Forslag</Form.Label>
              <Form.Control as="textarea" value={state.value} onChange={(e)=>handleChange(e)} rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Lukk
          </Button>
          <Button variant="primary" onClick={handleSend}>
            Send inn retting 
          </Button>
        </Modal.Footer>
      </Modal>
    </>
}


 