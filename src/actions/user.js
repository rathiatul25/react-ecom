import { DEMO_USER } from './types';

export const setDemoUser = (value) => {
	return {
		type: DEMO_USER,
		payload: value
	}
}
