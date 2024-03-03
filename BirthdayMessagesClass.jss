class BirthdayMessages {
  constructor(currentYear = new Date().getFullYear()){
    this.currentYear = currentYear;
    this.birthdayMessages = [
        "Birthday Message 1",
        "Birthday Message 2",
        "Birthday Message 3",

    ];
  }

  getBirthdayMessage(){
    const randomIndex = Math.floor(Math.random() * this.birthdayMessages.length);
    let message = this.birthdayMessages[randomIndex].replace("{year}", this.currentYear);
    return message
  }
}

function checkLength (){
  let messages = new BirthdayMessages().birthdayMessages
}







