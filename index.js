let inputHTML = document.getElementById("input-tag");
let btnHTML = document.getElementById("save-btn");
let shiftHTML = document.getElementById("shift-btn");
let popHTML = document.getElementById("pop-btn");
let dltHTML = document.getElementById("delete-btn");
let ulHTML = document.getElementById("ul-class");

let works = [];

let worksExist = localStorage.getItem("works");

if(worksExist)
{
    works = JSON.parse(worksExist);
    renderWorks();
}

dltHTML.addEventListener("click", function()
{
    localStorage.clear();
    works = [];
    renderWorks();
});

shiftHTML.addEventListener("click", function()
{
    const temp = works[0]; 
    for (let i = 0; i < works.length - 1; i++) { 
        works[i] = works[i + 1]; 
    } 
    works[works.length - 1] = temp; 

    renderWorks();
});

popHTML.addEventListener("click", function()
{
    works.pop();
    localStorage.setItem("works", JSON.stringify(works));

    renderWorks();
});

btnHTML.addEventListener("click", function()
{
    let x = inputHTML.value;
    works.push(x);
    inputHTML.value = "";

    localStorage.setItem("works", JSON.stringify(works));

    renderWorks();
});

function renderWorks()
{
    let itemString = "";
    for(let i=0;i<works.length;i++)
    {                                           
        itemString += `                             
            <li>
                ${works[i]}
            </li>
        `;                          //template string
    }

    ulHTML.innerHTML = itemString;
}
