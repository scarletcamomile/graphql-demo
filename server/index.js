const express = require('express');
const app = express();
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const schema = require("./schema/index");
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(PORT, () => {
  console.log('Server started...');
});
