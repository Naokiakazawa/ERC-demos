FROM node:14.15.1
LABEL maintainer='Naoki Akazawa'
ENV TZ=Asia/Tokyo
SHELL ["/bin/bash", "-c"]
WORKDIR /usr/src
COPY hardhat_entrypoint.sh /
RUN chmod 777 /hardhat_entrypoint.sh
ENTRYPOINT [ "/bin/bash", "/hardhat_entrypoint.sh" ]