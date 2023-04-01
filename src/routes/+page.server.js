import { PUBLIC_WP_REST_API_DOMAIN } from '$env/static/public'

// TODO: Better error handling + display of errors
// TODO: generalize this into a shared function

// https://rodneylab.com/using-fetch-sveltekit/
/** @type {import('./$types').PageServerLoad} */
export const load = async () => {
    try {
        /*const variables: QueryLatestArgs = {
            baseCurrency: 'EUR',
            quoteCurrencies: ['CAD', 'GBP', 'IDR', 'INR', 'USD']
        };*/
        const apiReqUrl = `${PUBLIC_WP_REST_API_DOMAIN}/wp-json/wp/v2/destination?_embed`
        console.log('Requesting:', apiReqUrl);
        const response = await fetch(apiReqUrl);
        const posts = await response.json();
        return { posts };
    } catch (error) {
        console.error(`Error in load function for /: ${error}`);
    }
};