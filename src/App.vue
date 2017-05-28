<template lang="pug">
div
  navbar
  
  router-view
  //- p.has-text-centered &copy; 2017 Chad Schmidt
</template>

<script>
export default {
  components: {
    'navbar': require('@/components/navbar')
  }
}
</script>

<style lang="sass">
@import "~bulma/sass/utilities/initial-variables"

$primary: $grey-light

$body-background: #F7F8F9

@import '~bulma'
@import '~font-awesome/css/font-awesome.css'
@import '~animate.css'

.section
  background: transparent

</style>
