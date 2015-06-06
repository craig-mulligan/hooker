FROM nghiant2710/rpi-node

RUN npm install pm2@latest -g

COPY . /app

ENV INITSYSTEM on

CMD ["bash", "/app/start.sh"]
