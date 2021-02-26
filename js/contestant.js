class contestant {
    constructor(){
      this.index=null;
      this.name=null;
    }
  
    getCount(){
      var contestantCountRef = database.ref('constestantCount');
      contestantCountRef.on("value",function(data){
        contestantCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        contestantCount: count
      });
    }
  
    update(){
      var contestantIndex = "constestants/contestant" + this.index;
      database.ref(contestantIndex).set({
        name:this.name,
     });
    }
  
    static getcontestantInfo(){
      var contestantInfoRef = database.ref('cotestants')
      
  constestantInfoRef.on("value",(data)=>{ allcontestants = data.val(); })
    }
  }
  