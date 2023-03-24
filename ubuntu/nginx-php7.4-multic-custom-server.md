### nginx install
sudo apt-add-repository ppa:ondrej/php


### nginx custom server
server {
	listen 80;
	listen [::]:80;
    server_name tws.test www.tws.test;

	root /var/www/tws.test;

	index index.php index.html index.htm index.nginx-debian.html;

	server_name _;

	location / {
		autoindex on;
		try_files $uri $uri/ =404;
	}

	location ~ \.php$ {

		fastcgi_pass unix:/run/php/php7.4-fpm.sock;

	}

	location ~ /\.ht {
		deny all;
	}
}



### php 7.4 install
sudo apt install php7.4-fpm


sudo apt install php7.4-common php7.4-mysql php7.4-xml php7.4-xmlrpc php7.4-curl php7.4-gd php7.4-imagick php7.4-cli php7.4-dev php7.4-imap php7.4-mbstring php7.4-opcache php7.4-soap php7.4-zip php7.4-intl

