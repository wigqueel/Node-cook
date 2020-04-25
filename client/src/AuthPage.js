import React, {useContext, useEffect, useState} from 'react'
/*import {useHttp} from '../hooks/http.hook'
import {useMessage} from '../hooks/message.hook'
import {AuthContext} from '../context/AuthContext'*/
import './App.scss';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export const AuthPage = () => {
  /*const auth = useContext(AuthContext)
  const message = useMessage()
  const {loading, request, error, clearError} = useHttp()*/
  const [form, setForm] = useState({
    email: '', password: ''
  })

  /*useEffect(() => {
    message(error)
    clearError()
  }, [error, message, clearError])

  useEffect(() => {
    window.M.updateTextFields()
  }, [])*/

  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }
/*
  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', {...form})
      message(data.message)
    } catch (e) {}
  }
*/
 // const loginHandler = async () => {
 //   try {
  //    const data = await request('/api/auth/login', 'POST', {...form})
  //    auth.login(data.token, data.userId)
  //  } catch (e) {}
 // }


  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
   
  };
  fetch('http://localhost:9000' )
    .then(response => response.json())




  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h1>Recipes Page</h1>
        <div className="card blue darken-1">
          <div className="card-content white-text">
            <span className="card-title">Авторизация</span>
            <div>

              <div className="input-field">
                <input
                  placeholder="Введите email"
                  id="email"
                  type="text"
                  name="email"
                  className="yellow-input"
                  value={form.email}
                  onChange={changeHandler}
                />
                <label htmlFor="email">Email</label>
              </div>

              <div className="input-field">
                <input
                  placeholder="Введите пароль"
                  id="password"
                  type="password"
                  name="password"
                  className="yellow-input"
                  value={form.password}
                  onChange={changeHandler}
                />
                <label htmlFor="email">Пароль</label>
              </div>

            </div>
          </div>
          <div className="card-action">
            <button
              className="btn yellow darken-4"
              style={{marginRight: 10}}
              //disabled={loading}
              onClick={requestOptions}
            >
              Войти
            </button>
            <button
              className="btn grey lighten-1 black-text"
              //onClick={registerHandler}
              //disabled={loading}
            >
              Регистрация
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AuthPage;
