import { createContext } from 'react';

import type { IModalContext } from '../helpers';

const ModalContext = createContext<IModalContext | null>(null);

export default ModalContext;
