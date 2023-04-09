import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Form, Stack } from 'react-bootstrap';
import { useState } from './hooks/useStore';
import { VOICE_FOR_LANGUAGES } from './constants';
import LanguageSelector from './components/LanguageSelector';
import { SectionType } from './types.d';
import TextArea from './components/TextArea';
import { useEffect } from "react";
import Translate from "./services/translate.js";
import { useDebounce } from './hooks/useDebounce';

function App() {
  const {
    fromLanguage,
    toLanguage,
    fromText,
    toText,
    loading,
    setFromText,
    setToText,
    interchangeLanguages,
    setFromLanguage,
    setToLanguage
  } = useState();

  const debounceFromText = useDebounce(fromText, 300);

  const handleClipboard = () => navigator.clipboard.writeText(toText);

  const handleSpeak = () => {
    const utterance = new SpeechSynthesisUtterance(toText);
    utterance.lang = VOICE_FOR_LANGUAGES[toLanguage];
    utterance.rate = 0.9;
    speechSynthesis.speak(utterance);
  }

  useEffect(() => {
    if (debounceFromText === "") return;
    Translate(fromLanguage, toLanguage, debounceFromText)
      .then(result => {
        if (result == null) return;
        setToText(result);
      });
  }, [debounceFromText, fromLanguage, toLanguage]);

  return (
    <Container fluid>
      <h1>Google Translate</h1>
      <Row>
        <Col>
          <Stack gap={2}>
            <LanguageSelector type={SectionType.From} value={fromLanguage} onChange={setFromLanguage} />
            <TextArea
              type={SectionType.From}
              value={fromText}
              onChange={setFromText}
            />
          </Stack>
        </Col>
        <Col xs='auto'>
          <Button variant="link" disabled={/*fromLanguage === AUTO_LANGUAGE || */ fromLanguage === toLanguage} onClick={interchangeLanguages}>
            &lt; &gt;
          </Button>
        </Col>
        <Col>
          <Stack gap={2}>
            <LanguageSelector type={SectionType.To} value={toLanguage} onChange={setToLanguage} />
            <div>
              <TextArea
                type={SectionType.To}
                value={toText}
                onChange={setToText}
                loading={loading}
              />
              <Button
                variant="link"
                onClick={() => handleClipboard()}>
                Copy
              </Button>
              <Button
                variant="link"
                onClick={() => handleSpeak()}>
                Speak
              </Button>
            </div>
          </Stack>
        </Col>
      </Row>
    </Container>
  )
}

export default App
