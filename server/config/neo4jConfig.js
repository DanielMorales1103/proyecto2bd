const neo4j = require('neo4j-driver');

const uri = process.env.NEO4J_URI || 'neo4j+s://fbb0e83e.databases.neo4j.io';
const user = process.env.NEO4J_USERNAME || 'neo4j';
const password = process.env.NEO4J_PASSWORD || 'ppzR63cf5l4VDCF68EWJdrH2oAwbyinVd27CIKWsax4';

const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));

module.exports = driver;
