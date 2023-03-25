### nginx install
<<<<<<< HEAD
sudo apt install nginx


### nginx custom server
<<<<<<< HEAD
cd /etc/nginx/site-available

sudo nano tws.conf
<!-- put below code -->
events {
  worker_connections  4096;  ## Default: 1024
}

http{
	server {
		listen 80 default_server;
		listen [::]:80 default_server;

		root /var/www/html;

		# Add index.php to the list if you are using PHP
		index index.html index.htm index.nginx-debian.html;

		server_name _;

		location / {
			try_files $uri $uri/ =404;
		}

		# pass PHP scripts to FastCGI server
		#
		#location ~ \.php$ {
		#	autoindex on;
		#	include snippets/fastcgi-php.conf;
		#
		#	# With php-fpm (or other unix sockets):
		#	fastcgi_pass unix:/run/php/php7.4-fpm.sock;
		#	# With php-cgi (or other tcp sockets):
		#	fastcgi_pass 127.0.0.1:9000;
		#}

		# deny access to .htaccess files, if Apache's document root
		# concurs with nginx's one
		#
		#location ~ /\.ht {
		#	deny all;
		#}
	}
}




### php 7.4 install
sudo apt-add-repository ppa:ondrej/php

sudo apt install php7.4-fpm

sudo apt install php7.4-common php7.4-mysql php7.4-xml php7.4-xmlrpc php7.4-curl php7.4-gd php7.4-imagick php7.4-cli php7.4-dev php7.4-imap php7.4-mbstring php7.4-opcache php7.4-soap php7.4-zip php7.4-intl

