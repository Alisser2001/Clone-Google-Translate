import styles from "./textarea.module.css";
import { SectionType } from "../utils/types.d";
import { useState } from "../hooks/useStore";

interface Props {
    type: SectionType
};

const getPlaceHolder = (type: SectionType, loading?: boolean) => {
    if (type === SectionType.From) return "Introducir Texto";
    if (loading === true) return "Cargando...";
    return "Traducción"
}

export default function TextArea({ type }: Props) {
    const { loading, fromText, toText, setFromText, setToText } = useState();
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (type === SectionType.From) {
            setFromText(e.target.value);
        } else {
            setToText(e.target.value);
        }
    }
    return (
        <textarea
            placeholder={getPlaceHolder(type, loading)}
            value={type === SectionType.From ? fromText : toText}
            readOnly={type === SectionType.From ? false : true}
            autoFocus={type === SectionType.From ? true : false}
            onChange={handleChange}
            disabled={type === SectionType.From ? fromText.length >= 1000 : toText.length >= 1000}
            className={styles.container}
        />
    )
}