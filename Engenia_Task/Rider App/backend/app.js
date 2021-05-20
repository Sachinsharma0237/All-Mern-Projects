
const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const app = express();
const userRouter = require('./router/userRouter');

app.use( express.static("public") );
app.use( express.json() );



const swaggerOptions = {
    swaggerDefinition:{
        info:{
            title:"Custom API",
            description:"customer api information",
            contact:{
                name:"Sachin sharma",
            },
            servers: ["http://localhost:3000"]
        }
    },
    apis: ['app.js']
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));



app.use("/api/user", userRouter);
let port =  process.env.PORT || 3000;
app.listen( port , ()=>{ console.log(`Server Started at Port ${port}`)})

