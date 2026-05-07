export default function aplicarLimite(gastos, nuevoGasto) {
  const limite = 5000000;

  const totalEgresos = gastos
    .filter(gasto => gasto.tipo === 'egreso')
    .reduce((acum, gasto) => acum + parseFloat(gasto.monto), 0);

 if (
    nuevoGasto.tipo === 'egreso' &&
    totalEgresos + nuevoGasto.monto > limite
  ) {
    alert('Superaste el límite');
  }


}
