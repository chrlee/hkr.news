import { PUBLIC_HOSTED_URL } from '$env/static/public';

const url = PUBLIC_HOSTED_URL;
const initialPageQuery = `query {
  best: storyPage(name: BEST, first: 5){
    edges {
      cursor
      node {
        title
        url
        score
      }
    }
  },
  top: storyPage(name: TOP, first: 5){
    edges {
      cursor
      node {
        title
        url
        score
      }
    }
  },
  new: storyPage(name: NEW, first: 5){
    edges {
      cursor
      node {
        title
        url
        score
      }
    }
  },
  ask: storyPage(name: ASK, first: 5){
    edges {
      cursor
      node {
        title
        url
        score
      }
    }
  },
  show: storyPage(name: SHOW, first: 5){
    edges {
      cursor
      node {
        title
        url
        score
      }
    }
  },
  jobs: storyPage(name: JOB, first: 5){
    edges {
      cursor
      node {
        title
        url
        score
      }
    }
  }
}
`;

export const load = async ({ fetch }) =>
	await fetch(url + initialPageQuery)
		.then((res) => res.json())
		.then((out) => out.data);
export const ssr = false;
