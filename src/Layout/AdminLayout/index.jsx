import { Outlet } from 'react-router-dom'
import { SideMenu } from '../../components/SideMenu'
import { Container } from './styles'
import useAuth from '../../contexts/useAuth'

export function AdminLayout() {

  const { user } = useAuth()
  

  return  (
    <Container>
      <SideMenu />
      <main>
        <h4>Bem Vindo de volta <span>{user?.name}</span></h4>
        <h3>Todos eventos</h3>
        <section>
          <Outlet />
        </section>
      </main>
    </Container>
  ) 
}
