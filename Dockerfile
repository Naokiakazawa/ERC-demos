FROM node:10.17.0
LABEL maintainer='Naoki Akazawa'
ENV TZ=Asia/Tokyo
COPY remix-ide /usr
WORKDIR /usr
RUN npm install && \
    sed -i s/127.0.0.1/0.0.0.0/g /usr/node_modules/remixd/lib/src/websocket.js && \
    npm run-script build
CMD ["npm", "start"]