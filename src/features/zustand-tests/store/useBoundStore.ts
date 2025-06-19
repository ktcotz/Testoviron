import { create } from "zustand";
import { createUserSlice, UserSlice } from "./slices/userSlice";
import { CounterSlice, createCounterSlice } from "./slices/counterSlice";

export const useBoundStore = create<UserSlice & CounterSlice>()((...a) => ({
  ...createUserSlice(...a),
  ...createCounterSlice(...a),
}));
