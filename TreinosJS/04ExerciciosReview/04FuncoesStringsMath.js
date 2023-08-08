// Função, String, Math

function converterHorario(horario) {
  let [hora, minuto] = horario.split(":")
  let hora12 = hora % 12 || 12;
  let time = "AM"

  if(hora > 12) {
    time = "PM"
  }

  return console.log(`${hora12}:${minuto} ${time}`)
}

converterHorario("22:30");
converterHorario("01:30");
converterHorario("12:00");
converterHorario("23:59");
converterHorario("00:30");