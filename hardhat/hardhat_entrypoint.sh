#!/bin/bash

DIR="/usr/src/node_modules"
if [ ! -d $DIR ];then
    cd /usr/src
    echo -e "\n===> installing buidler\n"
    npm init -y
    npm install --save-dev hardhat
    echo -e "\n===> installing other packages\n"
    npm install --save-dev @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers
    echo -e "\n===> standing by !!\n"
fi
/bin/bash