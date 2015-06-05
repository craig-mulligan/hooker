FROM nghiant2710/rpi-node

RUN npm install forever -g

COPY . /app

ENV INITSYSTEM on

CMD ["forever", "-o /data/out.log -e /data/err.log start /app/server.js"]
