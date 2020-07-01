let searchInput = document.getElementById('newTask');
let deletes = document.querySelectorAll('.delete');
let listElement = document.querySelectorAll('li');
let importants = document.querySelectorAll('.important');

let arr = [];

const deleteTask = function(event){
    if(event.target.className === 'delete'){
        event.target.parentElement.style.display = 'none';
    };
    
    
}
const importantTask = function(){
    if(event.target.className === 'important' && event.target.parentElement.style.color === 'blue'){
        event.target.parentElement.style.color = 'black';
    } else{
        event.target.parentElement.style.color = 'blue';
    };
}

function filterDone(){
    console.log('filter');
}

let filter = function (){
    let input = document.getElementById("input_search");
    input.addEventListener('keyup', () => {
        let filter = input.value.toLowerCase();
        let filterElements = document.querySelectorAll('#ourUl li');

        filterElements.forEach(item => {
            if (item.innerHTML.toLowerCase().indexOf(filter) > -1){
                item.style.display = '';                
            } else {
                item.style.display = 'none';
            }
        })
    })
};


function addTask(){
    let li = document.createElement('li');
        
    li.innerHTML = `<p>${searchInput.value}</p>
        <button class="delete">delete</button>
        <button class="important">important</button>
        `;

    document.getElementById('ourUl').append(li);
        
    
    document.querySelector('#ourUl').addEventListener('click', deleteTask);
    document.querySelector('#ourUl').addEventListener('click', importantTask);
    
    filter();

};



/* document.getElementById('newTask').addEventListener('keyup', filterName);
 */
document.getElementById('add').addEventListener('click', addTask);
