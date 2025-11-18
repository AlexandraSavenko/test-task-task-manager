import type { RootState } from "../store";

export const selectIsModalOpen = (state: RootState) => state.modal.isModalOpen;
export const selectFormType = (state: RootState) => state.modal.formType;