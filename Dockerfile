FROM node:16
WORKDIR /usr/src/app
COPY package.json ./
RUN apk add --no-cache --update \
        chromium \
        openjdk8-jre \
    && npm install -g protractor \
    && npm install -g webdriver-manager \
    && npm install -g @angular/cli\
    && webdriver-manager update \
    && npm install
ENTRYPOINT ["sh", "-c", "webdriver-manager start"]

COPY . .
EXPOSE 4200
CMD [ "node", "start" ]


