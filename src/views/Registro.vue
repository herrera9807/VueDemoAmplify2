<template>
  <div>
    <h1>Registro de Usuarios</h1>
    <form @submit.prevent="crearUsuario({email:$v.email.$model,password: pass1})">
      <input
        type="email"
        placeholder="Ingrese su correo"
        v-model="$v.email.$model"
        class="form-control mb-2"
      />

      <small class="text-danger d-block mb-2" v-if="!$v.email.required">Campo Requerido</small>
      <small class="text-danger d-block mb-2" v-if="!$v.email.email">Email no válido</small>

      <input
        type="password"
        placeholder="Ingrese su contraseña"
        v-model="pass1"
        class="form-control mb-2"
      />

      <small class="text-danger d-block mb-2" v-if="!$v.pass1.minLength">Mínimo 6 carácteres</small>
      <small class="text-danger d-block mb-2" v-if="!$v.pass1.required">Campo Requerido</small>

      <input
        type="password"
        placeholder="Confirme su contraseña"
        v-model="pass2"
        class="form-control mb-2"
      />
      <small class="text-danger d-block mb-2" v-if="!$v.pass2.sameAs">Contraseña no coincide</small>

      <button type="submit" :disabled="!desactivar" class="btn btn-outline-info">Registrar Usuario</button>
      <p v-if="error === 'auth/email-already-in-use'">email ya registrado</p>
      <p>{{(error === 'auth/email-already-in-use') ? 'Email ya utilizado' : 'Ocurrió un problema por favor intentar más tarde'}}</p>
      <!-- <p>{{error}}</p> -->
    </form>
    {{$v.email}}
  </div>
</template>

<script>
import { required, minLength, email, sameAs } from "vuelidate/lib/validators";
import { mapActions, mapState } from "vuex";
export default {
  name: "Registro",
  data() {
    return {
      email: "",
      pass1: "",
      pass2: "",
    };
  },
  created() {},
  methods: {
    ...mapActions(["crearUsuario"]),
  },
  computed: {
    ...mapState(["error"]),
    desactivar() {
      return (
        this.pass1 === this.pass2 &&
        this.pass1.trim() !== "" &&
        this.pass1.length > 5
      );
    },
  },
  validations: {
    email: { required, email },
    pass1: {
      required,
      minLength: minLength(6)
    },
    pass2: {
      sameAs: sameAs("pass1")
    }
  },
};
</script>