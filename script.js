const Page={
loading:{
    start:()=>{
        const loading=document.querySelector(".loading");
        loading.classList.add("disable");
    }
}
};
(()=>{
    Page.loading.start();
})();