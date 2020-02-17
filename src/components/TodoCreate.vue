<template>
  <modal ref="modal">
    <form class="app-form">
      <div class="form-control">
        <label class="label">Título</label>
        <input type="text" class="form-input" v-model="form.title" />
      </div>
      <div class="form-control">
        <label class="label">Descrição</label>
        <textarea class="form-input" v-model="form.description" cols="30" rows="5"></textarea>
      </div>
      <div class="app-error">
        <div class="form-error">{{formError}}</div>
      </div>
      <button @click="submitForm()" type="button" class="app-button is-primary">Add</button>
    </form>
  </modal>
</template>

<script>
import Modal from "@/components/Modal";
export default {
  components: {
    Modal
  },
  data() {
    return {
      forceClose: false,
      form: {
        title: "",
        description: ""
      },
      formError: ""
    };
  },
  computed: {
    isFormValid() {
      return this.form.title.length > 8 && this.form.description.length > 10
        ? true
        : false;
    }
  },
  methods: {
    submitForm() {
      if (this.isFormValid) {
        this.$emit("formSubmitted", { ...this.form });
        this.resetForm();
        this.forceClose = true;
        this.$refs.modal.close();
        this.formError = "";
        return;
      }
      this.formError =
        "O título precisa ter + de 8 caracteres e a descrição + de 10";
    },
    resetForm() {
      this.form.title = "";
      this.form.description = "";
    }
  }
};
</script>

<style lang="scss" scoped>
.form-error {
  margin: 5px 0px 10px 0px;
}
</style>