function emailReminder() {
   const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
 "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  let today = new Date();
  let todayMonth = today.getMonth() + 1;
  let todayDay = today.getDate();
  let currentYear = today.getFullYear();
  let formattedToday = todayDay < 10? "0"+todayDay:todayDay;
  let todayFullDate = `${monthNames[todayMonth]}-${formattedToday}-${currentYear}`;
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = sheet.getRange("A4:G126").getValues();
  let file = DriveApp.getFileById('image-id');
  let sunshineImage = file.getAs('image/png');
  let postStamp = DriveApp.getFileById("image-id");
  let PostCardImage = postStamp.getAs("image/png");
  for (var i = 0; i < data.length; i++) {
    let row = data[i];
    // checks if email and birthdays empty
    if (row[1]!==""&& (row[3]!=="" && row[4]!=="")){
      let firstName = row[1];
      let birhtdayMonthDate = row[3];
      let birthdayDate = birhtdayMonthDate.getDate();
      let birthdayMonth = birhtdayMonthDate.getMonth()+1;
      let birthdayPersonEmail = row[4];
      let peopleToCC = 'email1@email.com, email2@email.com, email3@email.com,';
      if (birthdayPersonEmail==="chkim@dwight.or.kr"){continue};
      if (birthdayMonth === todayMonth && birthdayDate === todayDay){
        let birthdayMessage = new BirthdayMessages().getBirthdayMessage();
        let emailObject = {};
        let bdayCard = new BirthdayCard();
        emailObject['subject'] = 'Happy Birthday, '+firstName+"! 🎂";
        emailObject['name'] = "Sunshine Birthday 2.0";
        // emailObject['to'] = "lchi@dwight.or.kr";      // for testing
        // ----- Production ----- //
        emailObject['to'] = birthdayPersonEmail;
        emailObject['cc'] = peopleToCC;
        // ----- Production ----- //
        let greetings = `Dear ${firstName}: `;

        let emailBody = greetings +"<br/><br/>"+ birthdayMessage;
        emailObject['htmlBody'] = bdayCard.generateCard2(emailBody);
        emailObject['inlineImages'] = {
              sunshineLogo: sunshineImage, 
              dwightLogo: PostCardImage
          }
        // DriveApp.createFile("SampleBDayFile",emailObject,MimeType.PNG)
        console.log(emailObject);
        MailApp.sendEmail(emailObject);
      }
    }
  }
}
 


