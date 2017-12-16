const bodyParser = require('body-parser');
const crypto = require('crypto');
const express = require('express');
const fetch = require('node-fetch');
const request = require('request');
const config = require('config');

let Wit = require('node-wit').Wit;
let log = require('node-wit').log;

const APP_SECRET = (process.env.MESSENGER_APP_SECRET) ?
process.env.MESSENGER_APP_SECRET :
config.get('appSecret');

const VALIDATION_TOKEN = (process.env.MESSENGER_VALIDATION_TOKEN) ?
(process.env.MESSENGER_VALIDATION_TOKEN) :
config.get('validationToken');

const PAGE_ACCESS_TOKEN = (process.env.MESSENGER_PAGE_ACCESS_TOKEN) ?
(process.env.MESSENGER_PAGE_ACCESS_TOKEN) :
config.get('pageAccessToken');

const WIT_TOKEN = (process.env.WIT_SERVER_ACCESS_TOKEN) ?
(process.env.WIT_SERVER_ACCESS_TOKEN) :
config.get('witToken');

if (!(APP_SECRET && VALIDATION_TOKEN && PAGE_ACCESS_TOKEN && WIT_TOKEN)) {
console.error("Missing config values");
process.exit(1);
}