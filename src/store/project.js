import { create } from 'zustand'

const useStore = create((set)=>({
    count:0 ,
    plus: () => set((state)=>({count:state.count+1})),
    minus: () => set((state)=>({count:state.count-1}))
}))

export default useStore ;