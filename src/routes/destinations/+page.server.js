import { PUBLIC_WP_REST_API_DOMAIN } from '$env/static/public'

// TODO: Better error handling + display of errors
// TODO: generalize this into a shared function

// https://rodneylab.com/using-fetch-sveltekit/
/** @type {import('../destinations/$types').PageServerLoad} */
export const load = async ({ url }) => {
    try {

        // WP REST API pagination, default params:
        let requestParams = new URLSearchParams({
            'per_page': '4',
            'page': '1'
            // TODO: add order...
        });

        console.log({page:url.searchParams.get('page')})

        // This server side fn receives url.searchParams. as UrlSearchParams object
        // Example /?page=1&search=<user-typed-in-search> => this is what we receive
        if (url.searchParams.get('page') !== null) {
            // @ts-ignore
            requestParams.set('page', url.searchParams.get('page')); // TODO: fix this, we check for null before, can't be null here
        }
        const apiReqUrl = `${PUBLIC_WP_REST_API_DOMAIN}/wp-json/wp/v2/destination?${requestParams.toString()}&_embed`
        console.log('Requesting:', apiReqUrl);
        const res = await fetch(apiReqUrl);
        const posts = await res.json();

        // TODO: bundle / move into own function
        // TODO: Add type via JSDoc typing or TypeScript
        // Fork of https://gist.github.com/ozknozsrt/e642e7b8116fd9a7f3799d082c576ef9, thx!
        // @ts-ignore
        let per_page = parseInt(requestParams.get('per_page'));
        // @ts-ignore
        let page = parseInt(requestParams.get('page')); // the current page
        let pagination = {};
        pagination.page = page;
        // @ts-ignore
        pagination.total = parseInt(res.headers.get('x-wp-total')); // TODO: throw error if null
        // @ts-ignore
        pagination.totalPages = parseInt(res.headers.get('x-wp-totalpages')); // TODO: throw error if null
        pagination.from = pagination.total ? (page - 1) * per_page + 1 : ' ';
        pagination.to = (page * per_page) > pagination.total ? pagination.total : page * per_page;
        pagination.prevPage = page > 1 ? page - 1 : '';
        pagination.nextPage = page < pagination.totalPages ? page + 1 : '';


        return { posts, pagination };

    } catch (error) {
        console.error(`Error in load function for /: ${error}`);
    }
};