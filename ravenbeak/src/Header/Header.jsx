import styles from "./Header.module.css";

function Header() {

    return (
        <>
            <header className={styles.headerr}>
                <div className={styles.brasao}>
                </div>
                <div className={styles.itens}>
                    <img src="" alt="" />
                    <ul className={styles.itensMenu}>
                        <li id="grupoMenu">GRUPO</li>
                        <li id="missoesMenu">MISSÕES</li>
                    </ul>
                </div>
            </header>
        </>
    );

}

export default Header