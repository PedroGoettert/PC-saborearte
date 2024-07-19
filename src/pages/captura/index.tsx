import { EBook } from '../../components/E-book'
import { Footer } from '../../components/Footer'
import { Form } from '../../components/Form'
import {
  ContainerCapturePage,
  ContainerContentOne,
  ContainerContentTwo,
  ContentOne,
  ContentTwo,
  ImageMacarron,
} from './style'
import macarronOne from '../../assets/macarron.png'
import macarronTwo from '../../assets/macarronBlue.png'

import { CheckFat } from '@phosphor-icons/react'

export function CapturePage() {
  return (
    <ContainerCapturePage>
      <ContainerContentOne>
        <ContentOne>
          <h1>
            SEJA VIP NO CURSO DOMINANDO A TÉCNICA: A ARTE DE FAZER MACARONS E
            GARANTA BENEFÍCIOS EXCLUSIVOS!
          </h1>
          <p>
            Para ser VIP é super rápido e simples, é necessário apenas preencher
            os dados abaixo e entrar no grupo do WhatsApp.
          </p>

          <Form />
        </ContentOne>
      </ContainerContentOne>

      <ContainerContentTwo>
        <ImageMacarron src={macarronOne} alt="macarron" position="top" />
        <h2>Por que entrar no nosso Grupo VIP?</h2>

        <ContentTwo>
          <div>
            <CheckFat color="#EEF5E4" weight="fill" />

            <p>
              <span>Acesso Exclusivo:</span> Seja o primeiro a receber dicas,
              truques e segredos dos nossos especialistas em confeitaria.
            </p>
          </div>
          <div>
            <CheckFat color="#EEF5E4" weight="fill" />

            <p>
              <span> Notificações Antecipadas:</span> Receba atualizações e
              novidades sobre o lançamento do curso antes de todo mundo.
            </p>
          </div>
          <div>
            <CheckFat color="#EEF5E4" weight="fill" />

            <p>
              <span> Segredos Revelados:</span> Conheça as melhores receitas de
              macarons e segredos que só compartilhamos com nosso grupo VIP.
            </p>
          </div>
          <div>
            <CheckFat color="#EEF5E4" weight="fill" />

            <p>
              <span>Conteúdos Gratuitos:</span> Ganhe acesso a e-books, vídeos e
              materiais exclusivos que não estão disponíveis em nenhum outro
              lugar.
            </p>
          </div>
        </ContentTwo>

        <ImageMacarron src={macarronTwo} alt="macarron" position="bottoom" />
      </ContainerContentTwo>

      <EBook />

      <Footer />
    </ContainerCapturePage>
  )
}
