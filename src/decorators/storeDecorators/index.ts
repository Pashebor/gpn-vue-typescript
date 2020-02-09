import { createDecorator } from 'vue-class-component';
import { mapGetters, mapActions, mapState } from 'vuex';

export const STATE_MODES = {
    ACTIONS: 'actions',
    GETTERS: 'getters',
    STATE: 'state'
}

export default function Mapper (
    type: string,
    query: { [key: string]: string }
) {
    return createDecorator(options => {
        if (!options.computed) {
              options.computed = {}
        }

        const assignToComputed = (map: Function): Object => options.computed = { ...options.computed, ...map() };

        switch (type) {
            case STATE_MODES.GETTERS:
                return assignToComputed(() => mapGetters(query));       
            case STATE_MODES.GETTERS:
                return assignToComputed(() => mapActions(query));
            case STATE_MODES.STATE:
                return assignToComputed(() => mapState(query));    
            default:
                return assignToComputed(() => mapActions(query));
        }
    })
}