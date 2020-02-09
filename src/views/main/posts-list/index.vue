<template>
    <div class="posts-list">
        <Card v-for="post in posts" :key="post.id">
            <div class="posts-list-wrapper">
                <img class="posts-list__image" :src="post.thumbnailUrl" alt="user.title">
                <div class="posts-list__title">{{post.title}}</div>
                <Button className="posts-list__plus" :on-click="addToBookmarks" >+</Button>
            </div>
        </Card>
    </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import Component from 'vue-class-component';

import Card from 'components/common/card';
import Button from 'components/common/button';

export type PostType = {
    id: number,
    thumbnailUrl: string,
    title: string
}

@Component({
  components: {
    Card,
    Button
  },
  props: {
      posts: Array as PropType<Array<PostType>>,
      addToBookmarks: Function as PropType<(uuid: string) => void>
  }
})
export default class PostsList extends Vue {}
</script>

<style lang="scss">
  @import 'styles.scss';
</style>