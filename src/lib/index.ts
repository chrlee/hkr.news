// place files you want to import through the `$lib` alias in this folder.
export enum PageTypes {
    BEST = 'best',
    TOP = 'top',
    NEW = 'new',
    ASK = 'ask',
    SHOW = 'show',
}

export const homePageQuery = `query {
    ${Object.entries(PageTypes).map(([key, val]) => { return (
        `${val}: storyPage(name: ${key}, first: 5){
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
        },`
    )})}
}`