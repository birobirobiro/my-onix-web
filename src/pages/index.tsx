/* eslint-disable @next/next/no-img-element */
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

  // return (
  //   <>
  //     <Head>
  //       <title>myOnix</title>
  //     </Head>
  //     <S.Container>
  //       <S.Logo>

  //         <S.Image src="/logo.svg" />

  //         <S.Title>myOnix</S.Title>
  //       </S.Logo>

  //       <S.Form onSubmit={handleSearch}>
  //         <S.Input placeholder="Digite o código de erro" type="text" value={errorCode} onChange={event => setErrorCode(event.target.value)} />

  //         <S.Button>Pesquisar</S.Button>
  //       </S.Form>
  //       {
  //         errorMessage && (
  //           <S.Result>
  //             {
  //               errorMessage
  //             }
  //           </S.Result>
  //         )
  //       }

  //     </S.Container>
  //   </>
  // )

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
            <S.LightText>Veja qual é o <S.DarkText>significado</S.DarkText> dos <S.DarkText>códigos</S.DarkText> de <S.DarkText>erro</S.DarkText> nos <S.DarkText>painéis</S.DarkText> dos <S.DarkText>Chevrolet</S.DarkText></S.LightText>
          </ S.Description>
        </S.Header>

        <S.Content>
          <S.Form>

            <S.Input placeholder="Código do erro" type="text" inputMode='numeric' />

            <S.Button>Pesquisar</S.Button>
          </ S.Form>

          {/* <div className="onix">
          <span>CHEVROLET</span>
          <img src="/images/car.png" alt="Imagem de um carro da chevrolet modelo onix na cor branca" />
        </div> */}

          <S.SearchResult>
            <S.TextSearchResult>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium odit non asperiores necessitatibus, fugiat minus harum dolores optio voluptate quaerat ex commodi fugit ratione voluptas voluptatem minima impedit sequi rerum.</S.TextSearchResult>
          </S.SearchResult>

          <S.InfoText>
            <S.TextInfo>Confira a relação de códigos que podem aparecer no painel dos Chevrolet. Algumas mensagens podem não estar disponíveis para determinados modelos de veículos.</S.TextInfo>
          </S.InfoText>
        </S.Content>


        <S.Footer>
          <S.Designed>
            <a href="https://github.com/kennedybarros">&copy; 2022 - Kennedy Barros</a>
          </S.Designed>
          <S.FooterLogo>
            <S.HeaderImage src="/images/logo.svg" alt="myOnix" />

            <S.TitleHeader>MyOnix</S.TitleHeader>
          </S.FooterLogo>
        </S.Footer>
      </S.Container>
    </>
  )
}
