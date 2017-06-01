<template lang="pug">
.mdl-layout.mdl-js-layout.mdl-layout--fixed-drawer.mdl-layout--fixed-header
  include Navbar.pug
  .mdl-layout__content
    router-view
    include Footer.pug
</template>

<script>
import 'material-design-lite'

export default {}
</script>

<style lang="sass">
@import '~material-design-lite/src/material-design-lite.scss'

.section
  background: transparent

</style>
