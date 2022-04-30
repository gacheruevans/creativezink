FROM node:16.14.2-alpine3.14
# Adding build tools to make yarn install work on Apple silicon / arm64 machines
RUN apk add --no-cache python2 g++ make
WORKDIR /project
COPY . .
RUN yarn install --production
CMD ["npm run dev"]