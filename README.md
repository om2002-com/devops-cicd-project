# DevOps CI/CD Project on Render.com

## Description
This project demonstrates a complete DevOps CI/CD workflow.
A Node.js backend application is containerized using Docker and deployed on Render.com.
Whenever code is pushed to GitHub, Render automatically rebuilds and redeploys the application.

## Live URL
https://devops-backend-v761.onrender.com

## Tech Stack
- Backend: Node.js + Express
- Containerization: Docker
- CI/CD & Hosting: Render.com
- Version Control: GitHub

## CI/CD Flow
1. Code pushed to GitHub (main branch)
2. Render detects changes automatically
3. Docker image is rebuilt
4. Application is redeployed with zero manual steps

## Project Structure
devops-cicd-project/
├── backend/
│ ├── server.js
│ └── package.json
├── frontend/ (optional)
├── Dockerfile
├── docker-compose.yml
└── README.md