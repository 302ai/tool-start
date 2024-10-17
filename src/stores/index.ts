import { create } from "zustand";

// import { createJSONStorage, persist } from "zustand/middleware";
import { ConfigStore, createConfigSlice } from "./slices/config-slice";

// type AppStore = ConfigStore & OtherStore;

// export const useAppStore = create<AppStore>()(
//   persist(
//     (...a) => ({
//       ...createConfigSlice(...a),
//     }),
//     {
//       name: "app-store",
//       storage: createJSONStorage(() => sessionStorage),
//     }
//   )
// );

type AppStore = ConfigStore;

export const useAppStore = create<AppStore>((...a) => ({
  ...createConfigSlice(...a),
}));
