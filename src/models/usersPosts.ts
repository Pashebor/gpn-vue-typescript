import { ModelStateType } from 'models/_interfaces_';
import { Module, ActionTree } from 'vuex';

type Post = {
    id: number,
    title: string
}

type UsersPostsState = {
    posts: Post[],
    ready: boolean,
    sortBy: string
}

const initialState: UsersPostsState = {
    posts: [],
    sortBy: '',
    ready: false
}

const usersPosts: ModelStateType = {
    state: { ...initialState },
    actions: {
        async hydrateUserPosts({ commit }: { commit: any }) {
            try {
                const response = await this.$api.getUsersPosts();
                
                commit('setUsersPosts', response);
            } catch(error) {
                console.log(`UsersPosts model hydrate error: ${error}`);
            }
        } 
    },
    mutations: {
        setUsersPosts(state: UsersPostsState, payload: Post[]) {
            state.posts = payload;
        },
        setSort(state: UsersPostsState, payload: string) {
            state.sortBy = payload;
        }
    },
    getters: {
        getUsersPosts: (state: UsersPostsState) => {
            const { sortBy } = state;

            if (sortBy) {
                return state.posts.filter(({ title }) => (
                    title.toLowerCase().includes(sortBy.toLowerCase())
                ))
            }
            return state.posts;
        }
    }
};

export default usersPosts;