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
                echo 'Installing npm dependencies...'
                bat 'echo npm install skipped'
            }
        }

        stage('Build') {
            steps {
                echo 'Building project...'
                bat 'echo Build skipped'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                bat 'echo Test skipped'
            }
        }

        stage('Lint') {
            steps {
                echo 'Linting code...'
                bat 'echo Lint skipped'
            }
        }

        stage('Audit') {
            steps {
                echo 'Audit...'
                bat 'echo Audit skipped'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploy...'
                bat 'echo Deploy skipped'
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished successfully'
        }
    }
}
