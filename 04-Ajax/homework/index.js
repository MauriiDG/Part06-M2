$("#boton").click(() => {
    let lista = $("#lista");
    lista.empty();
    $.get('http://localhost:5000/amigos', response =>{
      for ( let i = 0; i < response.length; i++) {
          let li = `<li>${response[i].name}</li>`;
          lista.append(li);
    
      };
    });
  });

$("#search").click(() => {
  let inputValue = $("#input").val();
  $.get(`http://localhost:5000/amigos/${inputValue}`, response =>{
    $("#amigo").text(response.name);
  });
});

$("#delete").click(() => {
  let deleteValue = $("#inputDelete").val();
  $.ajax({
    url: `http://localhost:5000/amigos/${deleteValue}`,
    type: 'DELETE',
    success: function(response) {
        $("#sucess").text("Amigo borrado con exito");
    }
  });
});
