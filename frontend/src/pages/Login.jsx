import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [inputs, setInputs] = useState({
    userName: '',
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
      await axios.post('http://localhost:3000/api/auth/login', inputs);
      navigate('/');
    } catch (error) {
      console.log(error);
      setErr(error.response.data);
    }
  };

  return (
    <div className='auth'>
      <h1>Login</h1>
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
          type='password'
          placeholder='password'
          onChange={handleChange}
          name='password'
        />
        <button onClick={handlSubmit}>Login</button>
        {err && <p>{err}</p>}
        <span>
          you don&apos;t have an account? <Link to='/register'>Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
