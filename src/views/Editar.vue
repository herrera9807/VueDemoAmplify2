<template>
  <div>
    <h1>Editar</h1>
    <form @submit.prevent="editarTarea(tarea)" >
      <input type="text" v-model="$v.tarea.nombre.$model" class="form-control mb-2" />
      <button class="btn btn-warning">Editar</button>
    </form>
    <small class="text-danger" v-if="!$v.tarea.nombre.required">Campo Requerido</small>
    <small class="text-danger d-block" v-if="!$v.tarea.nombre.minLength">Mínimo 4 carácteres</small>
    {{$v.tarea.nombre}}
  </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";
import { mapActions, mapState } from "vuex";
export default {
  name: "Editar",
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  created() {
    this.getTarea(this.id);
  },
  methods: {
    ...mapActions(["getTarea", "editarTarea"]),
  },
  computed: {
    ...mapState(["tarea"]),
  },
  validations: {
    tarea: {
      nombre: {
        required,
        minLength: minLength(4)
      }
    }
  }
};
</script>
