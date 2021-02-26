class question {
    constructor(){
        this.input1=createInput();
        this.title=createTitle();
        this.question=createQuestion();
        this.option1=createOption1();
        this.option2=createOption2();

     
    }
    hide(){
        this.input1=hide();
        this.title=hide();
        this.question=hide();
        this.option1=hide();
        this.option2=hide();
      }
 
    display(){
        this.title.html("MY QUIZ GAME")
        this.title.posititon(350,0);

        this.question.html("questio:- what starts and ends with the letter E but has only one letter");
        this.question.position(150,80);
        this.option1.html("1:everyone");
        this.option1.postion(150,100);
        this.option2.html("2:envelope");
        this.option2.position(150,120);

        this.input1.position(150,230)
    }
}