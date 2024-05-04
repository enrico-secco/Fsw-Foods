/* eslint-disable no-unused-vars */
import { PrismaClient } from "@prisma/client";

declare global {
  var cachedPrisma: PrismaClient;
}

let prisma: PrismaClient;
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient();
  }
  prisma = global.cachedPrisma;
}

export const db = prisma;

//Basicamente para garantir que um PrismaClient seja instanciado em desenvolvimento, para conseguri fazer queries para o DB. Porém como está em desenvolvimento, ao salvar o arquivo ele reinicia o servidor, se não tivesse esse arquivo ele criaria uma instância a cada refresh/reload do servidor.
