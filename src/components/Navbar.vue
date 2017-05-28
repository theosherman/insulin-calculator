<template lang="pug">

mixin nav(label, to, icon)
  router-link.nav-item.is-tab(to=to, exact)
    if icon
      +icon(icon)
    | &nbsp;
    =label

mixin icon(icon)
  span.icon.is-small: i.fa(class='fa-' + icon, aria-hidden='true')

nav.nav.has-shadow
  .container
    .nav-left
      .nav-item
        img(src='@/../static/syringe.png')
        | &nbsp;&nbsp;Insulin Calculator

    .nav-toggle(@click='toggleMenu()', :class="{'is-active': showMenu}")
      span
      span
      span

    .nav-right.nav-menu(:class="{'is-active': showMenu}")
      +nav('Calculator  ', '/', 'calculator')
      +nav('Settings', '/settings', 'cog')

</template>

<script>
export default {
  data: () => ({
    showMenu: false
  }),
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
    }
  }
}
</script>
