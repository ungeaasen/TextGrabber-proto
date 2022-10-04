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

	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('storage', () => {
		  		handleChange()
			})
		}
	}, [])

	const getSome = () => {
		const locale = localStorage.getItem("name")

		for (var i = 0; i < localStorage.length; i++){
		    console.log("ENTRY NR: " + (i) + localStorage.getItem(localStorage.key(i)))
		    parsedStr = JSON.parse(localStorage.getItem("name"))
		    console.log(localStorage)
		    setString(locale)
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
			 <Card.Title><h2>Get some</h2></Card.Title>
				<Card.Text>
				{parsedStr.map((e) => {
					return <p>{e}</p>
				}
				)}
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