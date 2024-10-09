let roll = [0,1,2,3,3];
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

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function random(){
    if(flag){
    flag=false;
    shuffle();
    topanime();
    jganime();
    midanime();
    botanime();
    supanime();
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

async function topanime() {
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

async function jganime() {
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

async function midanime() {
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

async function botanime() {
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

async function supanime() {
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