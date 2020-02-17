<template>
  <div>
    <div class="app-button" @click="isOpen = true">Criar</div>
    <div class="modal" :class="{'is-active':isOpen}">
      <div class="modal-content">
        <span class="close" @click="isOpen = false">&times;</span>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // props: {
  //   close: {
  //     type: Boolean,
  //     required: false
  //   }
  // },
  watch: {
    close(isClose) {
      if (isClose && this.isOpen) {
        this.isOpen = false;
      }
    }
  },
  data() {
    return {
      isOpen: false
    };
  },
  methods:{
    close(){
      this.isOpen = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.app-form {
  .label {
    display: block;
    font-size: 18px;
    font-weight: bold;
  }

  .form-input {
    font-size: 17px;
    padding: 10px;
  }

  .form-control {
    font-size: 17px;
    margin-bottom: 10px;
  }
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  line-height: 8px;

  &:hover {
    cursor: pointer;
  }
}

.modal {
  display: none;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto; // ativa o scroll se precisar
  background-color: rgba(0, 0, 0, 0.4);

  &.is-active {
    display: block;
  }
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  // height: 3000px;
}
</style>