
const Storage = {
    allocate(name, age, email, phone, password){
        localStorage.setItem("User-data", JSON.stringify({name, age, email, phone, password}))

    },
    
    get(){
        return JSON.parse(localStorage.getItem("User-data")) || []
    }
}

const Execute = {
    execute(){
        let userdata = Storage.get()
        Validate.validation({data: userdata})
    }
}


const Validate = {
    register(){
        let name = document.getElementById('name').value
        let age = document.getElementById('age').value
        let email = document.getElementById('email').value
        let phone = document.getElementById('phone').value
        let password = document.getElementsById('password').value
        
        Storage.allocate(name, age, email, phone, password)
    },

    validation({data}){
        let counter = 0
        let name = document.getElementById('name').value
        let email = document.getElementById('email').value
        let password = document.getElementById('password').value

        if(data.name = name)
        {
            counter++
        }

        if(data.email = email)
        {
            counter++
        }

        if(data.password = password)
        {
            counter++
        }
        
        if(counter = 3)
        {
            alert('Hey ' + data.name + ', you logged in')
        }
    }
}

