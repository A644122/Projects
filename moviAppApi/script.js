const Acesskey='07f_NkiDASbV2LJStVFwATWJNkeWzsMVoDzrL6mLUI8';

const formEl=document.querySelector('form');
const inputEl=document.getElementById('searchid');
const searchImg=document.querySelector('#searchresult');

const shomorbut=document.querySelector('#btnss');
let inputData='';
let page=1;

 async function searchImage(){
    inputData=inputEl.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${Acesskey}`;
   
    const rawdata= await fetch(url);
    const data= await rawdata.json();
     const results=data.results;
     if(page===1){
        searchresult.innerHTML=""

     }
     results.map((item)=>{
        const Imagewrapper=document.createElement('div');
         Imagewrapper.classList.add('searchcontain');


         const Image=document.createElement('img');
         Image.src=item.urls.small;
         Image.alt=item.alt_description;

         const Ancharlink=document.createElement('a');
         Ancharlink.href=item.links.html;
         Ancharlink.target="_blank";

         Ancharlink.textContent=item.alt_description;
         Imagewrapper.appendChild(Image)
         Imagewrapper.appendChild(Ancharlink)
        searchImg.appendChild( Imagewrapper)


     });
     page++;
     if(page>1){
        shomorbut.style.display='block'
     }


}
formEl.addEventListener('click',(events)=>{
    events.preventDefault();
    page=1;
    searchImage()

})
shomorbut.addEventListener('click',()=>{
 
    searchImage()

})
