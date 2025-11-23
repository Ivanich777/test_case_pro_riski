import { Container, Box, Typography } from '@mui/material';

export default function Main() {
  return (
    <Container maxWidth="xl">
      {/* Заголовок */}
      <Box sx={{ py: 4 }}>
        <Typography variant="h1">Общая статистика</Typography>
      </Box>

      {/* Фильтры - будет компонент */}
      <Box sx={{ mb: 4 }}>
        {/* <Filters /> */}
      </Box>

      {/* Статистика - будет компонент */}
      <Box sx={{ mb: 4 }}>
        {/* <StatisticsCards /> */}
      </Box>

      {/* Таблица - будет компонент */}
      <Box>
        {/* <DealsTable /> */}
      </Box>
    </Container>
  );
}
