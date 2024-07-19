import { ContainerEBook, ContentEBook } from './style'
import pictureEBook from '../../assets/newEbook.png'

export function EBook() {
  return (
    <ContainerEBook>
      <ContentEBook>
        <img src={pictureEBook} alt="ebook" />

        <div>
          <h2>
            Quer garantir um ebook de receitas com os recheios de macarons mais
            solicitados?
          </h2>
          <p>
            Os 20 primeiros que estiverem cadastrados no grupo VIP e realizarem
            sua compra na pré venda garantem o seu totalmente gratuito.
          </p>
        </div>
      </ContentEBook>
    </ContainerEBook>
  )
}
