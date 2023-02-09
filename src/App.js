import './App.css';
import {useState} from "react";

function App()
{
	const [weight, setWeight] = useState(89);
	const [bottles, setBottles] = useState(3);
	const [time, setTime] = useState(1);
	const [gender, setGender] = useState("Male");
	const [result, setResult] = useState(0);
	
	function handleSubmit(e)
	{
		e.preventDefault();
		let bloodLevel = 0;
		let liters = bottles * 0.33;
		let grams = liters * 8 * 4.5;
		let burning = weight / 10;
		grams = grams - (burning * time);
		
		if(gender === "Male")
			bloodLevel = grams / (weight * 0.7);
		else
			bloodLevel = grams / (weight * 0.6);
		
		bloodLevel = bloodLevel.toFixed(2);
		
		if(bloodLevel < 0)
			bloodLevel = 0;
		
		setResult(bloodLevel);
	}
	return (
		<form onSubmit={handleSubmit}>
			<h4>Calculating alcohol blood level</h4>
			<div>
				<label>Weight</label>
				<input type="number" value={weight} onChange={e => setWeight(e.target.value)}/>
			</div>
			<div>
				<label>Bottles</label>
				<select value={bottles} onChange={e => setBottles(e.target.value)}>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
					<option value="6">6</option>
					<option value="7">7</option>
					<option value="8">8</option>
					<option value="9">9</option>
					<option value="10">10</option>
				</select>
			</div>
			<div>
				<label>Time</label>
				<select value={time} onChange={e => setTime(e.target.value)}>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
					<option value="6">6</option>
					<option value="7">7</option>
					<option value="8">8</option>
					<option value="9">9</option>
					<option value="10">10</option>
				</select>
			</div>
			<div>
				<label>Gender</label>
				<input type="radio" value="Male" id="genderMale" name="gender" onChange={e=> setGender(e.target.value)}/>
				<label htmlFor="genderMale">Male</label>
				<input type="radio" value="Female" id="genderFemale" name="gender" onChange={e=> setGender(e.target.value)}/>
				<label htmlFor="genderFemale">Female</label>
			</div>
			<div>
				<output>{result}</output>
			</div>
			<button>Calculate</button>
		</form>
	);
}

export default App;
