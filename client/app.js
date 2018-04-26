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

$('#submitBtn').click(function() {

let formInput = $('#chirpBox').val();
    console.log(formInput);
let inputs = {
    text: `${formInput}`
};
    $.ajax ({
        url: 'api/chirps',
        type: "POST",
        data: JSON.stringify(inputs),
        contentType: "application/json; charset=utf-8",
    }).done(() => {
        console.log('success');
    }).fail((err) => {
        console.log('failed');
        console.log(err);
    });
});
  


 