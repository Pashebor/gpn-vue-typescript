<template>
    <input @keyup="onChange" :class="`search ${className}`" />
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import Component from 'vue-class-component';

@Component({
  props: {
      className: String as PropType<string>,
      onChange: Function as PropType<(uuid: string) => void>
  }
})
export default class Search extends Vue {}
</script>

<style lang="scss">
  @import 'styles.scss';
</style>