import { ContainerFooter } from './style'
import logoTati from '../../assets/logo.png'

export function Footer() {
  return (
    <ContainerFooter>
      <img src={logoTati} alt="Logo Sabor e Arte" />
    </ContainerFooter>
  )
}
