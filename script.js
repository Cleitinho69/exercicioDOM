const campo = [...document.querySelectorAll('.campo_input')];

campo.map((input)=>{
    input.addEventListener('click',()=>{
        const label = input.children[0];

        label.classList.add('ativo')
        if(input.children[1].autofocus == false){
            
            label.style=`
            color: rgba(0, 0, 0, 3);
            `;
            console.log(input.children[1].style)
        }
    })
})