import Head from 'next/head';
import { Container, Grid, Typography, TextField, Button } from '@material-ui/core';
import styles from '../styles/login.module.scss';

export default function Login() {
    return(
        <div className={styles.login_screen}>
            <Head>
                <title>Entrar no Twitter / Twitter</title>
            </Head>
            
            <div>
                <Container maxWidth="sm">
                    <Grid container direction="column" spacing={3}>
                        <Grid item>
                            <img className={styles.img} src="images/logo.ico" alt="logo-twitter.png"/>
                        </Grid>

                        <Grid item>
                            <Typography>
                                <h1>Entrar no Twitter</h1>
                            </Typography>
                        </Grid>

                        <Grid item >
                            <TextField 
                                className={styles.input}
                                label="Celular, e-mail ou nome de usuário"
                                variant="outlined"
                                type="text"
                            />
                        </Grid>

                        <Grid item >
                            <TextField 
                                className={styles.input}
                                label="senha"
                                variant="outlined"
                                type="password"
                            />
                        </Grid>

                        <Grid item>
                            <Button
                                className={styles.button}
                                size="large"
                                variant="contained" 
                                color="primary"
                            >
                                Entrar
                            </Button>
                        </Grid>

                        <Grid item>
                            <Typography>
                                <span>
                                    <a href="">Esqueceu sua senha?</a> · <a href="">Inscrever-se no Twitter</a>
                                </span>
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    );

};