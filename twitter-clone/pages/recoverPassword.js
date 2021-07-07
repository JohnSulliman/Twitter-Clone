import Head from 'next/head';
import {Button, Form} from 'react-bootstrap';
import password from '../styles/recoverPassword.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function RecoverPassword() {
    return(
        <>
            <Head>Redefinir Senha</Head>

            <div>
               <div className={password.TopNav}>
                   <div className={password.logo}>
                        <a href='/'><img src='img/logo.png' width="23px" /></a>
                        <span className={password.span}>Redefinir Senha</span>
                   </div>
                   <div>
                        <span className={password.span}>Português (Brasil)</span>
                   </div>
               </div>
                
                <div className={password.body}>
                    <div className={password.title}>
                        <h1>Encontre sua conta do Twitter</h1>
                    </div>

                    <Form>
                            <Form.Label>Digite seu e-mail, número de celular ou nome de usuário.</Form.Label>
                            <Form.Control
                                className={password.input}
                                size='md' type='text' 
                            />

                            <Button variant="primary">Buscar</Button>
                    </Form>
                </div>

            </div>
        </>
    );

};