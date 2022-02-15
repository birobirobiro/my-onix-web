import * as S from '../styles/pages'
import Head from 'next/head'
import { errorCodes } from '../data/errorCodes'
import { useState, FormEvent } from "react"

export default function Home() {

  const [errorCode, setErrorCode] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const result = errorCodes.find(({ error }) => error.code === errorCode)
    setErrorMessage(result ? result.error.message : 'Código de erro não encontrado')
  }

  return (
    <>
      <Head>
        <title>myOnix</title>
      </Head>
      <S.Container>
        <S.Logo>

          <S.Image src="/logo.svg" />

          <S.Title>myOnix</S.Title>
        </S.Logo>

        <S.Form onSubmit={handleSearch}>
          <S.Input placeholder="Digite o código de erro" type="text" value={errorCode} onChange={event => setErrorCode(event.target.value)} />

          <S.Button>Pesquisar</S.Button>
        </S.Form>
        {
          errorMessage && (
            <S.Result>
              {
                errorMessage
              }
            </S.Result>
          )
        }

      </S.Container>
    </>
  )
}
