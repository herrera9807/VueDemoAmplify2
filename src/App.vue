<template>
  <div class="container mt-2">
    <div >
      <router-link to="/" v-if="existeUsuario" class="btn btn-dark mr-3">Inicio</router-link> 
      <router-link to="/registro" v-if="!existeUsuario" class="btn btn-dark mr-3">Registro</router-link> 
      <router-link to="/acceso" v-if="!existeUsuario" class="btn btn-dark mr-3">Acceso</router-link>
      <button @click="cerrarSesion" v-if="existeUsuario" class="btn btn-outline-secondary">Cerrar Sesion</button>
    </div>
    <router-view/>
  </div>
</template>

<script>
import {mapActions, getters, mapGetters} from 'vuex'
export default {
  methods: {
    ...mapActions(['cerrarSesion'])
  },
  computed: {
    ...mapGetters(['existeUsuario'])
  },
}
</script>