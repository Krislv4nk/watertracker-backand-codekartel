import fs from "fs/promises";
import path from "path";

export async function getSwaggerData() {
  const swaggerFilePath = path.resolve("swagger.json");
  try {
    const data = await fs.readFile(swaggerFilePath);
    return JSON.parse(data);
  } catch (error) {
    console.error("Failed to read or parse the swagger.json file", error);
    throw error;
  }
}
