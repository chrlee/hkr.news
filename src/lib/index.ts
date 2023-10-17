import { PUBLIC_HOSTED_URL } from '$env/static/public';

// place files you want to import through the `$lib` alias in this folder.
export enum PageTypes {
	BEST = 'best',
	TOP = 'top',
	NEW = 'new',
	ASK = 'ask',
	SHOW = 'show'
}

export const pageQuery = (pageType: [string, PageTypes][], first: number) => `query {
    ${pageType.map(([key, val]) => {
			return `${val}: storyPage(name: ${key}, first: ${first}){
            edges {
                cursor
                node {
                    title
                    url
                    score
                    descendants
                    by
                    time
                }
            }
        }`;
		})}
}`;

export const fetchData = (query: string) =>
	fetch(PUBLIC_HOSTED_URL + query)
		.then((res) => res.json())
		.then((out) => out.data);
