import dotenv from 'dotenv'

dotenv.config();

import app from './app.js'
import mongoose from 'mongoose'

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('DB Conectada');
        app.listen(PORT, () =>{
            console.log(`Servidor corriendo en puerto ${PORT}`);
        });
    })
    .catch(err => console.error(err));