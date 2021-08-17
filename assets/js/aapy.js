const chatButton = document.querySelector('.chatbox__button');
const chatContent = document.querySelector('.chatbox__support');
const icons = {
    isClicked: '</p>Clicked!</p>',
    isNotClicked: '<p>Not clicked!</p>'
}
const chatbox = new InteractiveChatbox(chatButton, chatContent, icons);
chatbox.display();
chatbox.toggleIcon(false, chatButton);

Swal.fire({
    ...,
    showClass: {
      popup: 'swal2-noanimation',
      backdrop: 'swal2-noanimation'
    },
    hideClass: {
      popup: '',
      backdrop: ''
    }
})
  
Swal.fire({
    template: '#my-template'
})

Swal.bindClickHandler()

Swal.mixin({
  toast: true,
}).bindClickHandler('data-swal-toast-template')


var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})
