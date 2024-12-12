// let headvar=document.getElementById('Heading');
// headvar.style.color = 'black';
// let classfruits =document.getElementsByClassName("furits");
// for(let x in classfruits){
//     classfruits[x].style.color = 'lightgreen';
//     classfruits[x].style.fontSize = '20px';
   
// }
// Array.from(classfruits).forEach(fruit=>{
//     classfruits[2].style.color = 'blue';

// }
// )
// // for(let )

// const unod=document.querySelector('ul')
// const tagna=document.getElementsByTagName('h4')
// const eleme=document.getElementsByTagName('li')
// unod[1].style.color = 'lightgreen';
// eleme.style.color = 'red';
//  let array=[3,4,5[34,56,[34,5,6,7,8]],456,5,6[67,[567,54]]];
//  array.flat()
//  console.log(array)


// let firstparent=document.getElementById('first');
// let childrens=firstparent.children;
// childrens[2].style.color='green';
// firstparent.forEach(ele=>{
//     ele.lastElementChild.style.background='green'
// let input_field=document.createElement('input')
// input_field.type="text";
// input_field.id="first"
// input_field.class="first12"
// input_field.style.border="1px solid green";
// input_field.style.margin="20px"
// let varia=document.getElementById('box1')
// document.body.insertBefore(input_field,varia);
// document.getElementById('box1').prepend(input_field)

// let samia=document.getElementsByClassName('same')
// document.body.insertBefore(input_field,samia[1])
// document.body.removeChild(input_field)

// document.body.createElement(<d></d>

// let new_elment=document.createElement('div')
// new_elment.id="new_element"
// new_elment.className="same"

// let div_created=document.body.appendChild(new_elment)
// let created_h1=document.createElement('h1')
// created_h1.id='new_element'
// created_h1.class='same'
// created_h1.style.background='green'
// created_h1.style.border='10px solid'
// created_h1.innerHTML='<I>this is heading'
// div_created.appendChild(created_h1)

// const varia=document.getElementById('click me')
// varia.addEventListener('click',event=>{
//     event.target.style.background='green';
//     event.target.textContent='i am clicked'
// });
// varia.addEventListener('mouseover',event=>{
//     event.target.style.background='red';
//     event.target.textContent='i am mouserover'
//     document.write('dfgd')
// });
// varia.addEventListener('mouseout',event=>{
//     event.target.style.background='white';
//     event.target.textContent='mouse outed'
//     event.target.style.border='none';
    
// });➡️
// 
// let arorow_varia=document.getElementById('arrow')
// document.addEventListener('keydown',down_arrow=>{
//     arorow_varia.innerHTML='⬇️'
// })
// document.addEventListener('keyup',down_arrow=>{
//     arorow_varia.innerHTML='😊'
// })
// // document.addEventListener('keyright',down_arrow=>{
// //     arorow_varia.innerHTML=''
// // })
// let varia=document.getElementById('arrow')

// addEventListener('keydown',(event)=>{
//     const switchamount=10;
//     let x=0;
//      let y=0;
// if(event.key.startsWith('Arrow')){

//     event.preventDefault();
//     switch(event.key){
//         case 'ArrowUp':
//             y-=switchamount
//             break;
//             case 'ArrowDown':
//                 y+=switchamount
//                 break;
//                 case 'ArrowLeft':
//                     x-=switchamount
//                     break;
//                     case 'ArrowRight':
//                         x+=switchamount 
//                         break;


//     }
//     varia.style.top=`${y}px`;
//     varia.style.left=`${x}px`;
// }


// });
// let varia=document.getElementById('button');
// let image =document.getElementById('imd');
// varia.addEventListener('click',event=>{
// // image.style.display="none";
// // let hidden=varia.innerHTML ='SHOW'
// if(image.style.visibility==='hidden'){
//     image.style.visibility="visible";
//     varia.innerHTML ='HIDE'
// }
// else{
//     image.style.visibility="hidden";
//     varia.innerHTML ='SHOW'
// }
// })

// let varia=document.querySelectorAll('.buttons')
// let varia1=document.createElement('button')
// // varia1.className="buttons"
// varia1.textContent = '5'
// varia1.classList='buttons'

// document.body.append(varia1)
// varia.forEach(button =>{

//     button.addEventListener('mouseover',event=>{
//         event.target.style.backgroundColor='hsl(120, 40%, 60%)'});

// });
// varia.forEach(button =>{

//     button.addEventListener('mouseout',event=>{
//         event.target.style.backgroundColor='white'});

// });

// varia.forEach(button =>{
//     button.addEventListener('click',event=>{
//         event.target.remove();
//         console.log(varia)
//         varia=document.querySelectorAll('.buttons')
//     });
// })

let varia=document.getElementById('mybutton')

varia.addEventListener('mouseover',event=>{
    event.target.classList.toggle('hover')
})
// varia.addEventListener('mouseout',event=>{
//     event.target.classList.remove('hover')
// })

