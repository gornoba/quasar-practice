import { store } from 'quasar/wrappers';
import { createPinia } from 'pinia';
import { Router } from 'vue-router';
import debounce from 'lodash/debounce';
import { DebouncedFunc } from 'lodash';

/*
 * When adding new properties to stores, you should also
 * extend the `PiniaCustomProperties` interface.
 * @see https://pinia.vuejs.org/core-concepts/plugins.html#typing-new-store-properties
 */
declare module 'pinia' {
  export interface PiniaCustomProperties {
    readonly router: Router;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  export interface DefineStoreOptionsBase<S, Store> {
    // 모든 액션의 ms 값을 정의할 수 있음.
    debounce?: Partial<Record<keyof StoreActions<Store>, number>>;
  }
}

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store((/* { ssrContext } */) => {
  const pinia = createPinia();

  pinia.use(({ store }) => {
    const originalReset = store.$reset;

    store.$reset = () => {
      originalReset.call(store);
    };

    return store;
  });

  pinia.use(({ options, store }) => {
    if (options.debounce) {
      // 새로운 것으로 액션을 재정의 함.
      return Object.keys(options.debounce).reduce(
        (
          debouncedActions: Record<
            string,
            DebouncedFunc<(...args: any[]) => any>
          >,
          action: string,
        ) => {
          debouncedActions[action] = debounce(
            store[action],
            options.debounce ? options.debounce[action] : 500,
          );
          return debouncedActions;
        },
        {},
      );
    }
  });

  return pinia;
});
