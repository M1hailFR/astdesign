import { defineStore } from "pinia";

interface WindowState {
  windowS: number;
  windowW: number;
  _updateScroll: ((this: Window, ev: Event) => void) | null;
  _updateWidth: ((this: Window, ev: Event) => void) | null;
  welcome: string;
}

/**
 * Хранилище приложения для управления глобальными состояниями.
 */
export const useApplicationStore = defineStore("application", {
  state: (): WindowState => ({
    windowS: 0,
    windowW: 0,
    _updateScroll: null,
    _updateWidth: null,
    welcome: "Привет!",
  }),

  actions: {
    initializeWindowState() {
      // Установить начальные значения
      this.windowS = window.scrollY;
      this.windowW = window.innerWidth;

      // Обработчики событий
      const updateScroll = () => {
        this.windowS = window.scrollY;
      };
      const updateWidth = () => {
        this.windowW = window.innerWidth;
      };

      window.addEventListener("scroll", updateScroll);
      window.addEventListener("resize", updateWidth);

      this._updateScroll = updateScroll;
      this._updateWidth = updateWidth;
    },

    destroyWindowStateListeners() {
      if (this._updateScroll) {
        window.removeEventListener("scroll", this._updateScroll);
        this._updateScroll = null;
      }
      if (this._updateWidth) {
        window.removeEventListener("resize", this._updateWidth);
        this._updateWidth = null;
      }
    },
  },

  getters: {},
});
