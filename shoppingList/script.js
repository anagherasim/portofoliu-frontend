window.onload = () => {
    console.log(input.value);
    console.log(category.value);
    addButton.addEventListener('click',addItem);

    function addItem()
    {   
        let item = document.createElement('li');
        let div1 = document.createElement('div');
        let checkBox = document.createElement('input')
        checkBox.setAttribute('type','checkbox');
        let para1 = document.createElement('p');
        let para2 = document.createElement('p');
        let name = document.createTextNode(input.value);
        let category = document.getElementById('category');
        category = document.createTextNode(category.value);
        let deleteButton = document.createElement('button');
        let dbText = document.createTextNode('Delete');
        let editButton = document.createElement('button');
        let ebText = document.createTextNode('Edit');
        let div2 = document.createElement('div');
        
        div1.setAttribute('class','item');
        div2.setAttribute('class','buttons');
        para1.setAttribute('class','itemName');
        para2.setAttribute('class','categoryText');
       
        item.appendChild(div1);
        item.appendChild(div2);
        div1.appendChild(checkBox);
        div1.appendChild(para1);
        div1.appendChild(para2);
        div2.appendChild(editButton);
        editButton.appendChild(ebText);
        div2.appendChild(deleteButton);
        deleteButton.appendChild(dbText);
        para1.appendChild(name);
        para2.appendChild(category);

        addedItemsContainer.appendChild(item);

        deleteButton.addEventListener('click',function(){
            item.remove();
        });
        
        var saveButton = document.createElement('button');
        let sbText = document.createTextNode('Save');
        saveButton.appendChild(sbText);            

        editButton.addEventListener('click', function(){
            let inputNew = document.createElement('input');
            inputNew.setAttribute('id','littleInput');
            para1.replaceWith(inputNew);
            
            editButton.replaceWith(saveButton);
            
            saveButton.addEventListener('click',function() {
                //let sbInput = document.getElementById('littleInput');
                console.log(inputNew.value);
    
                let paraNew = document.createElement('p');
                let paraNewText = document.createTextNode(inputNew.value);
    
                paraNew.appendChild(paraNewText);
                paraNew.setAttribute('class','itemName');
    
                inputNew.replaceWith(paraNew);
                saveButton.replaceWith(editButton);
            });

        });
        
        
        

    }
}
