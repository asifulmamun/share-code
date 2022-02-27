### Give permission
    
    First go to with this command

        asifulmamun@asifulmamun:~$ sudo nano /etc/ssh/ssh_config
        [sudo] password for asifulmamun: 


    Then chnage (replace no to yes):

        PasswordAuthentication no            - Before
        PasswordAuthentication yes           - After


### Restart SSHD

    asifulmamun@asifulmamun:~$ sudo service sshd restart


### Reset or Create Password
    asifulmamun@asifulmamun:~$ sudo passwd                      - Set/Reset only root user password
    asifulmamun@asifulmamun:~$ sudo passwd username             - Rules
    asifulmamun@asifulmamun:~$ sudo passwd asifulmamun          - Example


### Summery
    Now you can login from any network if firewall permission are allow or firewall off.
    Example asifulmamun@asifulmamun:~$ ssh asifulmamun@192.168.0.100
        Then enter the user of asifulmamun password.
