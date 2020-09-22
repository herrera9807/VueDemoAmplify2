<template>
<div>
    <h1>Agergar</h1>
    <form @submit.prevent="agregarTarea($v.nombre.$model)">
        <input type="text" v-model="$v.nombre.$model" class="form-control mb-2" placeholder="Ingresa Tarea" />
        <button type="submit" class="btn btn-primary" :disabled="$v.$invalid || carga">Agregar</button>
    </form>
    <small class="text-danger d-block" v-if="!$v.nombre.required">Campo Requerido</small>
    <small class="text-danger d-block" v-if="!$v.nombre.minLength">Minimo 4 caracteres</small>
    {{$v}}
</div>
</template>

<script>
import {
    required,
    minLength
} from "vuelidate/lib/validators";
import {
    mapActions,
    mapState
} from "vuex";
export default {
    name: "Agregar",
    data() {
        return {
            nombre: "",
        };
    },
    methods: {
        ...mapActions(["agregarTarea"]),
    },
    validations: {
        nombre: {
            required,
            minLength: minLength(4),
        },
    },
    computed: {
        ...mapState(['carga'])
    },
};
</script>
