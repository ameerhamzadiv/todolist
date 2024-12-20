pipeline {
    agent any

    stages {
        // Build Stage Start
        stage('Build') {
            agent {
                docker {
                    image 'node:18-alpine'
                    reuseNode true
                }
            }
            steps {
                sh '''
                   ls -la
                   node --version
                   npm --version
                   npm ci
                   npm run build
                   ls -la
                '''
            }
        } // Build Stage End
        // Test Stage Start
        stage('Test') {
            steps {
                echo 'Test Stage'
            }
        } // Test Stage End
    }
}
