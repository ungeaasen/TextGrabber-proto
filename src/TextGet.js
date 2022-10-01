import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'

export default function TextGet() {
	const [string, setString] = useState(0)
	const getSome = () => {
		const locale = localStorage.getItem("name")
		setString(locale)
	} 

	return (
		<div>
			<h2>Get some</h2>
			<p>{string}</p>
			<Button variant="primary" onClick={getSome}>
            	Hent rettinger
          	</Button>
		</div>	
	)
}