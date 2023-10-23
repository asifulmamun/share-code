### Share folder or file with samba
First install the smb/samba

#### Edit smb configuration
```
sudo nano /etc/samba/smb.conf
```

Add this code with your required finished of the line this smb.conf file
```
[mamunserver-downloads]
        comment = This is just share of download folder
        path = /home/asifulmamun/Downloads
        browsable = yes
        readonly = no
        read only = no
        guest ok = no
```
Change your path and [mamunserver-download] to your share name.

Access from other device with smb, 
```
\\your_ip_or_device_username\mamunserver-downloads
```

Example:
```
[mamunserver-downloads]
        comment = This is just share of download folder
        path = /home/asifulmamun/Downloads
        browsable = yes
        readonly = no
        read only = no
        guest ok = no
[hdd-server]
        comment = This is just share of download folder
        path = /media/asifulmamun/HDD
        browsable = yes
        readonly = no
        read only = no
        guest ok = no
```