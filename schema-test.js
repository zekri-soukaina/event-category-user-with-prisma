// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?
// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init

generator client {
    provider = "prisma-client-js"
  }
  
  datasource db {
    provider = "mongodb"
    url      = env("DATABASE_URL")
  }
  
  model User {
    id       String  @id @default(auto())  @db.ObjectId @map("_id")
    username String  @unique
    password String
    name String
    image String
  
    events Event[]
    
  } 
  
  model Category {
    id        String  @id @default(auto()) @map("_id") @db.ObjectId
    name     String
  
    events Event[]
  
  }
  
  model Event {
    id        String @id @default(auto()) @map("_id") @db.ObjectId
    title     String 
    description    String
    image      String
    location String
    startTime DateTime
    endTime DateTime
  
    createdBy String @db.ObjectId
    categoryIds String[] @db.ObjectId
  
    user User @relation(fields: [createdBy], references: [id])
    categories Category @relation(fields: [categoryIds], references: [id])
  
     
  }
  