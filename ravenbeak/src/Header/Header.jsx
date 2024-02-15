import { Link } from 'react-router-dom';
import styles from "./Header.module.css";

function Header() {

    const perAnc = document.getElementById("personagemAnc");

    return (
        <>
            <header className={styles.headerr}>
                <div className={styles.itens}>
                    <ul className={styles.itensMenu}>
                        <li><Link to='personagemAnc'>PESONAGENS</Link></li>
                        <li><a href="#">MISSÕES</a></li>
                    </ul>
                </div>
            </header>
        </>
    );

}

export default Header