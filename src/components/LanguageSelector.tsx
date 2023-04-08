import Form from 'react-bootstrap/Form';
import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from "../constants";
import { Languages, FromLanguage, SectionType } from '../types.d';

type Props =
    | {
        type: SectionType.From, value: FromLanguage, onChange: (language: FromLanguage) => void
    }
    | {
        type: SectionType.To, value: Languages, onChange: (language: Languages) => void
    }
    ;



export default function LanguageSelector({ onChange, value, type }: Props) {

    const handleLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value as Languages)
    }

    return (
        <Form.Select aria-label="Selecciona el idioma" onChange={handleLanguage} value={value}>
            {type === SectionType.From && <option value={AUTO_LANGUAGE}>Detectar idioma</option>}
            {Object.entries(SUPPORTED_LANGUAGES).map(([key, lan]) => {
                return (
                    <option key={key} value={key}>{lan}</option>
                )
            })}
        </Form.Select>
    );
}