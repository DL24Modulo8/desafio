pipeline {
    agent {
        docker {
            image 'node:18'
        }
    }
    environment {
        IMAGE_NAME = 'desafio-cicd'
        IMAGE_TAG = 'latest'
        CONTAINER_NAME = 'desafio-cicd-container'
    }
    stages {
        stage('Checkout') {
            steps {
                echo '📥 Clonando el repositorio...'
                checkout scm
            }
        }
        stage('Build') {
            steps {
                script {
                    echo '⚙️ Instalando dependencias...'
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    echo '🧪 Ejecutando pruebas...'
                    sh 'npm test'
                }
            }
        }
        stage('Docker Build') {
            steps {
                script {
                    echo '🐳 Construyendo imagen Docker...'
                    sh "docker build -t ${IMAGE_NAME}:${IMAGE_TAG} ."
                }
            }
        }
        stage('Run Docker Container') {
            steps {
                script {
                    echo '🛑 Eliminando contenedor anterior (si existe)...'
                    sh "docker stop ${CONTAINER_NAME} || true"
                    sh "docker rm ${CONTAINER_NAME} || true"

                    echo '🚀 Iniciando nuevo contenedor...'
                    sh "docker run -d --name ${CONTAINER_NAME} -p 8080:8080 ${IMAGE_NAME}:${IMAGE_TAG}"
                }
            }
        }
    }
    post {
        success {
            echo '✅ Pipeline completado con éxito'
        }
        failure {
            echo '❌ El pipeline ha fallado'
        }
    }
}
