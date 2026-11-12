import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useUserStore = create(
    persist(
        (set) => ({
            session: undefined,
            setSession: (session) => set({ session }),
            clearSession: () => set({ session: undefined }),
        }),
        {
            name: 'user-storage',
        }
    )
)