import express from "express";
import snippetRouter from "./routes/snippet.js"
import cors from "cors"


const app = express();
const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin:"http://localhost:5173"
}))

app.use("/api/v1/snippet", snippetRouter);

"http://localhost:8000/api/v1/snippet"


app.listen(PORT, () => {
  console.log(`Server listen at port ${PORT}`);
});
