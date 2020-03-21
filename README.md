# Dummy script to check volumes permissions
I need this to debug my Synology NAS permissions

[![Docker Cloud Automated build](https://img.shields.io/docker/cloud/automated/assorium/docker-volume-check-permissions?style=for-the-badge "Docker Cloud Automated build")](https://hub.docker.com/r/assorium/docker-volume-check-permissions "Docker Cloud Automated build")
[![Docker Cloud Build Status](https://img.shields.io/docker/cloud/build/assorium/docker-volume-check-permissions?style=for-the-badge "Docker Cloud Build Status")](https://hub.docker.com/r/assorium/docker-volume-check-permissions "Docker Cloud Build Status")
[![Docker Pulls](https://img.shields.io/docker/pulls/assorium/docker-volume-check-permissions?style=for-the-badge "Docker Pulls")](https://hub.docker.com/r/assorium/docker-volume-check-permissions "Docker Pulls")  <br/>

[![Latest Github tag](https://img.shields.io/github/v/tag/mrspartak/docker-volume-check-permissions?sort=date&style=for-the-badge "Latest Github tag")](https://github.com/mrspartak/docker-volume-check-permissions/releases "Latest Github tag")


## Docker
```
docker run  --name docker-volume-check-permissions \
  -v ...:/home/node/app/data_wr \
  -v ...:/home/node/app/data_ro:ro \
  assorium/docker-volume-check-permissions:latest
```