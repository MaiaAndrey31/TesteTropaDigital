import { Outlet } from 'react-router-dom'
import { SideMenu } from '../../components/SideMenu'
import { Container } from './styles'
import useAuth from '../../contexts/useAuth'
import { useState, useEffect } from 'react'
import { MenuIcon } from 'lucide-react'

export function AdminLayout() {
  const { user } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(true)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024)

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 1024
      setIsMobile(mobile)
      setIsMenuOpen(!mobile)
    }

    handleResize()

    window.addEventListener('resize', handleResize)
    
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <Container $isMenuOpen={isMenuOpen}>
      {isMobile && (
        <button 
          onClick={toggleMenu}
          style={{
            position: 'fixed',
            top: '16px',
            left: '16px',
            zIndex: 1100,
            background: 'white',
            border: 'none',
            borderRadius: '8px',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            cursor: 'pointer',
          }}
        >
          <MenuIcon size={24} />
        </button>
      )}
      
      <SideMenu isOpen={isMenuOpen} onClose={() => isMobile && setIsMenuOpen(false)} />
      
      <main>
        <h4>Bem vindo de volta, <span>{user?.name}</span></h4>
        <h3>Todos eventos</h3>
        <section>
          <Outlet />
        </section>
      </main>
    </Container>
  )
}
