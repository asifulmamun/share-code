### WSL in PowerShell of Windows
```
wsl -l -v
```

Result: Here Ubuntu-22.04 is running and default, and other Ubuntu distro running but default is Ubuntu-22.04 we can change everythin default to secondary, no matter, but running means working.
PS C:\Users\asifulmamun> wsl -l -v
  NAME            STATE           VERSION
* Ubuntu-22.04    Stopped         2
  Ubuntu          Stopped         2
```


Update Distro
```
wsl --set-version <Distro> 2
```
Example: Name of Distro found from windows PowerShell this command: `wsl -l -v`, and found example Ubuntu-22.04
```
wsl --set-version Ubuntu-22.0.4 2
```

After Update this this from older to version-2 then if not wokring the docker then try to below command and process.

### Solved with this
It seems like there might be an issue with the Docker installation on your system. Let's try a different approach to install Docker.

Please follow these steps:

1. **Remove Docker**:

   Run the following commands to remove any existing Docker installations:

   ```bash
   sudo apt-get remove docker docker-engine docker.io containerd runc
   ```

2. **Update Package Lists**:

   Update the package lists to make sure you're working with the latest information:

   ```bash
   sudo apt-get update
   ```

3. **Install Docker Dependencies**:

   Install the necessary dependencies for Docker:

   ```bash
   sudo apt-get install \
       apt-transport-https \
       ca-certificates \
       curl \
       gnupg \
       lsb-release
   ```

4. **Add Docker's GPG Key**:

   Add Docker's official GPG key:

   ```bash
   curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
   ```

5. **Add Docker Repository**:

   Add the Docker repository for Ubuntu:

   ```bash
   echo \
     "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
     $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
   ```

6. **Update Package Lists (Again)**:

   Update the package lists once more:

   ```bash
   sudo apt-get update
   ```

7. **Install Docker**:

   Finally, install Docker:

   ```bash
   sudo apt-get install docker-ce docker-ce-cli containerd.io
   ```

8. **Start Docker Service**:

   Start the Docker service:

   ```bash
   sudo service docker start
   ```

9. **Check Docker Status**:

   Verify if the Docker service is running:

   ```bash
   sudo service docker status
   ```

   It should now show that the Docker service is running.

10. **Add User to Docker Group**:

   To avoid using `sudo` with Docker commands, you can add your user to the Docker group:

   ```bash
   sudo usermod -aG docker $USER
   ```

   Remember to restart your session or run `su - $USER` for this change to take effect.

11. **Verify Docker Installation**:

   Run a test command to verify that Docker is working correctly:

   ```bash
   docker run hello-world
   ```

   This will download a test image and run a container to confirm that Docker is functioning as expected.

If you encounter any issues during these steps, please let me know the specific error messages you receive so I can further assist you.