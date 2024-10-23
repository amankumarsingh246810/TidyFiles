#!/usr/bin/env node
const fs=require('fs')
const figlet = require('figlet');
const colors = require('colors');
const path= require('path')
const inquirer = require('inquirer').default;


  const questions = [
    {
      type: 'input',
      name: 'username',
      message: 'enter path to directory'.green,
    }
]


inquirer.prompt(questions).then(function(answers){
    let filesArray=[];
  let givenPath=answers.username

if(fs.existsSync(givenPath))
    {
        // scan directory
        let scanDir=fs.readdirSync(givenPath)
    
    // know content type of directory
    //filter files from directory
    
    for(let i=0;i<scanDir.length;i++){
        let test=fs.statSync(path.join(givenPath,scanDir[i]))
         if(test.isFile()){
            filesArray.push(scanDir[i]);
         }
    
    }
    
    
    let colObj={
        videos:[],
        images:[],
        documents:[],
        others:[]
    }
    // extracting file extension
    for(let i=0;i<filesArray.length;i++){
        let y=path.extname(filesArray[i])
        if(y==".mp4"||y==".avi"||y==".mkv")
            colObj.videos.push(filesArray[i]);
         else if(y==".jpg"||y==".jpeg"||y==".png"||y==".gif")
          colObj.images.push(filesArray[i]);
       else if(y==".epub"||y==".pdf"||y==".txt"||y==".docx")
          colObj.documents.push(filesArray[i]);
       else 
       colObj.others.push(filesArray[i])
    }
    // creating desired directories
    for (let category in colObj) {
        let categoryPath = path.join(givenPath, category);
        if (!fs.existsSync(categoryPath)) {
            fs.mkdirSync(categoryPath);
        }
    }
    
// moving files
    for (let category in colObj) {
        for (let file of colObj[category]) {
            let oldPath = path.join(givenPath, file);
            let newPath = path.join(givenPath, category, file);
            fs.renameSync(oldPath, newPath);
                              }
             }    
    }
    
    else{
        console.log('no such file or directory'.red)
    }
})
