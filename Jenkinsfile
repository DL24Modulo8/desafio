pipeline {
    agent any
    environment {
        NODE_VERSION = '18'
        IMAGE_NAME = 'desafio-cicd'
        IMAGE_TAG = 'latest'
        CONTAINER_NAME = 'mi-app-container'
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
                    try {
                        echo '⚙️ Instalando dependencias...'
                        sh 'npm install'
                        sh 'npm run build'
                    } catch (Exception e) {
                        error('❌ Error en la etapa de Build')
                    }
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    try {
                        echo '🧪 Ejecutando pruebas...'
                        sh 'npm test'
                    } catch (Exception e) {
                        error('❌ Error en la etapa de Test')
                    }
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
