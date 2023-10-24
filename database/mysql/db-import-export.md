#### Create Database
        asifulmamun@asifulmamun:~/Downloads$ mysql -u asifulmamun -p
        Enter password: 
        Welcome to the MySQL monitor.  Commands end with ; or \g.
        Your MySQL connection id is 10
        Server version: 8.0.28-0ubuntu0.20.04.3 (Ubuntu)

        Copyright (c) 2000, 2022, Oracle and/or its affiliates.

        Oracle is a registered trademark of Oracle Corporation and/or its
        affiliates. Other names may be trademarks of their respective
        owners.

        Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

        mysql> create database febbms;
        Query OK, 1 row affected (0.01 sec)

        mysql> show databases;
        +--------------------+
        | Database           |
        +--------------------+
        | febbms             |
        | information_schema |
        | mysql              |
        | performance_schema |
        | phpmyadmin         |
        | sys                |
        | wp                 |
        +--------------------+
        7 rows in set (0.01 sec)

        mysql> exit;
        Bye

#### Login to DB with Direct Password
        asifulmamun@asifulmamun:~/Downloads$ mysql -u asifulmamun -p1998
        mysql: [Warning] Using a password on the command line interface can be insecure.
        Welcome to the MySQL monitor.  Commands end with ; or \g.
        Your MySQL connection id is 11
        Server version: 8.0.28-0ubuntu0.20.04.3 (Ubuntu)

        Copyright (c) 2000, 2022, Oracle and/or its affiliates.

        Oracle is a registered trademark of Oracle Corporation and/or its
        affiliates. Other names may be trademarks of their respective
        owners.

        Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

        mysql> exit
        Bye

#### Import Data to existing DB with Direct password
    Below command `asifulmamun@asifulmamun:~/Downloads$ mysql -u asifulmamun -p1998 febbms < ahobanbl_febbms.sql`
    Here -p1998 means: -p means password and where password was 1998.
    Here -u means: user and asifulmamun is username of DB user.

        asifulmamun@asifulmamun:~/Downloads$ mysql -u asifulmamun -p1998 febbms < ahobanbl_febbms.sql
        mysql: [Warning] Using a password on the command line interface can be insecure.
        asifulmamun@asifulmamun:~/Downloads$ mysql -u asifulmamun -p1998
        mysql: [Warning] Using a password on the command line interface can be insecure.
        Welcome to the MySQL monitor.  Commands end with ; or \g.
        Your MySQL connection id is 13
        Server version: 8.0.28-0ubuntu0.20.04.3 (Ubuntu)

        Copyright (c) 2000, 2022, Oracle and/or its affiliates.

        Oracle is a registered trademark of Oracle Corporation and/or its
        affiliates. Other names may be trademarks of their respective
        owners.

        Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

##### Show Databases and tables is imported or not after import
        mysql> show databses;
        ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'databses' at line 1
        mysql> use febbms;
        Reading table information for completion of table and column names
        You can turn off this feature to get a quicker startup with -A

        Database changed
        mysql> show tables;
        +------------------+
        | Tables_in_febbms |
        +------------------+
        | becomedonor      |
        | donate_event     |
        | requestblood     |
        | users            |
        +------------------+
        4 rows in set (0.00 sec)


#### Export
```
mysqldump -u YourUser -p YourDatabaseName > export.sql
```
