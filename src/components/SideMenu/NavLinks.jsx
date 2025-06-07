import { List, ListPlus, Receipt } from "@phosphor-icons/react"
import { theme } from "../../styles/theme"

export const navLinks = [
    {
        id: 1,
        label: 'DashBoard',
        path: '/admin',
        icon : <Receipt size={32} color={theme.colors.light} />

    },
    {
        id: 2,
        label: 'Eventos',
        path: '/admin/events',
        icon : <List size={32} color={theme.colors.light} />

    },
    {
        id: 3,
        label: 'Equipes',
        path: '/admin',
        icon : <ListPlus size={32} color={theme.colors.light} />

    },
    {
        id: 4,
        label: 'Inscrições',
        path: '/admin',
        icon : <ListPlus size={32} color={theme.colors.light} />

    },
    

]