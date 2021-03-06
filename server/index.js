import  express  from "express";
import bodyParser from "body-parser";
import  mongoose from "mongoose";
import cors from 'cors';

import postRoutes from './routes/post.js'

const app =express();

// setez localhost:5000/posts
app.use('/posts',postRoutes);

app.use(bodyParser.json({limit:'30mb', extended: true}));
app.use(bodyParser.urlencoded({limit:'30mb', extended: true}));
app.use(cors());

const CONNECTION_URL='mongodb+srv://alex:alex100699@cluster0.vcskf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT =process.env.PORT || 5000;

//useNewParser,useUnifiedTopology , useFindAndModify nu sunt neceseare sunt doar folosite pt waring-uri
mongoose.connect(CONNECTION_URL,{useNewUrlParser: true, useUnifiedTopology:true})
.then(()=>app.listen(PORT,()=>console.log(`Server running on port ${PORT}`)))
.catch((error)=>console.log(error.message));

// mongoose.set('useFindAndModify',false);


