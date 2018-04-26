const url = '/chirps';

// Chirp get method

let findChirps = $.getJSON( "api/chirps", function(msgs) {
    let keys = Object.keys(msgs);
     for (let i of keys) { 
        $(`<tr class='text-center' id='row${i}'></tr>`).appendTo('#display');
        $(`<td>${msgs[i].text}</td>`).appendTo(`#row${i}`);
        if (`#row${i}` == `#rownextid`) {
            $('#rownextid').remove();
        }

    }
});

// Chirp post method

$('#submitBtn').click(function(e) {
    e.preventDefault();

let formInput = $('#chirpBox').val();
    console.log(formInput);
let inputs = {
    text: `${formInput}`
};
    console.log(inputs);
let chirpMsg = JSON.stringify(inputs);
    console.log(chirpMsg);

let addChirps = $.post( "api/chirps", function(chirpMsg) {
   
    // console.log(chirpMsg);
    // let chirp = JSON.stringify(chirpMsg);
    // console.log(chirp);
     
});


});
  
