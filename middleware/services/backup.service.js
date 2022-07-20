const path = require('path');
const BackupService = require('@semapps/backup');
const fs = require('fs');
let Client = require('ssh2-sftp-client');
require('dotenv-flow').config();
// const CONFIG = require('../config');

console.log('fuseki-backup path',path.resolve(__dirname, '../fuseki-backups'));

module.exports = {
  mixins: [BackupService],
  settings: {
    localServer: {
      fusekiBackupsPath: path.resolve(__dirname, '../fuseki-backups'),
      otherDirsPaths: {
        uploads: path.resolve(__dirname, '../uploads')
      }
    },
    cronJob: {
      time: '15 4 * * *',
      timeZone: 'Europe/Paris'
    }
  },
  actions: {
    syncWithRemoteServer(ctx) {
      return new Promise(async (resolve, reject) => {
        try {
          let sftp = new Client();

          await sftp.connect({
            host: process.env.SEMAPPS_FTP_HOST,
            port: process.env.SEMAPPS_FTP_PORT,
            username: process.env.SEMAPPS_FTP_USER,
            password: process.env.SEMAPPS_FTP_PASSWORD
          });

          fs.readdir(ctx.params.path, async function (err, files) {
            if (err) {
                return console.log('Unable to scan directory: ' + err);
                reject('Unable to scan directory: ' + err.message)
            }
            const now = Date.now();
            files = files.map(function (fileName) {
              return {
                name: fileName,
                diff: (now - fs.statSync(ctx.params.path + '/' + fileName).mtime) / 1000
              };
            }).filter(f=>f.diff<60)

            for (var file of files) {
              await sftp.put(ctx.params.path + '/' +file.name, process.env.SEMAPPS_FTP_PATH +file.name);
            }

            resolve()
          });
        } catch (e) {
          reject (e)
        }
      });
    }
  }
};
