import { PageTypes } from '$lib';
import { error } from '@sveltejs/kit';

export const load = ({ params }) => {
	if (!Object.values(PageTypes).includes(params.slug)) {
		throw error(404, 'Not found');
	}
	return {
		props: {
			slug: params.slug
		}
	};
};
