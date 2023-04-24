import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";


export default function ListaCategoria({ categoria, deletar }) {


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell align="center">Descrição</TableCell>
            <TableCell align="center">Editar</TableCell>
            <TableCell align="center">Remover</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categoria.map((data) => (
            <TableRow key={data.id}>
              <TableCell component="th" scope="data">
                {data.nome}
              </TableCell>
              <TableCell align="left">{data.descricao}</TableCell>
              <TableCell align="center" padding="none">
                <Button variant="text" value="Editar">
                  Editar
                </Button>
              </TableCell>
              <TableCell align="center" padding="none">
                <Button variant="text" onClick={() => deletar(data.id)} >
                  Remover
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}