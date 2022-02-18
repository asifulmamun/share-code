### Abount
  - I've used it Ubuntu 20.04.3 LTS
  - is is the default Gnome screen recorder.
  - Have not exist any audio recording facilities.ny audio recording facilities.
  
  
### Start & Stop
  - just press this from your keyboart to start:
    
    ctr+shift+R
    
    
  - It will stop after 30 second automatically.
  - If you want to stop mannually same procudure for this
  - Just press from keyboard:
    
    ctr+shift+R


### Time Limit
  - Defult time limit is only 30 sec.
  - If you want to limit with your time just command this:
    
    asifulmamun@asifulmamun:~$ gsettings set org.gnome.settings-daemon.plugins.media-keys max-screencast-length 60
  
  - For unlimited time set the interval 60 to 0, you must need to stop mannually this recording otherwise it will bee recording all tiime untill you have stopped.
    
    asifulmamun@asifulmamun:~$ sudo gsettings set org.gnome.settings-daemon.plugins.media-keys max-screencast-length 0
