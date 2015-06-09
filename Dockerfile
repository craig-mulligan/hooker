FROM nghiant2710/rpi-node

COPY . /app

RUN apt-get install git && cd /app && npm install gith

ENV INITSYSTEM on

CMD ["bash", "/app/start.sh"]
