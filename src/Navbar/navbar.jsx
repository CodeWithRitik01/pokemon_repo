import styles from "./navbar.module.css"

function Navbar(){
    return (
        <div className={styles.navbar}>
            <h1>Pokemon's List</h1>
        </div>
    )
}

export {Navbar}