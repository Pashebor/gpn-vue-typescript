<template>
  <div class="main">
    <Search :on-change="searchHandler" className="main__search" />
    <div class="main-wrapper">
      <div class="main-block">
        <PostsList :posts="posts" :add-to-bookmarks="addToBookmarks"/>
      </div>
      <div class="main-block">
      </div>
    </div>    
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import Component from 'vue-class-component';

import PostsList, { PostType } from 'views/main/posts-list';
import Search from 'views/main/search';
import Mapper, { STATE_MODES } from 'decorators/storeDecorators';

@Component({
  components: {
    PostsList,
    Search
  }
})
export default class MainView extends Vue {
  hydratePosts: undefined;
  posts: undefined | PostType[];
  sortBy: undefined | Function;

  @Mapper(STATE_MODES.GETTERS, { posts: 'getUsersPosts'})

  @Mapper(STATE_MODES.ACTIONS, { hydratePosts: 'hydrateUserPosts' })


  mounted() {
      console.log(this);
      
      if (this.posts && this.posts.length) return;

      this.hydratePosts;
  }

  public addToBookmarks(post: PostType): void {
      console.log(post);
  }

  public searchHandler({ currentTarget }: { currentTarget: HTMLInputElement }) {
      this.$store.commit('setSort', currentTarget.value);
  }
}
</script>

<style lang="scss">
  @import 'styles.scss';
</style>