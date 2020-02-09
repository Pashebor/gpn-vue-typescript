<template>
  <button :class="`button button--${mode || 'default'} ${className}`" @click="onClick">
      <slot></slot>
  </button>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import Component from 'vue-class-component';

@Component({
    props: {
        mode: String as PropType<string>,
        onClick: Function as PropType<Function>,
        className: String as PropType<string>
    }
})
export default class Button extends Vue {}
</script>

<style lang="scss">
    @import 'styles.scss';
</style>