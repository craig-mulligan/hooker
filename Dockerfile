FROM nghiant2710/rpi-node

RUN apt-get install git && npm install gith -g

COPY . /app

ENV INITSYSTEM on

CMD ["node", "/app/server.js"]
