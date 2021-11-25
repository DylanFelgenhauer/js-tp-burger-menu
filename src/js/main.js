
(function (){
    const BurgerMenu ={
        init(){
            document.documentElement.classList.add('js-enabled');
            this.eMain = document.querySelector("main");
            document.querySelector(".nav-button").addEventListener("click",()=>{
                this.eMain.classList.toggle("is-opened");
            });
        }
    }
    BurgerMenu.init();
})();

