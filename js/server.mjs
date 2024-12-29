import express from 'express';
import cors from 'cors';
import { findAvailablePort } from './free-port.mjs';

const app = express();

// Configura CORS para permitir cualquier origen
app.use(cors());

// Endpoint para verificar si un puerto está libre
app.get('/check-port', async (req, res) => {
    const desiredPort = parseInt(req.query.port, 10);

    try {
        const availablePort = await findAvailablePort(desiredPort);
        res.status(200).json({ available: availablePort === desiredPort });
    } catch (err) {
        res.status(500).json({ error: 'Unable to check port' });
    }
});

// Endpoint para obtener el puerto dinámico del servidor
const server = app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`);
});
