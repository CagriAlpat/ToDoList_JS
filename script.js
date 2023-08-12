let addToDoButton= document.getElementById('addToDo');
let toDoContainer=document.getElementById('toDoContainer');
let inputText=document.getElementById('inputText');
let clearTodo=document.getElementById('clearToDo');

addToDoButton.addEventListener('click',function(){

    let paragraph= document.createElement('p');/*  paragraf oluştur*/
    paragraph.classList.add('paragraph-styling')
    toDoContainer.appendChild(paragraph /*paragrafın  içine cocuğu olarak aktar*/)

    paragraph.innerHTML = inputText.value
    /*input textin içine  yazdığımız değeri paragrafın içine atama yapıyoruz yadırıyoruz*/
    inputText.value="";/*input textin içeriğiniz sıfırla */

    paragraph.addEventListener('click',function(){ /* yazılan şeylerin üstüne bir kere tıklayınca üstünü cizecek */
        paragraph.style.textDecoration= 'line-through';
     })
    paragraph.addEventListener('dblclik',function(){/* iki kere üstüne tıklayınca silinmesi lazım ama olmadıı */
        toDoContainer.removeChild(paragraph);
    })
    clearTodo.addEventListener('click',function(){
        paragraph.remove();

    })



})
