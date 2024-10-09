let roll = [];
let due = document.createElement('img');
let ini = document.createElement('img');
let con = document.createElement('img');
let cen = document.createElement('img');
due.src = "img/due.png";
ini.src = "img/ini.png";
con.src = "img/con.png";
cen.src = "img/cen.png";

img = [due,ini,con,cen];
flag = true;
rollflag = true;

let Character = [];

let dueroll = [2,7,11,12,14,18,23];
let iniroll = [4,9,13,16,19,21];
let conroll = [1,5,10,15,20,24];
let cenroll = [3,6,8,17,22,25];

for(let i=1;i<=25;i++){
    let tmp = document.createElement("img");
    tmp.src = "img/CHAR/"+i+".png";
    Character[i] = tmp;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function random(){
    setroll();
    if(flag&&rollflag){
    flag=false;
    shuffle();
    anime1();
    anime2();
    anime3();
    anime4();
    anime5();
    }
}

function shuffle(){
    for(let i=0;i<200;i++){
        const index1 = Math.floor(Math.random() * 4);
        const index2 = Math.floor(Math.random() * 4);
        if (index1 !== index2) {
            [roll[index1], roll[index2]] = [roll[index2], roll[index1]];
        }
    }
}

async function anime1() {
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 4; j++) {
            await sleep(200);
            const container = document.getElementById("T1");
            const Element = container.querySelector('img');
            if (Element) {
                Element.src = img[j].src;
            } else {
                const newElement = document.createElement('img');
                newElement.src = img[j].src;
                container.appendChild(newElement);
            }
        }
    }
    document.getElementById("T1").querySelector('img').src = img[roll[0]].src;
}

async function anime2() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            await sleep(200);
            const container = document.getElementById("T2");
            const Element = container.querySelector('img');
            if (Element) {
                Element.src = img[(j + 1) % 4].src;
            } else {
                const newElement = document.createElement('img');
                newElement.src = img[(j + 1) % 4].src;
                container.appendChild(newElement);
            }
        }
    }
    document.getElementById("T2").querySelector('img').src = img[roll[1]].src;
}

async function anime3() {
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 4; j++) {
            await sleep(200);
            const container = document.getElementById("T3");
            const Element = container.querySelector('img');
            if (Element) {
                Element.src = img[(j + 2) % 4].src;
            } else {
                const newElement = document.createElement('img');
                newElement.src = img[(j + 2) % 4].src;
                container.appendChild(newElement);
            }
        }
    }
    document.getElementById("T3").querySelector('img').src = img[roll[2]].src;
}

async function anime4() {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 4; j++) {
            await sleep(200);
            const container = document.getElementById("T4");
            const Element = container.querySelector('img');
            if (Element) {
                Element.src = img[(j + 3) % 4].src;
            } else {
                const newElement = document.createElement('img');
                newElement.src = img[(j + 3) % 4].src;
                container.appendChild(newElement);
            }
        }
    }
    document.getElementById("T4").querySelector('img').src = img[roll[3]].src;
}

async function anime5() {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 4; j++) {
            await sleep(200);
            const container = document.getElementById("T5");
            const Element = container.querySelector('img');
            if (Element) {
                Element.src = img[j].src;
            } else {
                const newElement = document.createElement('img');
                newElement.src = img[j].src;
                container.appendChild(newElement);
            }
        }
    }
    document.getElementById("T5").querySelector('img').src = img[roll[4]].src;
    await sleep(500);
    flag=true;
}

function setroll(){
    roll = [];
    let select1 = document.getElementById("ROLL1");
    let value1 = select1.value;
    value1 = parseInt(value1);
    let select2 = document.getElementById("ROLL2");
    let value2 = select2.value;
    value2 = parseInt(value2);
    let select3 = document.getElementById("ROLL3");
    let value3 = select3.value;
    value3 = parseInt(value3);
    let select4 = document.getElementById("ROLL4");
    let value4 = select4.value;
    value4 = parseInt(value4);
    result = value1+value2+value3+value4;
    if(result==5 || result==0){
        document.getElementById("error").classList.add("hidden");
        if(result==5){
            for(let i=0;i<value1;i++){
                roll.push(0);
            }
            for(let i=0;i<value2;i++){
                roll.push(1);
            }
            for(let i=0;i<value3;i++){
                roll.push(2);
            }
            for(let i=0;i<value4;i++){
                roll.push(3);
            }
        }else{
            for(let i=0;i<5;i++){
                let random = Math.floor(Math.random() * 4);
                roll.push(random);
            }
        }
        rollflag=true;
    }else{
        document.getElementById("error").classList.remove("hidden");
        rollflag=false;
    }
}

let functionlist = [
    dueanime,
    inianime,
    conanime,
    cenanime
];

function randomparty(){
    if(flag){
        duei = 0;
        inii = 0;
        coni = 0;
        ceni = 0;
        shuffleAG();
        functionlist[roll[0]]("P1");
        functionlist[roll[1]]("P2");
        functionlist[roll[2]]("P3");
        functionlist[roll[3]]("P4");
        functionlist[roll[4]]("P5");
    }
}

let duei = 0;
let inii = 0;
let coni = 0;
let ceni = 0;

async function dueanime(cell){
    let randomM = -1;
    let randomN = -1;
    for (let i = 0; i < 25; i++) {
        await sleep(200);
        do {
            randomN = Math.floor(Math.random() * dueroll.length);
        } while (randomN === randomM);
        randomM = randomN;
        const container = document.getElementById(cell);
        const Element = container.querySelector('img');
        if (Element) {
            Element.src = Character[dueroll[randomN]].src;
        } else {
            const newElement = document.createElement('img');
            newElement.src = Character[dueroll[randomN]].src;
            container.appendChild(newElement);
        }
    }
    duei++;
    document.getElementById(cell).querySelector('img').src = Character[dueroll[dueAG[duei-1]]].src;
    flag=true;
}

async function inianime(cell){
    let randomM = -1;
    let randomN = -1;
    for (let i = 0; i < 25; i++) {
        await sleep(200);
        do {
            randomN = Math.floor(Math.random() * iniroll.length);
        } while (randomN === randomM);
        randomM = randomN;
        const container = document.getElementById(cell);
        const Element = container.querySelector('img');
        if (Element) {
            Element.src = Character[iniroll[randomN]].src;
        } else {
            const newElement = document.createElement('img');
            newElement.src = Character[iniroll[randomN]].src;
            container.appendChild(newElement);
        }
    }
    inii++;
    document.getElementById(cell).querySelector('img').src = Character[iniroll[iniAG[inii-1]]].src;
    flag=true;
}

async function conanime(cell){
    let randomM = -1;
    let randomN = -1;
    for (let i = 0; i < 25; i++) {
        await sleep(200);
        do {
            randomN = Math.floor(Math.random() * conroll.length);
        } while (randomN === randomM);
        randomM = randomN;
        const container = document.getElementById(cell);
        const Element = container.querySelector('img');
        if (Element) {
            Element.src = Character[conroll[randomN]].src;
        } else {
            const newElement = document.createElement('img');
            newElement.src = Character[conroll[randomN]].src;
            container.appendChild(newElement);
        }
    }
    coni++;
    document.getElementById(cell).querySelector('img').src = Character[conroll[conAG[coni-1]]].src;
    flag=true;
}

async function cenanime(cell){
    let randomM = -1;
    let randomN = -1;
    for (let i = 0; i < 25; i++) {
        await sleep(200);
        do {
            randomN = Math.floor(Math.random() * cenroll.length);
        } while (randomN === randomM);
        randomM = randomN;
        const container = document.getElementById(cell);
        const Element = container.querySelector('img');
        if (Element) {
            Element.src = Character[cenroll[randomN]].src;
        } else {
            const newElement = document.createElement('img');
            newElement.src = Character[cenroll[randomN]].src;
            container.appendChild(newElement);
        }
    }
    ceni++;
    document.getElementById(cell).querySelector('img').src = Character[cenroll[cenAG[ceni-1]]].src;
    flag=true;
}

let dueAG = [0,1,2,3,4,5,6];
let iniAG = [0,1,2,3,4,5];
let conAG = [0,1,2,3,4,5];
let cenAG = [0,1,2,3,4,5];

function shuffleAG(){
    for(let i=0;i<200;i++){
        let index1 = Math.floor(Math.random() * 7);
        let index2 = Math.floor(Math.random() * 7);
        if (index1 !== index2) {
            [dueAG[index1], dueAG[index2]] = [dueAG[index2], dueAG[index1]];
        }
        index1 = Math.floor(Math.random() * 6);
        index2 = Math.floor(Math.random() * 6);
        if (index1 !== index2) {
            [iniAG[index1], iniAG[index2]] = [iniAG[index2], iniAG[index1]];
        }
        index1 = Math.floor(Math.random() * 6);
        index2 = Math.floor(Math.random() * 6);
        if (index1 !== index2) {
            [conAG[index1], conAG[index2]] = [conAG[index2], conAG[index1]];
        }
        index1 = Math.floor(Math.random() * 6);
        index2 = Math.floor(Math.random() * 6);
        if (index1 !== index2) {
            [cenAG[index1], cenAG[index2]] = [cenAG[index2], cenAG[index1]];
        }
    }
}