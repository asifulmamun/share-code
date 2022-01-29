### Require

    - Fisrt you need to install ADB in you PC
    - Select App and findout the package name of App apk file
    - Connect your phone with PC (before connect go to developer option and turn on USB Debuggin)
    - Backup your apk to SD Card or Device Memory if require
    - Before connect your device must Unlcok your phone after connected then you can lock your phone


### Check Installed or Not

    asifulmamun@asifulmamun-ubuntu:~$ adb --version
    Android Debug Bridge version 1.0.39
    Version 1:8.1.0+r23-5ubuntu2
    Installed as /usr/lib/android-sdk/platform-tools/adb


### ADB Connect

    asifulmamun@asifulmamun-ubuntu:~$ adb devices
        - For show list of devices attached

    Connect via USB Debug
    ---------------------
    asifulmamun@asifulmamun-ubuntu:~$ adb shell
    * daemon not running; starting now at tcp:5037
    * daemon started successfully
    1811:/ $        
        - New adb command line started via your phone name (my phone name is 1811)

    For disconnect
    ---------------
    asifulmamun@asifulmamun-ubuntu:~$ adb kill-server

    Connect via Wireless Wifi/IP Address
    ------------------------------------

        Pre-requirements
        -----------------
        - Connect phone with USB for recognize device (after that you can remove you phone)

    asifulmamun@asifulmamun-ubuntu:~$ adb tcpip 5555
    * daemon not running; starting now at tcp:5037
    * daemon started successfully
    restarting in TCP mode port: 5555

        Additional work
        --------------
        - Disconnect your phone from you PC
        - Findout your phone ip address from your phone setting>about
        - Then try below command

    asifulmamun@asifulmamun-ubuntu:~$ adb connect 192.168.0.102:5555
    connected to 192.168.0.102:5555

    asifulmamun@asifulmamun-ubuntu:~$ adb devices
    List of devices attached
    192.168.0.102:5555	device
        - List connected devices
        
    asifulmamun@asifulmamun-ubuntu:~$ adb shell
    1811:/ $        
        - New adb command line started via your phone name (my phone name is 1811)


### Get App Packages Name list

    asifulmamun@asifulmamun-ubuntu:~$ adb shell pm list packages
    package:com.whatsapp.w4b
    package:com.skype.raider
    package:com.android.cts.priv.ctsshim
    package:com.vivo.weather.provider
    ...................
    ...................
        - App lists (packages name)


### Search Package or App Name

    asifulmamun@asifulmamun-ubuntu:~$ adb shell pm list packages | grep yout
    package:com.google.android.youtube
    package:com.vanced.android.youtube
        - yout (replace with your text) Then find the package name

    asifulmamun@asifulmamun-ubuntu:~$ adb shell
    1811:/ $ pm uninstall com.android.notes 
    Failure [DELETE_FAILED_INTERNAL_ERROR]
        - Facing Problem some system app (didn't removed)

    1811:/ $ pm uninstall --user 0 com.android.notes                               
    Success
        - Then try with this and removed (Solved)


### Uninstall

    1811:/ $ pm uninstall com.google.android.apps.cloudconsole
    Success
        - $ pm uninstall <package name of app>


### Install


### At device command mode (not ADB shell command mode)
    asifulmamun@asifulmamun-ubuntu:~$ adb shell getprop
    [DEVICE_PROVISIONED]: [1]
    [af.fast_track_multiplier]: [1]
    [audio.deep_buffer.media]: [true]
    [audio.fm.maxvolume]: [6000]
    [audio.fm.minvolume]: [10]
    ............
    ...........
        - Get all the properties
    
    asifulmamun@asifulmamun-ubuntu:~$ adb shell getprop "ro.build.version.release"
    8.1.0
        - Get version information

    asifulmamun@asifulmamun-ubuntu:~$ adb shell getprop "ro.build.version.sdk"
    27
        - Get version of SDK


    asifulmamun@asifulmamun-ubuntu:~$ whoami
    asifulmamun
        - Get who use this terminal

    1811:/ $ whoami
    shell
     - Get who use this terminal


### Show files from sdcard
    asifulmamun@asifulmamun-ubuntu:~$ adb shell
    1811:/ $ cd sdcard/Download/                                                                                                     
    1811:/sdcard/Download $ ls
     IMG_20220108_010934_815.jpg
        - Show files


### Download files from sdcard

    asifulmamun@asifulmamun-ubuntu:~$ adb pull /sdcard/Download/IMG_20220108_010934_815.jpg
     /sdcard/Download/IMG_20220108_010934_815.jpg: 1 file pulled. 1.4 MB/s (2536709 bytes in 1.787s)
        - Download file from sd card


### Upload file to sdcard

    asifulmamun@asifulmamun-ubuntu:~/Downloads$ ls
     Example-Require.jpg   Require.jpg  'sample uk.xls'
    asifulmamun@asifulmamun-ubuntu:~/Downloads$ adb push Require.jpg /sdcard/Download
     Require.jpg: 1 file pushed. 0.8 MB/s (381643 bytes in 0.446s)
    asifulmamun@asifulmamun-ubuntu:~/Downloads$ adb shell
    1811:/sdcard/Download $ ls
     IMG_20220108_010934_815.jpg Require.jpg
        - Upload file


### Screenshot

    asifulmamun@asifulmamun-ubuntu:~/Downloads$ adb exec-out screencap -p > ./pic.png


### Screen Record

    asifulmamun@asifulmamun-ubuntu:~/Downloads$ adb shell screenrecord "/sdcard/Download/myss.mp4"
     ^C
        - Go sdcard download folder and see this vide alos can download this with pull command


### Tap on phone with pointer location
    
    asifulmamun@asifulmamun-ubuntu:~/Downloads$ adb shell input tap 538 1099
        - Tap the phone with pointer x/y location


### Input text when text field open work on textfield or number
    
    asifulmamun@asifulmamun-ubuntu:~/Downloads$ adb shell input text "123"


### Keyevent - like as button
    asifulmamun@asifulmamun-ubuntu:~/Downloads$ adb shell input keyevent 4
        4 = back
        5 = forward