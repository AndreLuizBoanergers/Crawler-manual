const utils = require('utils');
const fs = require('fs');
const color = require('colors');
const axios = require('axios');
const lineReader = require('line-reader');
const obj_1 = require("./config/mainKeywords.json");
const obj_2 = require("./config/Keywords.json");

function sleep(ms){
	return new Promise( resolve => {
		setTimeout(()=>{resolve('')},ms);
	})
}
async function crawler(url){
	//console.log(url)
	try{

		const req = await axios(url,{
			method: 'GET',
			headers:{
				"Content-Type": "application/x-www-form-urlencoded",
				"Accept-Encoding": "*",
			}			
		});
//pesquisa oque vc quiser em req.data caso a  requiçao seja completada
		Object.values(obj_1).forEach(function(item){
			console.log(item);
		})
		
	}catch(err){
		
		//fs.appendFile(`./output/Erros.txt`, `${line}` + '\n', () => {});
	}
}
async function start(){
	lineReader.eachLine('lista.txt', function(line){
		try{
		   const Url = new URL(`${line}`);
		   const host = `${Url.protocol}//${Url.hostname}`;
		   let paths = "";

		   for(path of Url.pathname.split("/") ){
		   		if(path != ""){
		   			paths += `/${path}`;
		   			let url = `${host}${paths}`;
		   			sleep(2000)
		   			crawler(url)
		   		}else{

		   		}
		   }
		}catch(err){
			console.log(err.code);
		}

	});	
}
start();
