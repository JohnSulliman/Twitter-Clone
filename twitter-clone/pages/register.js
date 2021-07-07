import Head from 'next/head';
import {Button, Form, Col, Row} from 'react-bootstrap';
import register from '../styles/register.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Register() {
    return(
        <>
            <Head>Inscreva-se no Twitter/Twitter</Head>

            <div className={register.body}>
                <div className="logo">
                    <a href="/"><img src="img/logo.png" width="40px"/></a>
                </div>

                <div className={register.info}>
                    <h1>Crie sua conta</h1>
                    <div className={register.inputs}>
                        <Form>
                            <Form.Control className={register.input} type="text" size="md" placeholder="nome" />
                            <Form.Control className={register.input} type="text" size="md" placeholder="e-mail" />
                        </Form>
                    </div>

                    <div className={register.inputs}>
                        <p>Data de nascimento</p>
                        <p>
                            Isso não será exibido publicamente. Confirme sua própria idade, mesmo se esta conta for de 
                            empresa, de um animal de estimação ou outros.
                        </p>
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Label>Mês</Form.Label>
                                    <Form.Control as="select">
                                        <option>Janeiro</option>
                                        <option>Fevereiro</option>
                                        <option>Março</option>
                                        <option>Abril</option>
                                        <option>Maio</option>
                                        <option>Junho</option>
                                        <option>Julho</option>
                                        <option>Agosto</option>
                                        <option>Setembro</option>
                                        <option>Outubro</option>
                                        <option>Novembro</option>
                                        <option>Dezembro</option>
                                    </Form.Control>
                                </Col>
                                <Col>
                                    <Form.Label>Dia</Form.Label>
                                    <Form.Control as="select">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                        <option>11</option>
                                        <option>12</option>
                                        <option>13</option>
                                        <option>14</option>
                                        <option>15</option>
                                        <option>16</option>
                                        <option>17</option>
                                        <option>18</option>
                                        <option>19</option>
                                        <option>20</option>
                                        <option>21</option>
                                        <option>22</option>
                                        <option>23</option>
                                        <option>24</option>
                                        <option>25</option>
                                        <option>26</option>
                                        <option>27</option>
                                        <option>28</option>
                                        <option>29</option>
                                        <option>30</option>
                                        <option>31</option>
                                    </Form.Control>
                                </Col>
                                <Col>
                                    <Form.Label>Ano</Form.Label>
                                    <Form.Control as="select">
                                        <option>2021</option>
                                        <option>2020</option>
                                        <option>2019</option>
                                        <option>2018</option>
                                        <option>2017</option>
                                        <option>2016</option>
                                        <option>2015</option>
                                        <option>2014</option>
                                        <option>2013</option>
                                        <option>2012</option>
                                        <option>2011</option>
                                        <option>2010</option>
                                    </Form.Control>
                                </Col>
                            </Row>
                            <Button className={register.button} variant="primary">Avançar</Button>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    );

};