import { StateCreator } from "zustand";

export type UserSlice = {
  name: string;
  age: number;

  updateName: (name: string) => void;
};

export const createUserSlice: StateCreator<UserSlice, [], [], UserSlice> = (
  set
) => ({
  name: "Kamil",
  age: 23,

  updateName: (name: string) => set({ name }),
});
