<template>
  <div class="primary-layout">
      <header>
          <NavMenu />
      </header>
      <main>
          <slot></slot>
      </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import NavMenu from 'components/root/nav-menu';

@Component({
    components: {
        NavMenu
    }
})
export default class PrimaryLayout extends Vue {}
</script>

<style lang="scss">
    @import 'styles.scss';
</style>