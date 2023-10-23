### Check drive
If you have multiple drive in this device, need to be mount it in this OS.

####
```
lsblk
```
```
sudo fdisk -l
```
After find out the disk sda or sdX any kind of disk name then check the sized etc. You can also show the size and volume list with above command. Let start check again size of volume like this first of all check the volumen.

Example: (afer abve command)
```
loop34   7:34   0 321.1M  1 loop /snap/vlc/3721
sda      8:0    0 149.1G  0 disk 
└─sda1   8:1    0   149G  0 part /sda1
sdb      8:16   0 232.9G  0 disk 
├─sdb1   8:17   0   3.8G  0 part 
├─sdb2   8:18   0     1M  0 part 
├─sdb3   8:19   0   513M  0 part /boot/efi
└─sdb4   8:20   0 228.6G  0 part /
sdc      8:32   1   3.7G  0 disk 
└─sdc1   8:33   1   3.7G  0 part /media/asifulmamun/1F2D-12A82
```
Here we can see sda, sdb & sdc has 3 drive and every drive has single or multiple volume like sda has only one volume sda1

after sdX = 1 or 2  or else this is the volume number.
Example: sdb has 4 volume sdb1, sdb2, sdb3, and sdb4 (here after the sdb = 1, 2, 3, 4 is only the drive number)

We can check the volume space now
```
asifulmamun@asifulmamun:/var/www/html$ df -h /dev/sdb4
Filesystem      Size  Used Avail Use% Mounted on
/dev/sdb4       224G   68G  146G  32% /


asifulmamun@asifulmamun:/var/www/html$ df -h /dev/sda1
Filesystem      Size  Used Avail Use% Mounted on
/dev/sda1       150G   68M  149G   1% /media/asifulmamun/HDD


asifulmamun@asifulmamun:/var/www/html$ df -h /dev/sda2
Filesystem      Size  Used Avail Use% Mounted on
/dev/sda2       988K     0  988K   0% /media/asifulmamun/HDD2
```

Another example with mount point or path:
```
asifulmamun@asifulmamun:/var/www/html$ df -h /media/asifulmamun/HDD
Filesystem      Size  Used Avail Use% Mounted on
/dev/sda1       150G   68M  149G   1% /media/asifulmamun/HDD
```


### Custom mount
We know the disk and volume with above method.
Now we check the UUID of volume

```
sudo blkid
```

Look for the line that corresponds to your sdb partition and note its UUID. It will look something like this:
```
/dev/sdbX: UUID="your-uuid-here" TYPE="filesystem-type"
```

example we are searching our sda2 UUID:
```
/dev/sda2: SEC_TYPE="msdos" LABEL_FATBOOT="HDD2" LABEL="HDD2" UUID="B8E9-E6E9" BLOCK_SIZE="512" TYPE="vfat" PARTUUID="8b0fcd67-02"
/dev/sda1: LABEL="HDD" UUID="EC39-5FC3" BLOCK_SIZE="512" TYPE="exfat" PARTUUID="8b0fcd67-01"
```

We have got the UUID.
Open the /etc/fstab file in a text editor using this command:
```
sudo nano /etc/fstab
```

Add an entry to the /etc/fstab file to automatically mount your sdb drive at boot. Use the UUID you noted in the previous step. For example:
```
UUID=your-uuid-here /mnt/sdXx ext4 defaults 0 0
```

Example you have to change your UUID and file formate also where you want ot mount:
```
UUID=B8E9-E6E9  /mnt/sda2 ext4 defaults 0 0
```