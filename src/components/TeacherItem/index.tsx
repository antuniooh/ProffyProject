import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css';

function TeacherItem(){
    return(
        <article className="teacher-item">
        <header>
          <img src="https://avatars0.githubusercontent.com/u/51217271?s=460&u=c03cf678325002aec9d58995dd26e6b743eb48a3&v=4" alt=""/>
          <div>
            <strong>Diego Fernandes</strong>
            <span></span>
          </div>
        </header>
          <p>
          Projeto semestral da matéria de Estrutura de Dados, ministrada no Centro Universitário FEI.
          <br/> <br/>
          Lista Dinâmica Duplamente Encadeada, Fila Estática Circular e Tabela Hash
          </p>

        <footer>
          <p>
            Preço/Hora
            <strong>R$ 200,00</strong>
          </p>
          <button type="button">
            <img src={whatsappIcon} alt="Whatsapp"/>
            Entrar em contato
          </button>
        </footer>
        </article>
    )
}

export default TeacherItem;