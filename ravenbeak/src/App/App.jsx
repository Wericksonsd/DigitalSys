import {BrowserRouter} from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link';
import React,{ useState } from 'react'

import Header from '../Header/Header.jsx';
import Grupo from '../Grupo/Grupo.jsx';
import Introducao from '../Intro/Intro.jsx';
import MenuTitulo from '../MenuTitulo/MenuTitulo.jsx';
import Missoes from '../Missoes/Missoes.jsx'

import styles from './App.module.css';

function App() {

  const [personagem, setPersonagem] = useState([
    
    {
      idPer: 1,
      imgPer: 1,
      nome: 'Werickson',
      raca: 'Humano',
      classe: 'Guerreiro',
      origem: 2,
      nivel: 4,
      vida: 48,
      def: 12,
      mana: 16,
      historia: 'Nascido nas vastas planícies dos Reinos Distantes, este  guerreiro foi criado entre clãs nômades. Com habilidades ímpares na espada e coragem indomável, embarca em uma jornada épica por terras selvagens, enfrentando desafios lendários para se tornar uma lenda viva.',
      c: 8,
      f: 6,
      a: 3,
      s: 2,
    },

    {
      idPer: 2,
      imgPer: 2,
      nome: 'Giovanne',
      raca: 'Elfo',
      classe: 'Mago',
      origem: 3,
      nivel: 3,
      vida: 23,
      def: 5,
      mana: 42,
      historia: 'Nascido em uma aldeia remota, este mago descobriu seu dom para a magia desde jovem. Após anos de estudo solitário, dominou os elementos e os mistérios arcanos. Agora, embarca em uma busca pelo conhecimento além dos limites do mundo conhecido, desvendando segredos ancestrais e desafiando os deuses.',
      c: 5,
      f: 2,
      a: 3,
      s: 9,
    },

    {
      idPer: 3,
      imgPer: 2,
      nome: 'Jotah Beele',
      raca: 'Anão',
      classe: 'Paladino',
      origem: 4,
      nivel: 5,
      vida: 55,
      def: 15,
      mana: 27,
      historia: 'Criado nas profundezas das montanhas, este paladino anão carrega o fogo da justiça em seu coração robusto. Com sua armadura reluzente e martelo poderoso, defende os valores de honra e lealdade. Sua jornada o leva através de terras hostis, onde enfrenta males antigos e protege os indefesos com fervor inabalável.',
      c: 9,
      f: 5,
      a: 2,
      s: 4,
    },

    {
      idPer: 4,
      imgPer: 2,
      nome: 'Gabristou',
      raca: 'Elfo Noturno',
      classe: 'Arqueira',
      origem: 1,
      nivel: 4,
      vida: 28,
      def: 8,
      mana: 26,
      historia: 'Nascida nas florestas densas, esta arqueira é uma filha da natureza. Com sua habilidade incomparável no arco, ela desliza pelas sombras das árvores, uma guardiã silenciosa. Sua jornada a leva por terras selvagens, onde enfrenta perigos e protege os fracos com precisão mortal e coração valente.',
      c: 6,
      f: 4,
      a: 8,
      s: 3,
    },

    {
      idPer: 5,
    },
  ])

  const [missoes, setMissoes] = useState([

    {
      idMissao: 1,
      nivelMissao: 3,
      tituloMissao: 'Derrotar o Troll',
      textoMissao: 'Em uma terra assolada pela escuridão, um troll antigo ameaça a segurança das aldeias próximas. Sua maldade é um flagelo para os viajantes e uma sombra sobre a paz da região. Uma missão é convocada: derrotar o monstro e restaurar a tranquilidade.',
      recompensaMissao: 340,
    },

    {
      idMissao: 2,
      nivelMissao: 1,
      tituloMissao: 'Cortar Madeira',
      textoMissao: 'O fazendeiro local precisa de 50 madeiras para consertar seu celeiro.',
      recompensaMissao: 50,
    },

    {
      idMissao: 3,
      nivelMissao: 4,
      tituloMissao: 'Derrotar o Gigante',
      textoMissao: 'Em um reino afligido pelo medo e desespero, o rei convoca corajosos aventureiros para uma missão de proporções épicas: eliminar o gigante que aterroriza as terras. A recompensa é grande, mas a tarefa é árdua. A jornada exigirá bravura, estratégia e determinação para triunfar sobre a ameaça imponente que assola o reino.',
      recompensaMissao: 750,
    },

    {
      idMissao: 4,
      nivelMissao: 2,
      tituloMissao: 'Escolte o Nobre local',
      textoMissao: 'Em um mundo de intriga e perigos, uma escolta é convocada para garantir a segurança de um nobre em uma jornada perigosa. A missão é clara: proteger o nobre de ameaças e garantir sua chegada segura ao destino.',
      recompensaMissao: 220,
    },

    {
      idMissao: 5,
      nivelMissao: 4,
      tituloMissao: 'Derrote a Bruxa do Pântano',
      textoMissao: 'Convocação ecoa na aldeia: a bruxa do pantano ameaça nossos lares. Sob o véu da noite, o ancião convoca bravos corações para enfrentar o mal. Heróis se erguem, olhos firmes e armas em punho, prontos para desafiar o desconhecido. O destino do pântano está em suas mãos.',
      recompensaMissao: 680,
    },

    {
      idMissao: 6,
      nivelMissao: 1,
      tituloMissao: 'Minério de Ferro',
      textoMissao: 'Com a guerra se aproximando, o Rei ordenou a fabricação de diversas armaduras e espadas, então solicito a algum aventureiro 50 peças de minériod e ferro.',
      recompensaMissao: 140,
    },

    {
      idMissao: 7,
    },
  ])

  return(
    <BrowserRouter>
      <Header/>
      <Introducao/>
      <MenuTitulo id="personagemAnc" titulo="PERSONAGEM"/>
      <main className={styles.mainGrupo}>
      
      {personagem.map((personagens) => (
          <Grupo key={personagens.idPer}            
          imgPer = {personagens.imgPer}
          nome = {personagens.nome}
          raca =  {personagens.raca}
          classe = {personagens.classe}
          origem = {personagens.origem}
          nivel = {personagens.nivel}
          vida = {personagens.vida}
          def = {personagens.def}
          mana = {personagens.mana}
          historia = {personagens.historia}
          c = {personagens.c}
          f = {personagens.f}
          a = {personagens.a}
          s = {personagens.s}
          />
      ))}

      <MenuTitulo id="missoesAnc" titulo="MISSÕES"/>

      </main>
    </BrowserRouter>
  );

}

export default App
