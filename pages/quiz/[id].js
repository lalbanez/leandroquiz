/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/screens/Quiz';

export default function QuizDaGaleraPage({ dbExterno }) {
  return (
    <div>

      {/* <pre style={{ color: 'black' }}>
        {JSON.stringify(dbExterno, null, 4)}
  </pre> */}
      <ThemeProvider theme={dbExterno.theme}>
        <QuizScreen
          externalQuestions={dbExterno.questions}
          externalBg={dbExterno.bg}
        />
      </ThemeProvider>

    </div>
  );
}

export async function getServerSideProps(context) {
  const projectName = context.query.id;
  const dbExterno = await fetch(`https://${projectName}.vercel.app/api/db`)
    .then((respostaDoServer) => {
      if (respostaDoServer.ok) {
        return respostaDoServer.json();
      }
      throw new Error('Falha ao pegar dados');
    })
    .then((respostaConvertidaEmObjeto) => respostaConvertidaEmObjeto)
    .catch((err) => {
      console.error(err);
    });
  console.log('dbExterno', dbExterno);
  return {
    props: {
      dbExterno,
    },
  };
}
