<template lang="pug">
div
  h1 Privacy and Terms
  p.
    This is a test
    I thnk it will work.

  button(@click='accept()') Accept
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
