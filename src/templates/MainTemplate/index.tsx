import type React from "react"
import { Container } from "../../components/Container"
import { Footer } from "../../components/Footer"
import { Logo } from "../../components/Logo"
import { Menu } from "../../components/Menu"

type MainTemplatePropos = {
  children: React.ReactNode;
}

export function MainTemplate({ children }: MainTemplatePropos) {
  console.log('main template component')
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      {children}

      <Container>
        <Footer />
      </Container>
    </>
  )
}


