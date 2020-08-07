import React from 'react';
import './styles.css';
import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem() {
  return(
    <article className="teacher-item">
    <header>
      <img src="https://avatars0.githubusercontent.com/u/66695415?s=460&u=59c334168478c9737f1735bf85a1856b3d769c1b&v=4" alt="Aleixo"/>
      <div>
        <strong>Aleixo Junior</strong>
        <span>Quimica</span>
      </div>
    </header>

    <p>Tamo ai pra dar aula ne</p>

    <footer>
      <p>
        Preço/hora 
        <strong>R$90,00</strong>
      </p>
      <button type="button">
        <img src={whatsAppIcon} alt="wppicon"/>
        Entrar em contato
      </button>
    </footer>
  </article>
  );
}

export default TeacherItem;