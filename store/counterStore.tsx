import { create } from "zustand";

interface CounterState {
  count: number;
  name: string;
  increment: (valuer: number) => void;
}

export const useCounterStore = create<CounterState>((set, get) => ({
  count: 0,
  name: "Facundo Guardia",
  increment: (value: number) =>
    set((state) => ({
      count: state.count + value,
    })),
}));
