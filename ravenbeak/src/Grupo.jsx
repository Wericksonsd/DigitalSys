import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Grunda from './assets/brasoesOrigem/Grunda.svg'
import Lavari from './assets/brasoesOrigem/Lavari.svg'
import Termina from './assets/brasoesOrigem/Termina.svg'
import Viento from './assets/brasoesOrigem/Vientto.svg'
import Volttan from './assets/brasoesOrigem/Volttan.svg'
import Unknown from './assets/brasoesOrigem/Unknown.svg'
import Guerreiro from './assets/Personagens/Guerreiro.svg'
import Mago from './assets/Personagens/Mago.svg'
import Arqueiro from './assets/Personagens/Arqueiro.svg'
import Paladino from './assets/Personagens/Paladino.svg'

function Grupo(props){

    const [personagem, setPersonagem] = useState([]);    
    const [imgP, setImgP] = useState();
    const [nome, setNome] = useState();
    const [raca, setRaca] = useState();
    const [classe, setClasse] = useState();
    const [origem,setOrigem] = useState();
    const [nivelPer, setNivelPer] = useState();
    const [vidaPer, setVidaPer] = useState();
    const [defesaPer, setDefesaPer] = useState();
    const [manaPer, setManaPer] = useState();
    const [historiaPers, setHistoriaPer] = useState();    
    const [atrConst, setAtrConst] = useState();
    const [atrForca, setAtrForca] = useState();
    const [atrAgilidade, setAtrAgilidade] = useState();
    const [atrSaber, setAtrSaber] = useState();

    useEffect(() => {
            imagemPersonagem(props.imgPer);
            setNome (props.nome);
            setRaca (props.raca);
            setClasse (props.classe);
            origemPersonagem(props.origem);
            nivelPersonagem(props.nivel);
            setVidaPer (props.vida);
            setDefesaPer (props.def);
            setManaPer (props.mana);
            setHistoriaPer (props.historia);
            setAtrConst (props.c);
            setAtrForca (props.f);
            setAtrAgilidade (props.a);
            setAtrSaber (props.s);
        }
    )

    function imagemPersonagem(i) {

        switch(i){

            case 1:
                setImgP (Guerreiro);
            break;

            case 2:
                setImgP (Mago);
            break;

            case 3:
                setImgP (Paladino);
            break;

            case 4:
                setImgP (Arqueiro);

            default:
                setImgP (Arqueiro);
            break;
        }
    }

    function origemPersonagem(i) {

        switch(i){

            case 1:
                setOrigem(Grunda);
            break;

            case 2:
                setOrigem(Lavari);
            break;

            case 3:
                setOrigem(Termina);
            break;

            case 4:
                setOrigem(Viento);
            break;

            case 5:
                setOrigem(Volttan);
            break;

            default:
                setOrigem(Unknown);
            break;
        }
    }

    function nivelPersonagem(i){

        let nivelpp = ""
        
        for (let j = 0; j < 5; j++){
            if (i > 0){
                nivelpp = nivelpp + '★'
            } else {
                nivelpp = nivelpp + '☆'
            }
            i--
        }

        setNivelPer(nivelpp);
    }

    return (
        <div id='cardPer'>
            <img id='imgPer' src={imgP} alt="personagem" />
            <div className='infosPer'>
                <div className='infosPerNome'>
                    <span>
                        <p>NOME:</p>
                        <h2 id='nomePer'>{nome}</h2>
                    </span>
                    <span>
                        <p>RAÇA:</p>
                        <h4 id='racaPer'>{raca}</h4>
                    </span>
                    <span>
                        <p>CLASSE:</p>
                        <h4 id='classePer'>{classe}</h4>
                    </span>
                </div>
                <img id='origemPer' src={origem} alt="origem personagem"/>
            </div>            
            <div className='nivelPerDiv'>
                <p>NÍVEL:</p>
                <h2> {nivelPer} </h2>
            </div>
            <div className='statusPer'>
                <div><p>VIDA</p><span id='hp'>{vidaPer}</span></div>
                <div><p>DEFESA:</p><span id='def'>{defesaPer}</span></div>
                <div><p>MANA:</p><span id='mana'>{manaPer}</span></div>
            </div>
            <div className='adicionalPer'>
                <p id='historiaPer'><b>HISTÓRIA</b><br/>{historiaPers}</p>
                <div className='atributosPer'>
                    <span id='con'><p>CONST.</p>{atrConst}</span>
                    <span id='for'><p>FORÇA</p>{atrForca}</span>
                    <span id='agi'><p>AGIL.</p>{atrAgilidade}</span>
                    <span id='sab'><p>SABER</p>{atrSaber}</span>
                </div>
            </div>
        </div>
    )

}

Grupo.propTypes = {
    imgPer: PropTypes.number,
    nome: PropTypes.string,
    raca: PropTypes.string,
    classe: PropTypes.string,
    origem: PropTypes.number,
    nivel: PropTypes.number,
    vida: PropTypes.number,
    def: PropTypes.number,
    mana: PropTypes.number,
    historia: PropTypes.string,
    c: PropTypes.number,
    f: PropTypes.number,
    a: PropTypes.number,
    s: PropTypes.number,
}

Grupo.defaultProps = {
    imgPer: 4,
    nome: "Desconhecido",
    raca: "Desconhecida",
    classe: "Desconhecida",
    origem: 0,
    nivel: 1,
    vida: 1,
    def: 0,
    mana: 0,
    historia: "Desconhecida",
    c: 0,
    f: 0,
    a: 0,
    s: 0,

}

export default Grupo