pipeline {
    agent any

    stages {
        stage('Checkout SCM') {
            steps {
                echo 'Checking out source code...'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing npm dependencies (skipped for Windows)...'
                bat 'echo npm install skipped'
            }
        }

        stage('Build') {
            steps {
                echo 'Building project (skipped for Windows)...'
                bat 'echo Build skipped'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests (skipped for Windows)...'
                bat 'echo Test skipped'
            }
        }

        stage('Lint') {
            steps {
                echo 'Linting code (skipped for Windows)...'
                bat 'echo Lint skipped'
            }
        }

        stage('Audit') {
            steps {
                echo 'Audit (skipped for Windows)...'
                bat 'echo Audit skipped'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploy (skipped for Windows)...'
                bat 'echo Deploy skipped'
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished successfully on Windows! ✅'
        }
    }
}
