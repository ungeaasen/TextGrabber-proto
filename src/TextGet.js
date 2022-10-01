import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css'

export default function TextGet() {
	const [string, setString] = useState(0)
	
	window.dispatchEvent(new Event("storage"));

	const getSome = () => {
		const locale = localStorage.getItem("name")
		setString(locale)
	} 

	const deleteSome = () => {
		localStorage.clear()
	}

	window.addEventListener('storage', () => {
	      console.log("change to local storage!" + string);
	  })

	return (
		<Card style={{ width: '18rem' }}>
			<Card.Body>
			 <Card.Title><h2>Get some</h2></Card.Title>
				<Card.Text>
					<p>{string}</p>
				</Card.Text>
				<Button variant="primary" onClick={getSome}>
	            	Hent rettinger
	          	</Button>
	          	<Button variant="primary" onClick={deleteSome}>
	            	Slett
	          	</Button>
	        </Card.Body>
		</Card>	
	)
}