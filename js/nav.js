var card = $('<div class="card"> </div>')
var inputImage = $('<input value="add image URL"/>')
inputImage.attr('type', 'url')
var inputName = $('<input value="name"/>')
inputImage.addClass('input')
inputName.addClass('input')
var deleteBtn = $('<button>delete</button>')
var editBtn = $('<button>edit</button>')
var add = $('<button >add item</button>')
var deleteBtn = $('<button>Add item</button>')
var price = $('<input/>')
var desc = $('<input/>')


$('#navBtn').on('click' , function(){
  $('.card-container').append(card,inputImage,inputName,price,desc,add)
  $('.card-container').toggle()
})
// $("body").append(inputImage)
// $("body").append(inputName)
// $("body").append(price)
// $("body").append(desc)
// $("body").append(add)

// })

$(add).on("click" , function(){
    $(inputImage).hide()
    $(inputName).hide()
    $(price).hide()
    $(desc).hide()
    $(add).hide()
    
    var img = $('<img>').attr('src', inputImage.val())
    card.append(img)

    var name = $('<h1>').text( inputImage.val())
    card.append(name)

    var pricee = $('<h2>').text(price.val())
    card.append(pricee)

    var descr = $('<h3>').text(desc.val())
    card.append(descr)
  
    var BtnDelete = $('<button>').text('delete')
    card.append(BtnDelete)
    var BtnEdit = $('<button>').text('edit')
    card.append(BtnEdit)

})
var img = $('<img>').attr('src', inputImage.val())
    card.append(img)
    var name = $('<h1>').text( inputImage.val())
    card.append(name)
    var pricee = $('<h2>').text(price.val())
    card.append(pricee)
    var descr = $('<h3>').text(desc.val())
    card.append(descr)
  
    var BtnDelete = $('<button>').text('delete')
    card.append(BtnDelete)
    var BtnEdit = $('<button>').text('edit')
    card.append(BtnEdit)
    $('body').append(card)


// dropDown msg
$(document).ready(function() {
    const dropdown = $('#dropdown');
    const msgImg = $('#msg');
    
    // Show/hide 
    msgImg.click(function(event) {
      event.stopPropagation();
      dropdown.toggle();
    });
    
    //hide when cursoe outside
    $(document).click(function() {
      dropdown.hide();
    });
  });
  //dropDown notifications
  $(document).ready(function() {
    const dropdown = $('#dropdown-notif');
    const notif = $('#notification');
    
    // Show/hide 
    notif.click(function(event) {
      event.stopPropagation();
      dropdown.toggle();
    });
    
    //hide when cursoe outside
    $(document).click(function() {
      dropdown.hide();
    });
  });