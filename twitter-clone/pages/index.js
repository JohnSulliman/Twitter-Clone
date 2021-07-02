import Head from 'next/head'
import login from '../styles/login.module.css'
import { Button, Form, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (

    <>
      <Head>
        <title>Twitter</title>
      </Head>
      
      <Container className={login.body} >

        <div className={login.header}>
          <img className={login.logo} src='img/logo.png' />
          <h1 className={login.title}><span className={login.title_span}>Entrar no Twitter</span></h1>
        </div>

        <Form className={login.inputs}>
          <Form.Group className={login.body_input}>
            <Form.Control 
              className={login.input} 
              size='md' type='text' 
              placeholder='Celular, e-mail ou nome de usuário' 
            />
          </Form.Group>

          <Form.Group className={login.body_input}>
            <Form.Control 
              className={login.input} 
              size='md' type='password' 
              placeholder='Senha' 
            />
          </Form.Group>

          <Button className={login.button} type='submit'>Entrar</Button>
        </Form>

        <div className={login.acess}>
          <p>Esqueceu a senha? . Inscreva-se no Twitter</p>
        </div>

      </Container>

    </>

  );
  
};
