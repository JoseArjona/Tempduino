<template>
  <div class="row justify--center">
    <div class="flex md6 lg4">
      <va-card stripe stripe-color="success">
        <va-card-title>
          <h3>
            Medicion de Temperatura ~ Son las : {{ hora }}:{{ minuto }} :
            {{ seconds }}
          </h3>
        </va-card-title>
        <div class="va-table-responsive row justify--center">
          <table class="va-table va-table--hoverable">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Temperatura</th>
                <th>Humedad</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="reg in registro" :key="reg.id">
                <td>{{ reg.fecha }}</td>
                <td>{{ reg.temp }}</td>
                <td>{{ reg.hum }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </va-card>
    </div>
  </div>
</template>

<script lang="ts">
// definimos la url de la api
const API_URL = "https://tempduino.000webhostapp.com/server.php?temp=0&hum=0";

export default {
  data: () => ({
    // data es una funcion que retorna los datos
    registro: [],
    hora: 0,
    minuto: 0,
    seconds: 0,
  }),
  /* created() {
    this.consulta();
  }, */
  methods: {
    async consulta() {
      // consulta la base de datos
      setInterval(() => {
        // establecemos un intervalo de tiempo para que se ejecute cada segundo
        fetch(API_URL) // hacemos una peticion a la API
          .then((res) => res.json())
          .then((json) => {
            console.log(json); // mostramos el resultado en consola
            this.registro = []; // limpiamos el array
            if (typeof json[0].success === "undefined") {
              // si no hay error
              this.registro = json; // guardamos los datos en el array
            }
          })
          .catch((err) => {
            // si hay error
            console.log(err); // mostramos el error en consola
          });
      }, 1000); // cada segundo
    },
    // funcion para obtener la hora actual
    setTime() {
      setInterval(() => {
        // establecemos un intervalo de tiempo para que se ejecute cada segundo
        const date = new Date(); // obtenemos la fecha actual
        this.hora = date.getHours(); // obtenemos la hora
        this.minuto = this.checkSingleDigit(date.getMinutes()); // obtenemos los minutos
        this.seconds = this.checkSingleDigit(date.getSeconds()); // obtenemos los segundos
      }, 1000);
    },
    checkSingleDigit(digit) {
      // funcion para obtener un digito con un solo digito
      return ("0" + digit).slice(-2);
    },
  },
  mounted() {
    // mounted es una funcion que se ejecuta cuando el componente se carga
    this.consulta();
    this.setTime();
  },
};
</script>

<style scoped>
.va-table-responsive {
  /* estilos para la tabla */
  overflow: auto;
}

.center {
  width: 100%;
  padding-left: 3%;
}
</style>
