import { createFile } from "#db/queries/files"
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

//POST /folders/:id/files
foldersRouter.route("/:id/files").post(async(req, res)=>{

const id = Number(req.params.id)
const foundFolder = await getFoldersByIdIncludingFiles(id)

    if (!foundFolder){
        return res.status(404).send("There is no folder with that id")
    }

if (!req.body){
    return res.status(400).send("Missing request body")
}

const {name, size, folder_id} = req.body

if(!name || !size || !folder_id){
    return res.status(400).send("Missing required fields")
}

const newFile = await createFile({name, size, folder_id})
res.status(201).send(newFile)

})