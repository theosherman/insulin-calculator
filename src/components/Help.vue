<template lang="pug">
div
  h1 Help
  p.
    This app helps you figure out your insulin dosage.
</template>

<script>
export default {
  methods: {
    accept() {
      localStorage.hasAgreedToTerms = true;
      this.$router.push('/')
    }
  }
}
</script>
