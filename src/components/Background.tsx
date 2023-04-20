import styles from "../styles/Background.module.css";

interface Props {
    onClick: (type:string, view: boolean) => void
}

export default function Background({ onClick }: Props){
    const handleClick = () => {
        onClick("all", false);
    }
    return(
        <div className={styles.container} onClick={handleClick}>
            <div className={styles.band}/>
        </div>
    )
}