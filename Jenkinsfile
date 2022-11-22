pipeline{
    agent any
    tools{
        nodejs "node19"
    }
    stages{
        stage('Clone from git'){
            steps{
                git "https://github.com/juniorkfelix/gallery"
            }
        }
        stage('Build phase'){
            steps{
                sh 'npm install'
            }
        }
        stage('Testing Phase'){
            steps{
                sh 'npm test'
            }
        }
        stage('Deploy to heroku'){
            steps{
                withCredentials([usernameColonPassword(credentialsId: 'heroku', variable: 'HEROKU_CREDENTIALS' )]){
                    sh 'git push https://${HEROKU_CREDENTIALS}@git.heroku.com/shielded-ridge-37713.git master'
                }
            }
        }
        stage('Slack send message'){
            steps{
        
                slackSend message: 'link to code is http://shielded-ridge-37713.herokuapp.com/'
                slackSend message: "Running JK Build Id: ${env.BUILD_ID} on ${env.JENKINS_URL}"
            }
        }

    }
}
