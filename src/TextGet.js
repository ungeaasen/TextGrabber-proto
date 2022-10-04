import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.css'

export default function TextGet() {
	const [string, setString] = useState(0)
	let [changed, hasChanged] = useState(false)

	const handleChange = () => hasChanged(true)
	const turnoffChange = () => hasChanged(false)
	let parsedStr = []
	let toStr = ""

	const [to, setTo] = useState("")
	const [from, setFrom] = useState("")
	const [url, setUrl] = useState("")

	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('storage', () => {
		  		handleChange()
			})
		}
	}, [])

	const getSome = () => {
		for (var i = 0; i < localStorage.length; i++){
			console.log(" to: " + localStorage.getItem("name.to"))
		    setTo(localStorage.getItem("name.to"))
		    setFrom(localStorage.getItem("name.from"))
		    setUrl(localStorage.getItem("name.url"))
		}
		turnoffChange()
	} 

	const deleteSome = () => {
		localStorage.clear()
		setString("")
	}
	
	return (
		<Card className="fj-card" style={{ float: 'right', margin: '15px', width: '18rem', boxShadow: '5px 10px', backgroundColor: 'lightgrey' }}>
			<Card.Body>
			 <Card.Title><h2>Hent forslag :)</h2></Card.Title>
				
				<Card.Text>
					<h5>Rettes fra:</h5>
					<p> {from}</p>
					<h5>Rettes Til:</h5>
					<p>{to}</p>
					<h5>URL:</h5>
					<p>{url}</p>
				</Card.Text>
				
				<Button variant="primary" onClick={getSome}>
	            	Hent rettinger
	          	</Button>
	          	<Button variant="primary" onClick={deleteSome}>
	            	Slett
	          	</Button>
	          	{ changed &&
	          		<div style={{height:'35px', width: '35px', backgroundColor: 'red', borderRadius: '50px', margin: '50px', border: 'solid 3px black'}}></div>
				}
	        </Card.Body>
		</Card>	
	)
}