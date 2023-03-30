### php 7.4 install
```
sudo apt update
sudo apt-add-repository ppa:ondrej/php
sudo apt update
sudo apt install php7.4-fpm
sudo apt install php7.4-common php7.4-mysql php7.4-xml php7.4-xmlrpc php7.4-curl php7.4-gd php7.4-imagick php7.4-cli php7.4-dev php7.4-imap php7.4-mbstring php7.4-opcache php7.4-soap php7.4-zip php7.4-intl
```

### nginx install
```
sudo apt update
sudo apt install nginx
```

### nginx custom server
```
cd /etc/nginx/site-available
cp default tws.conf
sudo nano tws.conf
```
### Usue this code
```
server {
	listen 80;
	listen [::]:80;
	root /var/www/tws.test;
	index index.html index.php index.htm index.nginx-debian.html;
	server_name tws.test wwww.tws.test;

	location / {
		try_files $uri $uri/ =404;
	}
	location ~ \.php$ {
		autoindex on;
		include snippets/fastcgi-php.conf;
		fastcgi_pass unix:/run/php/php7.4-fpm.sock;
	}
	location ~ /\.ht {
		deny all;
	}
}
```

### Symobolic link create the custom server
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
sudo nginx -t
sudo systemctl stop nginx
sudo systemctl start nginx
sudo systemctl reload nginx
sudo systemctl restart nginx
sudo nginx -t
```


### Install MySQL - Server & CLient
```
sudo apt install mysql-server
sudo apt install mysql-client

```

### Create a new MySQL database and user for WordPress
```
sudo mysql -u root
CREATE DATABASE wordpress_db;
CREATE USER 'wordpress_user'@'localhost' IDENTIFIED BY 'your_password';
GRANT ALL PRIVILEGES ON wordpress_db.* TO 'wordpress_user'@'localhost';
FLUSH PRIVILEGES;
exit
```

### Root Directory Manage and File Permission
```
cd /var/www/
sudo mkdir tws.test
sudo chown -R $USER:www-data tws.test
sudo chmod -R g+rwx tws.test
sudo usermod -aG www-data $USER
su $USER
```

### Wordpress Download & Move to ROOT directory
```
tar xzvf latest.tar.gz
cd wordpress
sudo mv * /var/www/tws.test/
cd /var/www/tws.test
cp wp-config-sample.php wp-config.php
sudo nano wp-config.php
```

### Add/change wp-config.php file
```
define('DB_NAME', 'wordpress_db');
define('DB_USER', 'wordpress_user');
define('DB_PASSWORD', 'your_password');
```