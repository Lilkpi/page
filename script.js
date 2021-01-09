
// - - - -
// Variables
// - - - -
document.addEventListener('DOMContentLoaded', () => {
  const FECHA_LIMITE = new Date('12/25/2021 00:00 AM');

// DOM
const SPAN_DIAS = document.querySelector("span#dias");
const SPAN_HORAS = document.querySelector("span#horas");
const SPAN_MINUTOS = document.querySelector("span#minutos");
const SPAN_SEGUNDOS = document.querySelector("span#segundos");

// Milisegundos para los calculos
const MILISEGUNDOS_DE_UN_SEGUNDO = 1000;
const MILISEGUNDOS_DE_UN_MINUTO = MILISEGUNDOS_DE_UN_SEGUNDO * 60;
const MILISEGUNDOS_DE_UNA_HORA = MILISEGUNDOS_DE_UN_MINUTO * 60;
const MILISEGUNDOS_DE_UN_DIA = MILISEGUNDOS_DE_UNA_HORA * 24;

// - - - -
// FUNCIONES
// - - - -

function ActualizarCuentaRegresiva(){
  // CALCULOS
  const AHORA = new Date()
  const DURACION = FECHA_LIMITE - AHORA;
  
  const DIAS_FALTANTES = Math.floor(DURACION / MILISEGUNDOS_DE_UN_DIA);
  
  const HORAS_FALTANTES = Math.floor((DURACION % MILISEGUNDOS_DE_UN_DIA) / MILISEGUNDOS_DE_UNA_HORA);
  
  const MINUTOS_FALTANTES = Math.floor((DURACION % MILISEGUNDOS_DE_UNA_HORA) / MILISEGUNDOS_DE_UN_MINUTO);
  
  const SEGUNDOS_FALTANTES = Math.floor((DURACION % MILISEGUNDOS_DE_UN_MINUTO) / MILISEGUNDOS_DE_UN_SEGUNDO);

  // Renderizado
  SPAN_DIAS.textContent = DIAS_FALTANTES;
  SPAN_HORAS.textContent = HORAS_FALTANTES;
  SPAN_MINUTOS.textContent = MINUTOS_FALTANTES;
  SPAN_SEGUNDOS.textContent = SEGUNDOS_FALTANTES;
}

// - - - -
// INIT
// - - - -
ActualizarCuentaRegresiva();
setInterval(ActualizarCuentaRegresiva, MILISEGUNDOS_DE_UN_SEGUNDO)});