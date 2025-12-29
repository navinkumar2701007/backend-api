pipeline {
    agent { label 'nginx' }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    credentialsId: 'github-ssh',
                    url: 'git@github.com:navinkumar2701007/<backend-repo>.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh '''
                cd /var/www/backend
                npm install
                '''
            }
        }

        stage('Restart Backend with PM2') {
            steps {
                sh '''
                cd /var/www/backend
                pm2 restart backend || pm2 start app.js --name backend
                pm2 save
                '''
            }
        }
    }
}
