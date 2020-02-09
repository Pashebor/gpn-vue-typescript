<template>
  <router-link class="link" :to="{ path: to }">
      <slot></slot>
  </router-link>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
    props: {
        to: String
    }
})
export default class Link extends Vue {}
</script>

<style lang="scss">
    @import 'styles.scss';
</style>