import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles2 from "./Missoes.module.css";
import styles from "./a.module.css";
import { IoSkull }  from "react-icons/io5";
import { GiCrownedSkull } from "react-icons/gi";

function Missoes(props){

    const [missao, setMissao] = useState([]);
    const [nivelMissao, setNivelMissao] = useState();
    const [tituloMissao, setTituloMissao] = useState();
    const [textoMissao, setTextoMissao] = useState();
    const [recompensaMissao, setRecompensaMissao] = useState();

    useEffect(() => {
        mudarNivelM(props.nivelMissao);
        setTituloMissao (props.tituloMissao);
        setTextoMissao (props.textoMissao);
        setRecompensaMissao (props.recompensaMissao);
    });

    function mudarNivelM(i){
        
        switch(i){

            case 1:
                document.getElementsById('nivelM1').style.display = 'block';
            break;

            case 2:
                document.getElementById('nivelM2').style.display = 'block';
            break;

            case 3:
                document.getElementById('nivelM3').style.display = 'block';
            break;

            case 4:
                document.getElementById('nivelM4').style.display = 'block';
            break;
        }

        return;
    }

    return(
        <div className={styles.missoesContainer}>
            <div className={styles.nivelGeral}>
                <div id='nivelM1' className={styles.nivelM1}> <IoSkull/> </div>
                <div id='nivelM2' className={styles.nivelM2}> <IoSkull/><IoSkull/> </div>
                <div id='nivelM3' className={styles.nivelM3}> <IoSkull/><IoSkull/><IoSkull/> </div>
                <div id='nivelM4' className={styles.nivelM4}> <IoSkull/><IoSkull/><IoSkull/><GiCrownedSkull className={styles.caveiraRei}/> </div>
            </div>
            <div className={styles.ttl}><h2>TITULO</h2></div>
            <div className={styles.descr}><p>historia</p></div>
            <div className={styles.gold}><h3>00000</h3></div>
        </div>
    )


}

Missoes.defaultProps = {
    nivelMissao: 1,
    tituloMissao: "Indefinida",
    textoMissao: "Indefinida",
    recompensaMissao: "desconhecida",
}

export default Missoes