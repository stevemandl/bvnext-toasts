// Toast Store
import { defineStore } from 'pinia';

export interface Toast {
  id: string;
  title: string;
  priority: number;
  msg: string;
  active: boolean;
  autoHide: boolean;
  variant: string;
}

interface State {
  toasts: { [x: string]: Toast };
  id: number;
}

export const useToastStore = defineStore('toast', {
  state: (): State => ({
    toasts: {}, // ids are keys
    id: 0,
  }),
  getters: {
    getToastById: (state) => {
      return (id: string) => state.toasts[id];
    },
    getToasts: (state) => Object.values(state.toasts),
  },
  actions: {
    addToast(toast: Toast) {
      // set default values
      const newToast = {
        ...{
          active: true,
          autoHide: true,
          id: this.getUID(),
          variant: 'default',
        },
        ...toast,
      };
      this.toasts[newToast.id] = newToast;
    },
    deleteToast(id: string) {
      delete this.toasts[id];
    },
    deleteInactiveToasts() {
      Object.values(this.toasts)
        .filter((v) => !v.active)
        .forEach((v) => {
          this.deleteToast(v.id);
        });
    },
    getUID() {
      return this.id++;
    },
  },
});
