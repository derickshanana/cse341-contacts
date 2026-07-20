const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Contacts API',
        description: 'CSE 341 Contacts API - full CRUD operations on a MongoDB contacts collection.'
    },
    // IMPORTANT: replace this with your actual Render URL once deployed.
    // Keep 'http' (not https) here only if your Render app enforces it differently;
    // normally use your https Render domain, no protocol prefix issues either way
    // as swagger-autogen will use whichever you set as host + schemes.
    host: 'cse341-contacts-lwfl.onrender.com',
    schemes: ['https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// This generates swagger-output.json based on your routes.
// Run with: node swagger.js
swaggerAutogen(outputFile, endpointsFiles, doc);