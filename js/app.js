$(document).ready(function(){
$('#naam').focus(function () {
    $("input#naam").after('<p class="form-validation"> verplicht </p> ');
});
$('#naam').blur(function () {
    $(".form-validation").hide();
});

function OnSubmit(event) {
  event.preventDefault();
  console.log('dit is dus ook gelukt');
};

$(".dierForm").submit(function(e){
  var animal ={
    'species':  $('input[name=dier]:checked').val(),
    'name':     $('#naam').val(),
    'age':      $('#leeftijd').val(),
    'regnr':    $('#regnr').val(),
    'reserved':  $("input[name=reserved]:checked").val()
  }
  if(animal["name"] == ""){
      $("input#naam").after('<p class="form-validation"> Naam moet ingevuld zijn </p> ');
      $('#naam').blur(function () {
          $(".form-validation").hide();
        });
  }
  if(animal["age"] < 0){
      $("input#leeftijd").after('<p class="form-validation"> leeftijd moet groter dan 0 zijn </p> ');
  };

  if(animal["regnr"] < 0){
      $("input#regnr").after('<p class="form-validation"> Registratie nummer moet groter dan 0 zijn </p> ');
  };

});
});
