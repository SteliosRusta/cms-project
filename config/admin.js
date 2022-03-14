module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c74f6e9d5b5aa9c96d167e8149e3bc09'),
  },
});
