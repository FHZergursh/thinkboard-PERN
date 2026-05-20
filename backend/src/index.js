import express from "express"
import router from "./routes/notesRoutes.js";
import { setupDB } from "./db/db.js";
import cors from "cors"

const app = express();

app.use(express.json())
app.use(cors())

app.use('/api/notes', router);

setupDB().then(() => {{
  app.listen(5001, () => {
  console.log("Server started on port 5001")
})
}})

