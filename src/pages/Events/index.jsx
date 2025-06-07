import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { theme } from "../../styles/theme";
import { CircleIcon, Pencil } from "@phosphor-icons/react";
import { Container, EditButton } from "./styles";
import { useNavigate } from "react-router-dom";

export function Events() {
  const navigate = useNavigate();

  const events = [
    {
      id: 1,
      name: "Campeonato Regional de Futebol",
      teams: [
        "Time A",
        "Time B",
        "Time C",
        "Time D",
        "Time E",
        "Time F",
        "Time G",
        "Time H",
        "Time I",
        "Time J",
      ],
      status: "ativo",
      date: "2025-06-25",
    },
    {
      id: 2,
      name: "Torneio de Vôlei Interescolar",
      teams: ["Escola Azul", "Escola Roxa", "Escola Vermelha", "Escola Verde"],
      status: "inativo",
      date: "2025-05-28",
    },
    {
      id: 3,
      name: "Desafio de Basquete Juvenil",
      teams: ["Lobos", "Águias"],
      status: "ativo",
      date: "2025-08-07",
    },
    {
      id: 4,
      name: "Copa Municipal de Handebol",
      teams: ["Equipe Norte", "Equipe Sul", "Equipe Leste", "Equipe Oeste"],
      status: "ativo",
      date: "2025-06-22",
    },
    {
      id: 5,
      name: "Festival de Esportes de Areia",
      teams: ["Praianos", "Areia Branca"],
      status: "inativo",
      date: "2025-06-01",
    },
  ];

  function IsActive(status) {
    if (status === "ativo") {
      return (
        <>
          <CircleIcon
            size={20}
            weight="fill"
            color={`${theme.colors.success[500]}`}
            
          />
          <span>Ativo</span>
        </>
      );
    } else {
      return (
        <>
          
          <CircleIcon
            size={20}
            weight="fill"
            color={`${theme.colors.error[500]}`}
          />
          <span>Inativo</span>
        </>
      );
    }
  }

  function EditEvent(event) {
    navigate("/admin/events", { state: { event } });
  }

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ backgroundColor: `${theme.colors.gray[100]}` }}>
            <TableRow>
              <TableCell
                sx={{ color: `${theme.colors.primary[500]}`, fontWeight: 600 }}
              >
                Nome do Evento
              </TableCell>
              <TableCell
                sx={{ color: `${theme.colors.primary[500]}`, fontWeight: 600 }}
                align="center"
              >
                Total de Equipes
              </TableCell>
              <TableCell
                sx={{ color: `${theme.colors.primary[500]}`, fontWeight: 600 }}
                align="center"
              >
                Status
              </TableCell>
              <TableCell
                sx={{ color: `${theme.colors.primary[500]}`, fontWeight: 600 }}
                align="center"
              >
                Data
              </TableCell>
              <TableCell
                sx={{ color: `${theme.colors.primary[500]}`, fontWeight: 600 }}
                align="center"
              ></TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ backgroundColor: `${theme.colors.gray[100]}` }}>
            {events.map((event) => (
              <TableRow
                key={event.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  sx={{
                    color: `${theme.colors.gray[700]}`,
                    fontWeight: 200,
                    fontSize: "14px",
                  }}
                  component="th"
                  scope="row"
                >
                  {event.name}
                </TableCell>
                <TableCell
                  sx={{
                    color: `${theme.colors.gray[700]}`,
                    fontWeight: 200,
                    fontSize: "14px",
                  }}
                  align="center"
                >
                  {event.teams.length}
                </TableCell>
                <TableCell
                  sx={{
                    color: `${theme.colors.gray[700]}`,
                    fontWeight: 200,
                    display: "flex",
                    gap: "5px",
                    fontSize: "14px",
                    paddingBottom: "32px",
                    
                  }}
                  align="center"
                >
                  {IsActive(event.status)}
                </TableCell>
                <TableCell
                  sx={{
                    color: `${theme.colors.gray[700]}`,
                    fontWeight: 200,
                  }}
                  align="center"
                >
                  {event.date}
                </TableCell>
                <TableCell
                  sx={{
                    color: `${theme.colors.gray[700]}`,
                    fontWeight: 200,
                  }}
                  align="center"
                >
                  <EditButton onClick={() => EditEvent(event)}>
                    <Pencil />
                  </EditButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
