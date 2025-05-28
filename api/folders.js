import { getFolders, getFoldersByIdIncludingFiles } from "#db/queries/folders"
import express from "express"
const foldersRouter = express.Router()
export default foldersRouter

//GET /folders
foldersRouter.route("/").get(async(req, res)=>{
const folders = await getFolders()
res.send(folders) 
})

//GET /folders/:id
foldersRouter.route("/:id").get(async(req, res)=>{
    const id = Number(req.params.id)
    const foundFolder = await getFoldersByIdIncludingFiles(id)

    if (!foundFolder){
        return res.status(404).send("There is no folder with that id")
    }
    res.send(foundFolder)
})