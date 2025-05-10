<template>
  <div class="modal-mask" v-if="visible" @click.self="closeModal">
    <div class="modal-container">
      <button class="modal-close-btn" @click="closeModal">
        <font-awesome-icon icon="xmark" />
      </button>
      <component
        :is="currentComponent"
        @switch="switchComponent"
        @success="handleSuccess"
      />
    </div>
  </div>
</template>

<script>
import LoginForm from './LoginForm.vue';
import RegisterForm from './RegisterForm.vue';

export default {
  components: { LoginForm, RegisterForm },
  props: {
    visible: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      currentComponent: 'LoginForm',
      handleEsc: null
    };
  },
  mounted() {
    this.addEscapeKeyListener();
  },
  beforeUnmount() {
    this.removeEscapeKeyListener();
  },
  methods: {
    switchComponent(name) {
      this.currentComponent = name;
    },
    handleSuccess() {
      this.$emit('success');
    },
    closeModal() {
      this.$emit('update:visible', false);
    },
    addEscapeKeyListener() {
      this.handleEsc = (e) => {
        if (e.key === 'Escape') {
          this.closeModal();
        }
      };
      window.addEventListener('keydown', this.handleEsc);
    },
    removeEscapeKeyListener() {
      if (this.handleEsc) {
        window.removeEventListener('keydown', this.handleEsc);
        this.handleEsc = null;
      }
    }
  }
};
</script>