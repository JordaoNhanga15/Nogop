function toggle(){
    let y=document.querySelector('#icon')
    let u=document.querySelector('.all')


    y.addEventListener('click',optEvents,false);


    function mudança(){
      if(u.classList.contains('show')){
u.classList.remove('show')
y.setAttribute("src","Icones/menu_24px.png")
      }
      else{
   u.classList.add('show')
   y.setAttribute('id','ion')
   y.setAttribute('src','Icones/multiply_26px.png')
     }
           
    }

            function optEvents(){
                if(event.target.id==='icon'){
                    mudança();
                }
                else if(event.target.id==='ion'){mudança();}

            }
}