import { Form } from "react-bootstrap";
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

const generalStyles = { border: 0, height: "200px", resize: "none" };

export default function TextArea({ type, loading, value, onChange }: Props) {
    const styles = type === SectionType.From
        ? generalStyles
        : { ...generalStyles, backgroundColor: "#c0bdbd" };

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange(e.target.value);
    }
    return (
        <Form.Control
            as="textarea"
            placeholder={getPlaceHolder(type, loading)}
            value={value}
            readOnly={ type === SectionType.From ? false : true}
            autoFocus={type === SectionType.From ? true : false}
            style={styles}
            onChange={handleChange}
        />
    )
}