# test-github-action
## systemd config file 
[Unit]
Description=ISD Proj
After=network.target
[Service]
Type=simple
Restart=always
RestartSec=1
User=root
ExecStart=/bin/npm start --prefix /u01/isd
ExecStop=/bin/npm stop --prefix /u01/isd
[Install]
WantedBy=multi-user.target

