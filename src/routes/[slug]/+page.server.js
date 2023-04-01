import { PUBLIC_WP_REST_API_DOMAIN } from '$env/static/public'

// TODO: Better (and general) error handling! 

// https://rodneylab.com/using-fetch-sveltekit/
/** @type {import('./$types').PageServerLoad} */
export const load = async ({ params }) => {
    try {

        console.log('[slug/+page.server.js] Requesting pages and posts for slug:', params.slug);

        // TODO: create own api endpoint or use /search or similiar to search in multiple post types
        // (or use array for more efficiency)

        // https://scottspence.com/posts/fetch-data-from-two-or-more-endpoints-in-svelte

        const reqUrlPages = `${PUBLIC_WP_REST_API_DOMAIN}/wp-json/wp/v2/pages?slug=${params.slug}`;
        const reqUrlDestinations =  `${PUBLIC_WP_REST_API_DOMAIN}/wp-json/wp/v2/destination?slug=${params.slug}`
        console.log('[slug/+page.server.js] Requesting:',{reqUrlPages,reqUrlDestinations} );
        const [pagesReq, destinationsReq] = await Promise.all([
            fetch(reqUrlPages),
            fetch(reqUrlDestinations),
        ]);

        console.log('Received', { pagesReqStatus: pagesReq.status, postsReqStatus: destinationsReq.status });

        if (!pagesReq.ok || !destinationsReq.ok) {
            // TODO: error handling needed? or covered by try/catch?
            // https://kit.svelte.dev/docs/errors
            console.error("Error in fetches, at least one fetch returned other status code than 200!");
            [pagesReq, destinationsReq].forEach(async (req) => {
                if (!req.ok) {
                    const errorMessageText = await req.json(); // TODO: always json?!
                    console.error('Request failed:', { req, errorMessageText });
                }
            });
            // TODO: return / throw error here?
        }

        // https://developer.mozilla.org/en-US/docs/Web/API/Response/ok
        let pages, destinations = [];
        if (pagesReq.ok) {
            pages = await pagesReq.json();
        }
        if (destinationsReq.ok) {
            destinations = await destinationsReq.json();
        }
        // console.log({ pages, posts })

        if (pages.length > 0) {
            return { entries: pages };
        } else if (destinations.length > 0) {
            return { entries: destinations };
        } else {
            console.log('No entries (destionations/pages) found...');
            return { entries: [] }  // TODO: what is the best way to cover this case (not found)?
        }
    } catch (error) {
        console.error(`Error in load function for /: ${error}`);
    }
};