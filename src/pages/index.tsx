/* eslint-disable @next/next/no-img-element */
import * as S from '../styles/pages'
import Head from 'next/head'
import { errorCodes } from '../data/errorCodes'
import { useState, FormEvent, FocusEventHandler } from "react"
import useMatchMedia from '../hooks/useMatchMedia'

export default function Home() {

  const matchedWidthMobile = useMatchMedia('max-width: 550px')

  const [errorCode, setErrorCode] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  function handleSearch(event?: FormEvent<HTMLFormElement>) {
    event?.preventDefault()

    const result = errorCodes.find(({ error }) => error.code === errorCode)
    setErrorMessage(result ? result.error.message : `Código de erro ${errorCode} não encontrado`)
  }

  function handleBlur() {
    if (errorCode.length && matchedWidthMobile) {
      handleSearch()
    }
  }

  return (
    <>
      <Head>
        <title>myOnix</title>
      </Head>

      <S.Container>
        <S.Header>
          <S.LogoContainer>
            <S.HeaderImage src="/images/logo.svg" alt="myOnix" />

            <S.TitleHeader>MyOnix</S.TitleHeader>

          </S.LogoContainer>


          <S.Description>
            <S.LightText>Saiba o significado do código que aparece no painel do seu Chevrolet.</S.LightText>
          </ S.Description>
        </S.Header>

        <S.Content>
          <S.Form onSubmit={handleSearch}>

            <S.Input onBlur={handleBlur} maxLength={3} placeholder="Código do erro" type="text" inputMode='numeric' value={errorCode} onChange={event => setErrorCode(event.target.value)} />

            {
              matchedWidthMobile ? (<S.Button type='button' onClick={() => { setErrorCode('') }}>
                <img src="/images/close.svg" alt="Close" />
              </S.Button>) : (<S.Button>
                Pesquisar
              </S.Button>)
            }

          </ S.Form>

          {errorMessage && (
            <S.SearchResult>

              <S.TextSearchResult>
                {
                  errorMessage
                }

              </S.TextSearchResult>
            </S.SearchResult>
          )}

          <S.InfoText>
            <S.TextInfo>Confira a relação de códigos que podem aparecer no painel dos Chevrolet. Algumas mensagens podem não estar disponíveis para determinados modelos de veículos.</S.TextInfo>
          </S.InfoText>
        </S.Content>

      </S.Container>


      <S.textOnix>CHEVROLET</S.textOnix>

      <S.Onix>
        <img src="/images/car.png" alt="Imagem de um carro da chevrolet modelo onix na cor branca" />
      </S.Onix>

      <S.Footer>
        <S.Designed>
          <a href="https://github.com/birobirobiro">Code: birobirobiro</a>

          <a href="https://github.com/kennedybarros">Design: Kennedy</a>
        </S.Designed>

        <S.FooterLogo>
          <S.HeaderImage src="/images/logo.svg" alt="myOnix" />

          <S.TitleHeader>MyOnix</S.TitleHeader>
        </S.FooterLogo>
      </S.Footer>

    </>
  )
}
