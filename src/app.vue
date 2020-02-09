<template>
    <PrimaryLayout>
        <router-view></router-view>
    </PrimaryLayout>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import PrimaryLayout from 'components/layouts/primary';

@Component({
    components: {
        PrimaryLayout
    }
 })
export default class App extends Vue {}
</script>

<style lang="scss">
  @import 'assets/normalize.scss';
</style>