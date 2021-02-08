import React from 'react';
import Button from '../../core/components/Button'
import './styles.scss';

const Home = () => (
  <div className="home-container">
    <div className="home-content">
      <h1 className="title">Desafio do Capítulo 3,<br /> Bootcamp DevSuperior</h1>
      <p className="subtitle">Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior <br />
      Favor observar as instruções passadas no capítulo sobre a elaboração deste projeto.<br />
Este design foi adaptado a partir de Ant Design System for Figma, de Mateusz Wierzbicki:  antforfigma@gmail.com</p>
      <Button title="Começar" />
    </div>


  </div>



);
export default Home;