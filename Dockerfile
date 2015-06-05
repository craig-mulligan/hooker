FROM nghiant2710/rpi-node

RUN npm install forever -g

COPY . /app

ENV INITSYSTEM on

CMD ["forever", "start /app/server.js"]
