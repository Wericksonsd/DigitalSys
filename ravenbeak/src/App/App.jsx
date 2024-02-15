import {Router, Routs} from 'react-router-dom'
import Header from '../Header/Header.jsx';
import Grupo from '../Grupo/Grupo.jsx';
import Introducao from '../Intro/Intro.jsx';
import MenuTitulo from '../MenuTitulo/MenuTitulo.jsx';

import styles from './App.module.css';

function App() {

  return(
    <>
      <Header/>
      <Introducao/>
      <MenuTitulo id="personagemAnc" titulo="PERSONAGEM"/>
      <main className={styles.mainGrupo}>
        <Grupo imgPer={1} nome="Noskk" raca="Humano" classe="Guerreiro" origem={2} nivel={4} vida={23} def={12} mana={21} historia="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacus neque, dictum eget diam at, aliquam euismod neque. Morbi est libero, pretium iaculis diam vitae, interdum aliquam sem. Sed varius, nisl quis hendrerit iaculis, sapien justo faucibus sapien, sit amet rutrum justo lorem nec elit. Vestibulum in viverra magna, id." c={12} f={5} a={5} s={5}/>
        <Grupo imgPer={2} nome="Nosk" raca="Humano" classe="Guerreiro" origem={5} nivel={1} vida={23} def={12} mana={21} />
        <Grupo imgPer={3} nome="Nosk" raca="Humano" classe="Guerreiro" origem={3} nivel={3} vida={23} def={12} mana={21} />        
        <Grupo imgPer={4} nome="Nosk" raca="Humano" classe="Guerreiro" origem={3} nivel={3} vida={23} def={12} mana={21} />
        <Grupo/>        
      <MenuTitulo id="missoesAnc" titulo="MISSÕES"/>
      </main>
    </>
  );

}

export default App
