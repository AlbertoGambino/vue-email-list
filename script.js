
function mailGenerator(num) {
  for (var i = 0; i < num; i++) {

    $.ajax({
        url: 'https://flynn.boolean.careers/exercises/api/random/mail',
        method: 'GET',
        success: function(data) {

          const res = data.response;
          printMail(res);


        },
        error: function() {
            console.log('error');
        }
    });

  }


}
function printMail(mail) {

      const target = $('#target');

      target.append('<li>'+ mail +'</li>')



}
function init() {

console.log('hello');
mailGenerator(10)

}
document.addEventListener('DOMContentLoaded', init);
