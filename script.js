const post = document.querySelector('.button')




post.addEventListener('click', function(){

    const new_post = document.createElement('P');
    const text = document.querySelector('.input').value.replace(/\n/g,'<br />')
    new_post.innerHTML = text;

    if(text.length < 151 && text.length != 0){




        const bubble = document.createElement('div')
        bubble.setAttribute('class', 'bubble')
    
    
        const timeline = document.querySelector('.postingan')
        timeline.appendChild(bubble)
        bubble.appendChild(new_post)

    }
    else if(text.length == 0){
        
        alert('please insert your text')

    }
    else{
        alert('cannot post more than 150 character')
    }

 

    document.querySelector('.input').value = ''




    

})