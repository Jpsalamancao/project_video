import React, {useState} from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import {Link} from 'react-router-dom';
import { loginRequest } from '../actions';
import '../assets/styles/components/Login.scss';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';

const Login = props => {
    const [form, setValues] = useState ({
        email: '',
    });
    const handleInput = event => { // para esta funcion pasamos un solo objeto.
        setValues({
            ...form,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = event => {
        event.preventDefault();
        props.loginRequest(form);
        props.history.push('/');
    }

    return (
        <>
            <Header isLogin/>
            <section className="login">
                    <section className="login__container">
                        <h2>Inicia sesión</h2>
                        <form className="login__container--form" onSubmit={handleSubmit}>
                            <input 
                                name ="email"
                                className="input"
                                type="text" 
                                placeholder="Correo"
                                onChange={handleInput}
                            />
                            <input 
                                name = "password"
                                className="input" 
                                type="password" 
                                placeholder="Contraseña"
                                onChange={handleInput}
                            />
                            <button className="button">Iniciar sesión</button>
                            <div className="login__container--remember-me">
                                <label>
                                    <input type="checkbox" name="" id="cbox1" value="first_checkbos"/>
                                </label>
                                <a href="/">Olvidé mi contraseña</a>
                            </div>
                        </form>
                        <section className="login__container--social-media" > 
                        <div>
                            <img src= {googleIcon} alt="Google"/>Inicia sesión con Google
                        </div>
                        <div>
                            <img src= {twitterIcon} alt="Twitter"/>Inicia sesión con Twitter
                        </div>
                        </section>
                        <p className="login__container--register">
                            No tienes ninguna cuenta {' '}
                            <Link to="/Register">
                                Regístrate
                            </Link>
                        </p>
                    </section>
            </section>
        </>
    );
 }

 const mapDispatchToProps = {
    loginRequest,
 };


export default connect(null, mapDispatchToProps)(Login);