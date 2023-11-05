import * as modals from '../modalType';

export type ModalTypes = (typeof modals)[keyof typeof modals];