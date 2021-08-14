import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import LoginForm from './LoginForm'
import Header from './Header'
import Formulario from './Formulario'


const App = () => {
  
  const adminUser ={
    email:'agura6@gmail.com',
    password:'root123'
  }

  const [user, setUser] = useState({ name: '', email: '' })
  const [error, setError] = useState('')

  const Login = details =>{
    console.log(details)

    if(details.email === adminUser.email && details.password === adminUser.password){
      console.log("estas dentro")
      setUser({
        name: details.name,
        email: details.email
      })
    }else{
      setError('User Invalid')
    }
  }

  const Logout = details =>{
    setUser({name:'',email:''})
  }

  return (
    <div>
      {(user.email !== '') ? (
        <div>
          {/* <h2>Bienvenido, <span>{user.name}</span></h2> */}
          <Header user={user.name} Logout= {Logout}/>
          <Formulario />
          {/* <Button
							variant='contained'
							color='primary'
              onClick={() => Logout()}
						>
							Sign out
						</Button> */}
        </div>
      ) : (
      <LoginForm Login = {Login} error= {error}/>
      )
   }
    </div>
 )
}

export default App;
