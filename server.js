const express               = require('express');
const app                   = express();
const server                = require('http').Server(app);
const mongoose              = require('mongoose');
const dotenv                = require('dotenv');
const eventRoutes           = require('./routes/eventRoutes');
const galleryRoutes         = require('./routes/galleryRoutes');
const videoRoutes           = require('./routes/videoRoutes');
const teamMemberRoutes      = require('./routes/teamMemberRoutes');
const designingRoutes       = require('./routes/designingRoutes');

app.get('/', (req, res)=>{
    res.send("Hey! Welcome to the official server of Photography Club")
})

app.use('/events',eventRoutes);
app.use('/gallery',galleryRoutes);
app.use('/video',videoRoutes);
app.use('/teamMember',teamMemberRoutes);
app.use('/design', designingRoutes);

app.get('*', (req, res)=>{
    res.send("This page is currently under development!")
})

const port = process.env.PORT || 3000;
server.listen(port); 