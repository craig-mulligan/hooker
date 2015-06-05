FROM nghiant2710/armv7-rpi

RUN npm install forever

ENV INITSYSTEM on

CMD ["forever", "server.js -o /data/out.log -e /data/err.log start server.js"]
