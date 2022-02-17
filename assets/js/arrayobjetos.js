const radiologia = [
  {
    HORA: "11:00",
    ESPECIALISTA: "IGNACIO SCHULZ",
    PACIENTE: "FRANCISCA ROJAS",
    RUT: "9878782-1",
    PREVISION: "FONASA",
  },
  {
    HORA: "11:30",
    ESPECIALISTA: "FEDERICO SUBERCASEAUX",
    PACIENTE: "PAMELA ESTRADA",
    RUT: "15345241-3",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "15:00",
    ESPECIALISTA: "FERNANDO WURTHZ",
    PACIENTE: "ARMANDO LUNA",
    RUT: "16445345-9",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "15:30",
    ESPECIALISTA: "ANA MARIA GODOY",
    PACIENTE: "MANUEL GODOY",
    RUT: "17666419-0",
    PREVISION: "FONASA",
  },
  {
    HORA: "16:00",
    ESPECIALISTA: "PATRICIA SUAZO",
    PACIENTE: "RAMON ULLOA",
    RUT: "14989389-K",
    PREVISION: "FONASA",
  },
];

const traumalogia = [
  {
    HORA: "8:00",
    ESPECIALISTA: "MARIA PAZ ALTUZARRA",
    PACIENTE: "PAULA SANCHEZ",
    RUT: "15554774-5",
    PREVISION: "FONASA",
  },
  {
    HORA: "10:00",
    ESPECIALISTA: "RAUL ARAYA",
    PACIENTE: "ANG�LICA NAVAS",
    RUT: "15444147-9",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "10:30",
    ESPECIALISTA: "MARIA ARRIAGADA",
    PACIENTE: "ANA KLAPP",
    RUT: "17879423-9",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "11:00",
    ESPECIALISTA: "ALEJANDRO BADILLA",
    PACIENTE: "FELIPE MARDONES",
    RUT: "1547423-6",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "11:30",
    ESPECIALISTA: "CECILIA BUDNIK",
    PACIENTE: "DIEGO MARRE",
    RUT: "16554741-K",
    PREVISION: "FONASA",
  },
  {
    HORA: "12:00",
    ESPECIALISTA: "ARTURO CAVAGNARO",
    PACIENTE: "CECILIA MENDEZ",
    RUT: "9747535-8",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "12:30",
    ESPECIALISTA: "ANDRES KANACRI",
    PACIENTE: "MARCIAL SUAZO",
    RUT: "11254785-5",
    PREVISION: "ISAPRE",
  },
];
const dental = [
  {
    HORA: "8:30",
    ESPECIALISTA: "ANDREA ZU�IGA",
    PACIENTE: "MARCELA RETAMAL",
    RUT: "11123425-6",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "11:00",
    ESPECIALISTA: "MARIA PIA ZA�ARTU",
    PACIENTE: "ANGEL MU�OZ",
    RUT: "9878789-2",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "11:30",
    ESPECIALISTA: "SCARLETT WITTING",
    PACIENTE: "MARIO KAST",
    RUT: "7998789-5",
    PREVISION: "FONASA",
  },
  {
    HORA: "13:00",
    ESPECIALISTA: "FRANCISCO VON TEUBER",
    PACIENTE: "KARIN FERNANDEZ",
    RUT: "18887662-K",
    PREVISION: "FONASA",
  },
  {
    HORA: "13:30",
    ESPECIALISTA: "EDUARDO VI�UELA",
    PACIENTE: "HUGO SANCHEZ",
    RUT: "17665461-4",
    PREVISION: "FONASA",
  },
  {
    HORA: "14:00",
    ESPECIALISTA: "RAQUEL VILLASECA",
    PACIENTE: "ANA SEPULVEDA",
    RUT: "14441281-0",
    PREVISION: "ISAPRE",
  },
];

const primeraAtencionRadiologia = document.getElementById(
  "primeraAtencionRadiologia"
);
const primeraAtencionTraumalogia = document.getElementById(
  "primeraAtencionTraumalogia"
);
const primeraAtencionDental = document.getElementById("primeraAtencionDental");
const ultimaAtencionRadiologia = document.getElementById(
  "ultimaAtencionRadiologia"
);
const ultimaAtencionTraumalogia = document.getElementById(
  "ultimaAtencionTraumalogia"
);
const ultimaAtencionDental = document.getElementById("ultimaAtencionDental");
primeraAtencionRadiologia.innerHTML = `${radiologia[0].PACIENTE} - ${radiologia[0].PREVISION}`;
primeraAtencionTraumalogia.innerHTML = `${traumalogia[0].PACIENTE} - ${traumalogia[0].PREVISION}`;
primeraAtencionDental.innerHTML = `${dental[0].PACIENTE} - ${dental[0].PREVISION}`;

ultimaAtencionRadiologia.innerHTML = `${
  radiologia[radiologia.length - 1].PACIENTE
} - ${radiologia[radiologia.length - 1].PREVISION}`;
ultimaAtencionTraumalogia.innerHTML = `${
  traumalogia[traumalogia.length - 1].PACIENTE
} - ${traumalogia[traumalogia.length - 1].PREVISION}`;
ultimaAtencionDental.innerHTML = `${dental[dental.length - 1].PACIENTE} - ${
  dental[dental.length - 1].PREVISION
}`;
const table = document.getElementById("table");


for (let i = 0; i < radiologia.length; i++) {
  table.innerHTML = table.innerHTML + `<tr>
           <td> ${radiologia[i].HORA} </td>
           <td> ${radiologia[i].ESPECIALISTA} </td>
           <td>${radiologia[i].PACIENTE} </td>
           <td>${radiologia[i].RUT} </td>
           <td>${radiologia[i].PREVISION} </td>
           <td>RADIOLOGIA</td>
           </tr>`;
}

for (let i = 0; i < traumalogia.length; i++) {
  table.innerHTML = table.innerHTML + `<tr>
           <td> ${traumalogia[i].HORA} </td>
           <td> ${traumalogia[i].ESPECIALISTA} </td>
           <td>${traumalogia[i].PACIENTE} </td>
           <td>${traumalogia[i].RUT} </td>
           <td>${traumalogia[i].PREVISION} </td>
           <td>TRAUMATOLOGIA</td>
           </tr>`;
}

for (let i = 0; i < dental.length; i++) {
   table.innerHTML = table.innerHTML + `<tr>
            <td> ${dental[i].HORA} </td>
            <td> ${dental[i].ESPECIALISTA} </td>
            <td>${dental[i].PACIENTE} </td>
            <td>${dental[i].RUT} </td>
            <td>${dental[i].PREVISION} </td>
            <td>DENTAL</td>
            </tr>`;
}

/* table.innerHTML = `<tr><td>HORA</td>
<td>ESPECIALISTA</td>
<td>PACIENTE</td>
<td>@RUT</td>
<td>PREVISION</td>
</tr>`; */

/* dental.forEach(element =>table.innerHTML = `<tr>
<td> ${element.HORA} </td>
<td> ${element.ESPECIALISTA} </td>
<td>${element.PACIENTE} </td>
<td>${element.RUT} </td>
<td>${element.PREVISION} </td>
</tr>`); */
{
  /* <tr>
          <td>HORA</td>
          <td>ESPECIALISTA</td>
          <td>PACIENTE</td>
          <td>@RUT</td>
          <td>PREVISION</td>
</tr> */
}
