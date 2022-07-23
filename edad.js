const menores= []
const mayores= []


function adding(){
    const age= document.getElementById('age').value
    const name= document.getElementById('name').value

    if(age >=18){
        mayores.push({age: age, name: name})
        console.log(mayores)
    }else{
        menores.push({age: age, name: name})
        console.log(menores)
    }
    }

    function mostrar(){
        const menoresElement= document.getElementById('menores');
        menores.forEach(item => {
            const newLine = document.createElement('li');
            const content = document.createTextNode(
                item.age + ' ' + item.name);
                menoresElement.appendChild(newLine)
                menoresElement.appendChild(content)
            
        })
    }