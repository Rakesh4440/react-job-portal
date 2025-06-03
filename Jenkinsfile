pipeline {
    agent any

    environment {
        COMPOSE_PROJECT_NAME = "mernjobportal"
    }

    stages {
        stage('Pull from GitHub') {
            steps {
                git branch: 'main', url: 'https://github.com/Rakesh4440/react-job-portal.git'
            }
        }

        stage('Stop previous containers') {
            steps {
                sh 'docker-compose down'
            }
        }

        stage('Build and Run containers') {
            steps {
                sh 'docker-compose up --build -d'
            }
        }
    }

    post {
        failure {
            echo 'Build failed.'
        }
        success {
            echo 'MERN Job Portal deployed successfully!'
        }
    }
}
