<template>
  <div class="nav-menu">
      <ul class="nav-menu-list">
        <LinkButton to="/">
            <li class="nav-menu-list__item">
                Posts list
            </li>
        </LinkButton>
        <LinkButton to="/history">
            <li class="nav-menu-list__item">
                History
            </li>
        </LinkButton>
    </ul>    
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import LinkButton from 'components/common/link';

@Component({
    components: {
        LinkButton
    }
})
export default class NavMenu extends Vue {}
</script>

<style lang="scss">
    @import 'styles.scss';
</style>