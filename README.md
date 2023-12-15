# Project 3 | I do Planner 

## Introduction
I do Planner is developed for project 3 of the Web Development Ironhack Bootcamp (cohort October 2023, remote). The project is down based on pair programming and it's performed by Júlia Sendra and Elise Jonkers. I do Planner is developed by using the MERN stack. The project is set up with Ironlauncher which provided the routes and middleware for the authentication part of the backend.

This repo belongs to the backend of the app. In order to check out the repo of the backend, click on the following: https://github.com/your-wedding-planner/i-do-planner-frontend

## Setup
In order to run the application on your computer, you should follow these steps:
- Fork this repo
- Clone this repo
- After opening the code, create a folder called '.env' and paste the following:
    - `PORT=5005`
    - `ORIGIN=http://localhost:5174`
    - `TOKEN_SECRET=` you can fill in anything as a TOKEN_SECRET

- Run the following in the terminal:
    - npm run dev

## Description of the models and routes
I do Planner is a dashboard that provides the user with useful tools to plan the dream wedding. It has the functionalities to create different models, which will be only available for the specific user. The following models are implemented: user, guest, vendor, table, cost item:
- User
    - The user can only be created and verified
- Guest
    - Get an overview of all the guests (only created by user itself)
    - Get the details of a specific guest
    - Create a new guest
    - Update a guest
    - Delete a guest
- Vendor
    - Get an overview of all the vendors (only created by user itself)
    - Get the details of a specific vendor
    - Create a new vendor
    - Update a vendor
    - Delete a vendor
- Table
    - Get an overview of all the tables and guests assigned to the tables (only created by user itself)
    - Drag guests to the table
    - Create a new table
    - Update a table
    - Delete a table
- Cost item
    - Get an overview of all the cost items 
    - Create a new cost item
    - Update a cost item
    - Delete a cost item 

## Demo
Visit the following URL to use the app: https://i-do-planner.netlify.app
