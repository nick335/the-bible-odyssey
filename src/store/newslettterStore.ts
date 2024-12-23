import {create} from 'zustand';

interface SuccessState {
  isSuccess: boolean;
  setSuccess: (value: boolean) => void;
}

const useSuccessStore = create<SuccessState>((set) => ({
  isSuccess: false,
  setSuccess: (value: boolean) => set({ isSuccess: value }),
}));

export default useSuccessStore;