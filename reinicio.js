class reinicio{
    constructor(){
      
        this.button4=createButton('Reiniciar')
    }

    
    hide(){
        this.button4.hide();
        }

    display(){
        
    this.button4.position(windowWidth-100, windowHeight-200);
    this.button4.style('background', '#FBBB21');
    this.button4.style('font-size', '50px');
    this.button4.style('color', 'white');
    this.button4.style('border-radius', '60px');

    this.button4.mousePressed(()=>{
        restart2();
        
          })
        
        
    }
   


    }