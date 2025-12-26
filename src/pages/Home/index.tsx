import { Container } from "../../components/Container";
import { CountingDown } from "../../components/CountDown";
import { MainForm } from "../../components/MainForm";
import type { TaskStateModel } from "../../models/TaskStateModel";
import { MainTemplate } from "../../templates/MainTemplate";

export function Home() {

  return (
    <MainTemplate>
      <Container>
        <CountingDown />
      </Container>

      <Container>
        <MainForm />
      </Container>
    </MainTemplate>
  )
}