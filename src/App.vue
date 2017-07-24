<template lang="pug">
.mdl-layout.mdl-js-layout.mdl-layout--fixed-drawer.mdl-layout--fixed-header
  include Navbar.pug
  .mdl-layout__content
    router-view
    include Footer.pug
</template>

<style lang="sass">
.section
  background: transparent

</style>
