# Terminal Commands
  >Thses commands used for Iterm/PowerShell   

1. Basic Commands   
   `man` Manual (=Get-Help)   
    -When you don't know how to command   
    `man man` maual for Manual   
    `q` exit from manual   
    `clear` to clean the terminal screem up  

2. Navigating file system   
   `pwd` Print working directory (=Get-Location)   
   `ls` list(=Get-ChildItem)   
    - `ls dir1` list in the folder  
    - `ls -l` long format
    - `ls -a` show all even hidden files
    - `ls -la` long and all    
  
    `open .` open the current directory with finder
    - (=explore .)   
  
    `cd` change directory (=Set-Location)
    - `cd ..`move to parent path
    - `cd ~` move to home directory
    - `cd -` move back to former directory  
   
   find (=Get-ChildItem)   
    `find . -type file -name "*.txt"` find all txt files in this directory   
    `find . -type file -name "*.json"`   
    `find . -type directory -name "*2"`find the folder name ends with 2   
  `which %program` where is this program installed(=gcm %)   

3. Create and manage files   
  `touch new_file1.txt` create new txt file named new_file1   
     
  `cat new_file1.txt` look through the text inside of the file   
  `cat new_file1.txt new_file2.txt`   
   
  `echo "hello world"` print the string in the terminal   
  `echo "hello world" > new_file3.txt` create new text file named that and insert the text inside of it   
  `echo "hello brave new world" > new_file3.txt` overwrite the text on the existing file   
  `echo "goodbye world" >> new_file3.txt` add the text on the existing fike 
     
  `mkdir folder_name` make a new directory   
  `mkdir -p A/B/C making directory C inside of B dir inside of A dir   
  
  `cp file1.txt dir1/` copy file1.txt and paste in dir1   
  `mv file1.txt dir1/` move file1.txt and paste in dir1   
  `mv file1.txt file2.txt` change name   
  `rm file1.txt`remove file   
  `rm -r dir2` when you remove folder   

  grep - global regular expression print   
  `grep "world" *.txt` search keyword in whole text file   
  `grep -n "world" *.txt` search keyword in whole text file and display the line number   
  `grep -ni "world" *.txt` search keyword text insensitive way (upper+lowercase) in whole text file and display the line number   
  `grep -nir "world" *.txt` search keyword text insensitive way (upper+lowercase) in whole text file recursive way in the whole directory and display the line number   
     

4. work with environment variables (environment variables should use all uppercase and _)   
  `export MY_DIR="dir1"` now MY_DIR is dir1   
  `env` show my environment   
  `cd $MY_DIR` moving to dir1      
  `unset MY_DIR` cancel MY_DIR   

5. vim
  `vim file1.txt` make a new file and enter the vim editor mode`i`insert mode(edit text)`ESC`+`:wq`write changes(save the change) and quit or just to quit without saving forcly`:q!`




