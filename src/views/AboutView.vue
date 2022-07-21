<template>
  <section>
    <div class="contenedor">
      <h1 class="display" style="text-align: left !important">
        ACERCA DEL PROYECTO
      </h1>
    </div>
    <div class="contenedor">
      <div class="grid col-3">
        <div class="span-2 med-span-3">
          <div class="div-inf">
            <h2>Medidor de temperatura y humedad (IoT)</h2>
            <p style="text-align: justify">
              La practica consiste en crear una conexión entre la placa
              (arduino) , un servidor web (PHP) y a su vez con el front (VUE
              JS). Se desea hacer la medición de temperatura de forma periódica
              usando las herramientas necesarias tanto de software como hardware
              para su implementación. Como idea es almacenar la información
              periódica en un gestor de base de datos (MYSQL), para que el
              usuario pueda estar monitoreando en tiempo real la temperatura de
              forma inalámbrica.
            </p>
            <br />
            <span>GRUPO 6-B INGENIERIA EN SOFTWARE UPTAP - 2022</span>
          </div>
        </div>
        <div class="div-inf">
          <div>
            <img src="/public/tempduino.png" alt="ARDUINO" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
h1 {
  padding-left: 2.7%;
  font-size: 2em;
}
h2 {
  font-size: 2em;
  padding-bottom: 2%;
}
p {
  font-size: 23px;
  line-height: 27px;
  padding-bottom: 8%;
}
span {
  font-size: 20px;
  color: #876445;
  font-style: italic;
}
.display {
  font-weight: 700;
  font-size: 2rem;
  text-align: center;
}

.contenedor {
  max-width: 90%;
  width: var(1200px);
  margin: 20px auto;
  overflow: hidden;
}
.div-inf {
  padding: 40px;
  background: #fff;
  border-radius: 3px;
}
/* Resposivo */
.grid {
  display: grid;
  gap: 20px;
  margin-bottom: 20px;
}

.col-3 {
  grid-template-columns: repeat(3, 1fr);
}

.span-2 {
  grid-column: span 2;
}

/* TamaÃ±o Mediano - Tablets */
@media screen and (max-width: 992px) {
  .med-col-2 {
    grid-template-columns: repeat(2, 1fr);
  }

  .med-span-3 {
    grid-column: span 3;
  }
}

/* TamaÃ±o PequeÃ±o - Celulares */
@media screen and (max-width: 576px) {
  .peq-col-1 {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
