import {create} from "zustand";
import bots from "../utils/botData.json";

// Создаем хранилище Zustand
const useBotStore = create((set) => ({
  bots: bots,
  editBot: (index, newData) =>
    set((state) => {
      const newObjects = [...state.bots];
      newObjects[index] = { ...newObjects[index], ...newData };
      return { bots: newObjects };
    }),
}));

export default useBotStore
