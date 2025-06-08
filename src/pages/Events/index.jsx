import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from '@mui/material/TablePagination';

import { theme } from "../../styles/theme";
import { CircleIcon, DotsThreeOutlineVerticalIcon } from "@phosphor-icons/react";
import { Container, EditButton, HeaderContainer, SearchInput, AddButton } from "./styles";
import { MagnifyingGlassIcon, PlusIcon } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const [searchTerm, setSearchTerm] = useState('');

  const filteredEvents = events.filter(event => 
    event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.teams.some(team => team.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const startIndex = page * rowsPerPage;
  const paginatedEvents = filteredEvents.slice(startIndex, startIndex + rowsPerPage);

  function EditEvent(event) {
    navigate("/admin/events", { state: { event } });
  }

  return (
    <Container>
      <HeaderContainer>
        <SearchInput>
          <MagnifyingGlassIcon size={20} />
          <input 
            type="text" 
            placeholder="Buscar eventos" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Buscar eventos"
          />
        </SearchInput>
        <AddButton>
          <PlusIcon size={20} weight="bold" />
          <span>Inserir novo</span>
        </AddButton>
      </HeaderContainer>
      <div style={{ width: '100%', overflowX: 'auto' }}>
        <TableContainer component={Paper} sx={{ minWidth: 650 }}>
          <Table aria-label="tabela de eventos" sx={{ minWidth: 650 }}>
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
            {paginatedEvents.map((event) => (
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
                  <DotsThreeOutlineVerticalIcon size={24} weight="fill" />


                  </EditButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        
      </TableContainer>
      </div>
      <div style={{ width: '100%', overflowX: 'auto' }}>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredEvents.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage="Itens por página:"
          labelDisplayedRows={({ from, to, count }) => `${from}-${to} de ${count}`}
          sx={{
            '& .MuiTablePagination-toolbar': {
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 1,
              '@media (max-width: 600px)': {
                '& > :nth-of-type(1)': {
                  order: 2,
                  flexBasis: '100%',
                  textAlign: 'center',
                },
                '& > :nth-of-type(2)': {
                  order: 1,
                },
                '& > :nth-of-type(3)': {
                  order: 3,
                },
              },
            },
          }}
        />
      </div>
    </Container>
  );
}
