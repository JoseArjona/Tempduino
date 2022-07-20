<template>
  <div class="row justify--center">
    <div class="flex md6 lg4">
      <va-card stripe stripe-color="success">
        <va-card-title>Medicion de Temperatura por Dia</va-card-title>
        <div class="va-table-responsive row justify--center">
          <table class="va-table va-table--hoverable">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Temperatura</th>
                <th>Humedad</th>
                <!--  <th>Jueves</th>
                <th>Viernes</th> -->
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
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      registro: [],
    };
  },
  created: function () {
    this.consulta();
  },
  methods: {
    consulta() {
      let msg ;
      fetch("http://localhost/Servidor/")
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          this.registro = [];
          if (typeof json[0].success === "undefined") {
            this.registro = json;
          }
          msg="EN LINEA";
          return msg;
        })
        .catch((err) => {
          msg = "Desconectado";
          console.log(err);
          return msg;
        });
    },
  },
});
</script>

<style scoped>
.va-table-responsive {
  overflow: auto;
}

.center {
  width: 100%;
  padding-left: 3%;
}
</style>
