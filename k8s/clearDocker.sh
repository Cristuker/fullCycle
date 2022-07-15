sudo docker rm -f $(docker ps -a -q)

sudo docker rmi -f $(docker images -q)

sudo docker system prune -af

sudo docker volume prune -f
