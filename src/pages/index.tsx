/* eslint-disable @next/next/no-img-element */
import * as S from '../styles/pages'
import Head from 'next/head'
import { errorCodes } from '../data/errorCodes'
import { useState, FormEvent } from "react"
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



        <title>myOnix</title>

        {/* Meta Tags */}

        <meta name="description" content="Saiba o significado do código que aparece no painel do seu Chevrolet." />

        <meta property="og:url" content="https://myonix.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="myOnix" />
        <meta property="og:description" content="Saiba o significado do código que aparece no painel do seu Chevrolet." />
        <meta property="og:image" content="https://i.ibb.co/yRjPn1w/OG.png" />
        <meta property='canonical' content='https://myonix.vercel.app/' />
        <meta property='author' content='João Inácio (Biro)' />
        <meta property='keywords' content='chevrolet, onix, painel, código, erro, prisma, mychevrolet, código erro painel, myonix, birobirobiro' />
        <meta property='robots' content='chevrolet, onix, painel, código, erro, prisma, mychevrolet, código erro painel, myonix, birobirobiro' />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="myonix.vercel.app" />
        <meta property="twitter:url" content="https://myonix.vercel.app/" />
        <meta name="twitter:title" content="myOnix" />
        <meta name="twitter:description" content="Saiba o significado do código que aparece no painel do seu Chevrolet." />
        <meta name="twitter:image" content="https://i.ibb.co/yRjPn1w/OG.png" />

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
