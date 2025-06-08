import dash from "../../assets/dash.svg"
import team from "../../assets/team.svg"
import calendar from "../../assets/calendar.svg"
import users from "../../assets/users.svg"

export const navLinks = [
    {
        id: 1,
        label: 'DashBoard',
        path: '/admin',
        icon : <img src={dash} />

    },
    {
        id: 2,
        label: 'Eventos',
        path: '/admin/events',
        icon : <img src={calendar} />

    },
    {
        id: 3,
        label: 'Equipes',
        path: '/admin',
        icon : <img src={team} />

    },
    {
        id: 4,
        label: 'Inscrições',
        path: '/admin',
        icon : <img src={users} />

    },
    

]