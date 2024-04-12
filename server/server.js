const express = require('express');
const neo4jDriver = require('./config/neo4jConfig');
const cors = require('cors'); 
const authRoutes = require('./routes/authRoutes');

const app = express();
const port = 3001;


app.use(cors());
app.use(express.json()); 
app.use('/api', authRoutes); 

app.listen(port, async () => {
  console.log(`Server listening on port ${port}`);
  
  const session = neo4jDriver.session();
  try {
    await session.run('RETURN 1');
    console.log('Connected to Neo4j Database');
  } catch (error) {
    console.error('Error connecting to Neo4j Database', error);
  } finally {
    await session.close();
  }
});

process.on('exit', () => {
  neo4jDriver.close();
});
