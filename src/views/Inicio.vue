<template>
  <div>
    <h1>Ruta Protegida</h1>
    {{carga}}
    <router-link to="/agregar">
      <button class="btn btn-primary mb-2">Agregar</button>
    </router-link>
    <div v-if="carga" class="text-center mt-5">
      <h3>Cargando...</h3>
      <pulse-loader :loading="carga"></pulse-loader>
    </div>
    <ul class="list-group">
      <li v-for="(item, index) in tareas" :key="index" class="list-group-item">
        {{ item.id }} - {{ item.nombre }}
        <router-link :to="{ name: 'Editar', params: { id: item.id } }" class="float-right ml-2">
          <button class="btn btn-warning">Editar</button>
        </router-link>
        <button @click="eliminarTarea(item.id)" class="btn btn-danger float-right">Eliminar</button>
      </li>
    </ul>
  </div>
</template>

<script>
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import { mapActions, mapState } from "vuex";

export default {
  name: "Inicio",
  computed: {
    ...mapState(["usuario", "tareas", "carga"]),
  },
  methods: {
    ...mapActions(["getTareas", "eliminarTarea"]),
  },
  created() {
    this.getTareas();
  },
  components:{
    PulseLoader
  }
};
</script>
