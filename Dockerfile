FROM nghiant2710/rpi-node

RUN npm install forever -g

COPY . /app

ENV INITSYSTEM on

CMD ["node", "/app/server.js"]
