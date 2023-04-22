import styles from "../styles/Textarea.module.css";
import { SectionType } from "../types.d";

interface Props {
    type: SectionType,
    loading?: boolean,
    onChange: (language: string) => void,
    value: string
};

const getPlaceHolder = (type: SectionType, loading?: boolean) => {
    if (type === SectionType.From) return "Introducir Texto";
    if (loading === true) return "Cargando...";
    return "Traducción"
}

export default function TextArea({ type, loading, value, onChange }: Props) {

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange(e.target.value);
    }
    return (
        <textarea
            placeholder={getPlaceHolder(type, loading)}
            value={value}
            readOnly={type === SectionType.From ? false : true}
            autoFocus={type === SectionType.From ? true : false}
            onChange={handleChange}
            disabled={value.length>=200}
            className={type === SectionType.From ? styles.containerFrom : styles.containerTo}
        />
    )
}