import db from "#db/client";

export async function createFolder(name){
    const sql = `
    INSERT INTO folders (name) VALUES ($1) RETURNING *;
    `
    const {rows: [folder]} = await db.query(sql, [name])
    return folder
}

export async function createFile({name, size, folder_id}){
const sql = `
INSERT INTO files (name, size, folder_id) VALUES ($1, $2, $3) RETURNING *;
`
const {rows: [file]} = await db.query (sql, [name, size, folder_id])
return file
}