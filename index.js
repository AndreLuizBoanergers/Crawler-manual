const utils = require('utils');
const fs = require('fs');
const color = require('colors');
const axios = require('axios');
const lineReader = require('line-reader');
let i = 0;
let live = 0;
let die = 0;
let erro = 0;
async function crawler(line){
	try{

		const req = await axios(url,{
			method: 'GET',
			headers:{
				"Content-Type": "application/x-www-form-urlencoded",
				"Accept-Encoding": "*",
			}			
		});
		//pesquisa oque vc quiser em req.data caso a  requiçao seja completada
	}catch(err){
		erro++;
		fs.appendFile(`./output/Erros.txt`, `${line}` + '\n', () => {});
	}
}

lineReader.eachLine('lista.txt', function(line){
	try{
	   const Url = new URL(`${line}`);
	   const host = `${Url.protocol}//${Url.hostname}`;
	   let paths = "";
	   for(path of Url.pathname.split("/") ){
	   		if(path != ""){
	   			paths += `/${path}`;
	   			console.log(`${host}${paths}`);
	   		}else{

	   		}
	   }
	   
	}catch(err){
		console.log(err.code);
	}

})
