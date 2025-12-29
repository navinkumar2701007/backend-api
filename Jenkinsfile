pipeline {
    agent { label 'nginx' }

    stages {
        stage('Deploy Backend') {
            steps {
                sh '''
                cd /var/www/backend

                git fetch origin
                git reset --hard origin/main

                npm install --production

                pm2 delete backend-api || true
                pm2 start app.js --name backend-api
                pm2 save
                '''
            }
        }
    }
}
