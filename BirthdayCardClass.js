class BirthdayCard {
    constructor(){
      this.textColor = ["#065471","#0A91AB","#FFC045","#756AB6","#B2A4FF","#3876BF","#219C90","#864AF9","#363062","#756AB6","#116A7B","#537188","#7286D3","#65647C","#98A8F8","#80558C","#68A7AD","#1572A1","#6867AC","#B983FF","#5FBDFF","#0766AD","#00A9FF","#7752FE","#19A7CE","#0766AD"];
      this.randomTextIndex = Math.floor(Math.random() * this.textColor.length);
      this.borderColors = ["#F6F7C4","#FDF7E4","#FFFBF5","#F3FDE8","#F8F6F4","#FEFCF3","#FBF8F1","#FDFAF6","#FCF8EC","#FCF9EA"];
      this.randomBorderIndex = Math.floor(Math.random() * this.borderColors.length);
    }
    setPlainP(content){
      return `<p> ${content} </p>`
    }
    setPColor(content,size){
      let textColor = this.textColor[this.randomTextIndex];
      return `<p style='margin:2px; padding:2px; font-size:${size}px; color:${textColor}; font-weight:600; font-family:Comic Sans MS, Comic Sans, cursive;'>`+ content + "</p>"
    }
    setItalic(content){
      return `<i> ${this.setPColor(content,13)} </i>`;
    }
    generaterCard(content){
      const borderColor = this.borderColors[this.randomBorderIndex];
      return `<div style='border:dotted; border-width:8px; border-color:${borderColor} ; border-radius:5px; padding:60px 30px; background-color:#fbf6ed;'>
      <div style="">
      </div>
      <hr style="border:2px solid #edd2a4;" />
      ${this.setPColor(content,20)}
      ${this.setPColor("With best wishes, Happy Birthday!",20)}
      ${this.setItalic("All Dwight Staff & Sunshine Commitee")}
      <hr style="border:2px solid #edd2a4" />
      </div>`
    }
    generateCard2(content){

      return `
        <div style='position: relative; border-radius:5px;border:double; border-color:white; border-width:15px; padding:30px 20px; background-color:#fbf6ed; width:580px;height: 420px;'>
          <div style="display: flex; justify-content: space-between; align-items: center; ">
            <div style="width:82% " >
              <p style="text-align: center; align-self: center;font-size: 43px; padding: 0;margin: 0; font-family:Comic Sans MS, Comic Sans, cursive;">HAPPY BIRTHDAY</p>
            </div>
            <div style="width:9%">
              <div style="width: 100px; height:120px; border: dotted; border-width:6px; align-self:end">
                <img style="width: 100%" src="cid:dwightLogo" />
              </div>
            </div>
          </div>
          <div style="display: flex;justify-content: space-between;height:300px">
            <div style="width:40%">
              <img style="width: 90%;display: block; margin: auto;" src="cid:sunshineLogo"/>
            </div>
            <div style="width:60%; display: flex;">
              <hr style=" border:1px solid #edd2a4; margin-right: 3px;" />
              <div style="margin-left:10px; margin-top:0">
                  ${this.setPColor(content,14)}
                  ${this.setPColor("Have a great day!",14)}
                  <br/>
                  ${this.setItalic("With best wishes, Happy Birthday!")}
                  ${this.setItalic("All Staff & Sunshine Commitee")}
              </div>
            </div>   
          </div>

        </div>`
    }
}

// <p style="position: absolute; right: 50px; bottom: 0px; margin: 0; padding: 0; font-size: 10px; font-style: italic;"><i>powered by lccodelab</i></p>
