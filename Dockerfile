FROM node:16-slim
WORKDIR /app

ARG NPM_TOKEN
ENV PUBLIC_URL=/
ENV REACT_APP_URL=/

RUN apt-get update && \
    apt-get install -y build-essential python2.7 && \
    ln -s /usr/bin/python2.7 /usr/bin/python

RUN npm config set @matchesfashion:registry https://registry.npmjs.org/ && \
    npm config set '//registry.npmjs.org/:_authToken' "${NPM_TOKEN}"

COPY . .


RUN cd api && npm ci --unsafe-perm && npm run build && cd ../
RUN cd ui && npm ci --unsafe-perm && REACT_APP_URL="${REACT_APP_URL}" PUBLIC_URL="${PUBLIC_URL}" npm run build &&  cd ../

RUN cp -r api/dist .
RUN cp -r api/node_modules .
RUN cp -r ui/build ./dist
RUN rm -rf api
RUN rm -rf ui

CMD ["node", "dist/index.js"]