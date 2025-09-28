pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Installing dependencies and building project...'
                sh 'npm ci'
                sh 'node jenkins/test-dist.cjs'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'npm test'
            }
        }

        stage('Code Quality') {
            steps {
                echo 'Running ESLint for code quality...'
                sh 'npm run lint'
            }
        }

        stage('Security') {
            steps {
                echo 'Running npm audit for security...'
                sh 'npm audit'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying app to test environment...'
                sh 'npm run deploy'
            }
        }
    }
}
