import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
	const [inputs, setInputs] = useState({
		userName: '',
		email: '',
		password: '',
	});
	const [err, setErr] = useState(null);

	const handleChange = (e) => {
		setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const navigate = useNavigate();

	const handlSubmit = async (e) => {
		e.preventDefault();
		try {
			await axios.post('http://localhost:3000/api/auth/register', inputs);
			navigate('/login');
		} catch (error) {
			setErr(error.response.data);
		}
	};

	return (
		<div className='auth'>
			<h1>Register</h1>
			<form action=''>
				<input
					required
					type='text'
					placeholder='username'
					onChange={handleChange}
					name='userName'
				/>
				<input
					required
					type='email'
					placeholder='email'
					onChange={handleChange}
					name='email'
				/>
				<input
					required
					type='password'
					placeholder='password'
					onChange={handleChange}
					name='password'
				/>
				<button onClick={handlSubmit}>Register</button>
				{err && <p>{err}</p>}
				<span>
					Already have an account? <Link to='/login'>Login</Link>
				</span>
			</form>
		</div>
	);
};

export default Register;
