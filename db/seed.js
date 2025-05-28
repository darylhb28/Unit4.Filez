import db from "#db/client";
import { createFile, createFolder } from "./queries/folders.js";

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {
  const folder1 = await createFolder("Music")

  await createFile({name: "Pop Song", size: 100, folder_id: folder1.id })
  await createFile({name: "Rock Song", size: 80, folder_id: folder1.id })
  await createFile({name: "Jazz Song", size: 120, folder_id: folder1.id })
  await createFile({name: "Classical Song", size: 100, folder_id: folder1.id })
  await createFile({name: "Rap Song", size: 200, folder_id: folder1.id })

  const folder2 = await createFolder("Movies")

  await createFile({name: "Romcom", size: 100, folder_id: folder2.id })
  await createFile({name: "Comedy", size: 300, folder_id: folder2.id })
  await createFile({name: "Action", size: 250, folder_id: folder2.id })
  await createFile({name: "Documentary", size: 85, folder_id: folder2.id })
  await createFile({name: "Thriller", size: 220, folder_id: folder2.id })

  const folder3 = await createFolder("Photos")

  await createFile({name: "Wedding", size: 350, folder_id: folder3.id})
  await createFile({name: "Travel", size: 400, folder_id: folder3.id})
  await createFile({name: "Birth", size: 200, folder_id: folder3.id})
  await createFile({name: "Graduation", size: 210, folder_id: folder3.id})
  await createFile({name: "First Day of School", size: 300, folder_id: folder3.id})

}
