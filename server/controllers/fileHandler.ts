import { readFile } from "fs/promises";

export class FileHandler {

   static writeFile() {
   }

   /* Método encargado de leer el archivo */
   static async readFile () {
    try {
        const urls = await readFile('file.txt', 'utf8');
         return JSON.parse(urls);
        } catch (err) {
            console.error("Error al querer leer el archivo");
        }
    }
}
