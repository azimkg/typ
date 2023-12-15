import { store } from 'configs/store/store';
import { useDispatch } from 'react-redux';


type AppDispatch = typeof store['dispatch']

export const useAppDispatch: () => AppDispatch = useDispatch;
