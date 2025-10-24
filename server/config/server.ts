/* export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
}); */


export default ({ env }) => ({
  url: env('PUBLIC_URL', 'https://pleasant-miracle-31b4db12d1.strapiapp.com'),
  host: '0.0.0.0',
  app: {
    keys: env.array('APP_KEYS'),
  },
});

 