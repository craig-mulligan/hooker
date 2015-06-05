FROM nghiant2710/rpi-node

RUN npm install forever -g

COPY . /app

ENV INITSYSTEM on

WORKDIR /app
CMD ["forever", "-o out.log -e err.log start server.js"]
