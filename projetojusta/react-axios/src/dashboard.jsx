import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Typography, Grid } from '@material-ui/core';
import { getData, getTaxas, getBeneficios, getRelatorio } from 'http://localhost:5500/api';
import './Dashboard.css';

function Dashboard() {
  const [chartData, setChartData] = useState({});
  const [taxas, setTaxas] = useState([]);
  const [beneficios, setBeneficios] = useState([]);
  const [relatorio, setRelatorio] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        const formattedData = formatData(data);
        setChartData(formattedData);
        
        const taxasData = await getTaxas();
        setTaxas(taxasData);
        
        const perfil = 'exemplo';
        const beneficiosData = await getBeneficios(perfil);
        setBeneficios(beneficiosData);
        
        const relatorioData = await getRelatorio();
        setRelatorio(relatorioData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Typography variant="h4">Sales Dashboard</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Line data={chartData} />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6">Taxas</Typography>
          {taxas.map(taxa => (
            <div key={taxa.id}>
              <Typography variant="body1">{taxa.nome}: {taxa.valor}</Typography>
            </div>
          ))}
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6">Benefícios</Typography>
          {beneficios.map(beneficio => (
            <div key={beneficio.id}>
              <Typography variant="body1">{beneficio.nome}: {beneficio.valor}</Typography>
            </div>
          ))}
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">Relatório</Typography>
          <div>{relatorio}</div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;