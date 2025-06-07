import { Outlet } from 'react-router-dom'
import { SideMenu } from '../../components/SideMenu'
import { Container } from './styles'

export function AdminLayout() {
  

  return  (
    <Container>
      <SideMenu />
      <main>
        <section>
          <Outlet />
        </section>
      </main>
    </Container>
  ) 
}
