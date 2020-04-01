<template>
  <div class="home">
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Home',
  methods: mapActions('auth', ['login']),
};
</script>
