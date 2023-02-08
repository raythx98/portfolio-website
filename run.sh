#!/bin/bash

sudo pip install nodeenv
nodeenv env --node 14.17.3
. env/bin/activate
npm i
npm start