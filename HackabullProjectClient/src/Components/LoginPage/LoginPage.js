import './LoginPage.css';
import logo from '../files/logo_main.png';
import {React} from 'react';
import {useHistory} from "react-router-dom";
 

export const LoginPage = () => {
    const history = useHistory();


    function handleSubmit (event) {
        event.preventDefault();
    
        console.log(JSON.stringify({id:0, username:'', password: event.target.password.value, firstName:'', lastName:'', phone:'', email:event.target.email.value,linkedIn:'', gitHub:'',imagePath:'', bio:'',experience:'',skills:[{}]}));
        

        fetch('http://localhost:5000/Users/login', {
          method: 'POST',
          headers: {"Content-Type":'application/json'},
          body: JSON.stringify({id:0, username:'', password: event.target.password.value, firstName:'', lastName:'', phone:'', email:event.target.email.value,linkedIn:'', gitHub:'',imagePath:'', bio:'',experience:'',skills:[{}]}),
        }).then(response => response.json()).then(responseJson =>  {
    
            if(responseJson.password === event.target.password.value)
            {
                localStorage.setItem("email",event.target.email.value);
                history.push("/home");
            }
            else
                alert("Wrong Password");
        });
    }

  return (
    <div className='columns'>
        <div className='row1'>
          
          <div className='logo-image'>
            <img src={logo} alt='Find-a-Bull logo'/>
          </div>
          <form onSubmit={handleSubmit} method='POST' action='http://localhost:5000/users/'>
            <div className='item login username'>
                <h2>Email:</h2>
                <input placeholder='your email adress' name="email" required></input>
            </div>

            <div className='item login password'>
                <h2>Password:</h2>
                <input placeholder='your password' name="password" type='password' required></input>
            </div>
            <div className='login'>
                <button type='submit' className="submit-button">Sign in</button>
            </div>
          </form>
        </div>
    </div>
  );
}

