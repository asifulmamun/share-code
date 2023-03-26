### php 7.4 install
```
sudo apt-add-repository ppa:ondrej/php

sudo apt install php7.4-fpm

sudo apt install php7.4-common php7.4-mysql php7.4-xml php7.4-xmlrpc php7.4-curl php7.4-gd php7.4-imagick php7.4-cli php7.4-dev php7.4-imap php7.4-mbstring php7.4-opcache php7.4-soap php7.4-zip php7.4-intl
```


### nginx install
```
sudo apt install nginx
```



### nginx custom server
```
cd /etc/nginx/site-available
cp default tws.conf
```

```
sudo nano tws.conf
	server {
		listen 80;
		listen [::]:80;

		root /var/www/tws.test;

		# Add index.php to the list if you are using PHP
		index index.html index.php index.htm index.nginx-debian.html;

		server_name tws.test wwww.tws.test;

		location / {
			try_files $uri $uri/ =404;
		}


		location ~ \.php$ {
			autoindex on;
			include snippets/fastcgi-php.conf;
			fastcgi_pass unix:/run/php/php7.4-fpm.sock;
		#	fastcgi_pass 127.0.0.1:9000;
		}


		#location ~ /\.ht {
		#	deny all;
		#}
	}
```
```
sudo ln -s /etc/nginx/sites-available/tws.conf /etc/nginx/sites-enabled/tws.conf
```

### SET hosts for DNS
```
sudo nano /etc/hosts
```

```
127.0.0.1       localhost
127.0.1.1       asifulmamun
127.0.0.1       tws.test
```

### Server Reload and Restart
```
sudo systemctl stop nginx
sudo systemctl start nginx
sudo systemctl reload nginx
sudo systemctl restart nginx
```