import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Form, Stack } from 'react-bootstrap';
import { useState } from './hooks/useStore';
import { AUTO_LANGUAGE } from './constants';
import LanguageSelector from './components/LanguageSelector';
import { SectionType } from './types.d';
import TextArea from './components/TextArea';
import { useEffect } from "react";
import Translate from "./services/translate.js";

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

  useEffect(() => {
    if(fromText==="") return;
    Translate(fromLanguage, toLanguage, fromText)
    .then(result=>{
      if(!result) return;
      setToText(result?.data.translation);
    })
  ;
  }, [fromText]);
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
          <Button variant="link" disabled={fromLanguage === AUTO_LANGUAGE || fromLanguage === toLanguage} onClick={interchangeLanguages}>
            &lt; &gt;
          </Button>
        </Col>
        <Col>
          <Stack gap={2}>
            <LanguageSelector type={SectionType.To} value={toLanguage} onChange={setToLanguage} />
            <TextArea
              type={SectionType.To}
              value={toText}
              onChange={setToText}
              loading={loading}
            />
          </Stack>
        </Col>
      </Row>
    </Container>
  )
}

export default App
