const express = require('express');
const cors = require('cors');
const connection = require('./db');

const server = express();

server.user(cors());
server.user(express.json());