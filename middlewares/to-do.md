# Middlewares

## Overview:
Middlewares are features and functions we will configure once and use throughout the app.

For the goal of this project, we will need a few middlewares, namely:
- authJwt.js
  - This will allow us to work with JSON Web Tokens (or JWTs for short).  This will help us authenticate users in the system.
- verifySignup.js
  - This will allow us to verify the authenticity of a user attempting to sign up for the service.
- index.js
  - This will gather all the other middlewares and export them from a single location.