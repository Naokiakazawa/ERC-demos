FROM node:14.15.1
LABEL maintainer='Naoki Akazawa'
ENV TZ=Asia/Tokyo
RUN npm install -g --unsafe-perm ganache-cli@6.12.1 && \
    mkdir -p /var/ganache
ENV DOCKER true
ENV DATADIR /var/ganache
WORKDIR /usr/src/app
EXPOSE 8545
#ENTRYPOINT ["bash", "-c", "ganache-cli"]
ENV MNEMONIC cluster humble awkward deny drama there feature exile bronze worry area lemon
ENV NETWORKID 5777
ENTRYPOINT ["bash", "-c", "ganache-cli --host=0.0.0.0 --db=${DATADIR} --mnemonic=\"${MNEMONIC}\" --networkId=${NETWORKID}"]

