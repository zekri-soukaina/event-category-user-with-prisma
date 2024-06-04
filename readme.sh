Terminal
- mkdir eventapp
- cd eventapp
- code .
- npm init
- npm install express
- touch index.js   
- node index.js
- npm i -d nodemon
- npm run dev
- npm i uuid
- npm i jsonwebtoken
# need another package to make our application be able to access it: the dotenv package.|v|
- npm i dotenv
- npm i express-oauth2-jwt-bearer
npm i winston

curl --request POST \
  --url https://dev-saa4brqcj1js0gi8.eu.auth0.com/oauth/token \
  --header 'content-type: application/json' \
  --data '{"client_id":"GugBufvaYQb7Jc2QCJwN0MUDoHfPpsmb","client_secret":"dDcqT2bb6w903Fu3tV4i7J0nFXYiksiLaHVW0G2OnA1B852iJWDFb1fzPOxk6CFN","audience":"https://events-api","grant_type":"client_credentials"}'


- npm install --save @sentry/node
- npm install --save @sentry/node @sentry/profiling-node
- npx @sentry/wizard@latest -i sourcemaps
npm i @sentry/node
npx @sentry/migr8@latest
npm install @sentry/node @sentry/tracing
npm list @sentry/node @sentry/tracing @sentry/profiling-node@

npm install mongodb

npm i -g prisma
npx prisma init 
npx prisma format .
npm install @prisma/client
 npx prisma generate  
 npx prisma db push 
 npx prisma db seed 
 npx prisma studio   
