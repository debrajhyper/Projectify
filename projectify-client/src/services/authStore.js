import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';


const authStore = (set) => ({
    isLoggedIn: false,
    setIsLoggedIn: () => set((state) => ({ isLoggedIn: !state.isLoggedIn }))
})

const useAuthStore = create(
    devtools(
        persist(
            authStore,
            {
                name: "auth"
            }
        )
    )
)

export default useAuthStore;