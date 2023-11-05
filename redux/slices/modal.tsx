import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ModalTypes } from '@/constants/types/modal';

export type ModalStateType = {
  modalType?: ModalTypes;
  modalProps?: Record<string, any>;
};

const initialState: ModalStateType = {
  modalType: null,
  modalProps: {},
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<ModalStateType>) => {
      state.modalType = action.payload.modalType;
      state.modalProps = action.payload.modalProps || {};
    },
    closeModal: (state) => {
      state.modalType = null;
      state.modalProps = {};
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
