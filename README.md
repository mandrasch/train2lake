# train2lake

SvelteKit demo site for headless CMS setup with WP + WP REST API. Just for learning / demo purposes.

TODO: Screenshot

## Local setup

```bash
npm install
# Copy .env.example to .env
npm run dev -- --open
```

⚠️ Content is fetched from my WordPress demo backend XXX. Please use your own backend if you run big tests. The backend API URL can be configured in `.env`-file.

## Local backend instead of live site (optional)

Setup your own local WordPress, e.g. with DDEV. See for example https://github.com/mandrasch/sveltekit-headless-wp-rest-demo-backend and switch in `.env`-file to the following:

```bash
# .env
PUBLIC_WP_REST_API_DOMAIN=https://sveltekit-headless-wp-rest-demo.ddev.site
```

## How was this created?

```bash
# Install SvelteKit, JSDoc comment typing by now
# + vitest, playwright prettier
npm create svelte@latest .
npm i

# Prettier support for svelte
npm i -D prettier-plugin-svelte prettier

# Add picocss + SCSS https://joyofcode.xyz/using-pico-css-with-svelte
npm i -D @picocss/pico sass svelte-preprocess

# Gutenberg styles:
npm i -D @wordpress/block-library --save

# Loading spinner:
npm i --D svelte-loading-spinners
```

## Deployment

- Add `.env` values on Vercel (https://vercel.com/docs/concepts/projects/environment-variables)

## Acknowledgements / Resources used

Inspired by Bahn zum Berg, check out zuugle.at as well!

## License

Fork of https://github.com/mandrasch/sveltekit-headless-wp-rest-demo.
