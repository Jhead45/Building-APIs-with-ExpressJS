const url = '/chirps';


// Chirp with get, put, and delete method

let findChirps = $.getJSON( "api/chirps", function(msgs) {
    let keys = Object.keys(msgs);
     for (let i of keys) { 

        $(`<tr class='text-center' id='row${i}'></tr>`).appendTo('#display');
        $(`<td id='col${i}' data-toggle="modal" data-target="#myModal">${msgs[i].text}</td><td class='eraseRow${i}'>X</td>`).appendTo(`#row${i}`);

        $(`#col${i}`).click(function(){

            $('.modal-body').html(`<textarea id="t${i}">${msgs[i].text}</textarea>`);
            $('.modal-footer').html(`<button id="s${i}" type="button" class="btn btn-default" data-dismiss="modal">Save Changes</button>`);

            $(`#s${i}`).click(function(){
                let message = $(`#t${i}`).val()
                    console.log(message);
                let textChange = {
                        text: `${message}`
                    };
                $.ajax ({
                    url: `api/chirps/${i}`,
                    type: "PUT",
                    data: JSON.stringify(textChange),
                    contentType: "application/json; charset=utf-8",
                }).done(() => {
                    console.log('success');
                    window.location.reload(true);
                }).fail((err) => {
                    console.log('failed');
                    console.log(err);
                });

            })
             
        })    

        $(`.eraseRow${i}`).click(function() {
            console.log(`.eraseRow${i}`);
            $.ajax({
                url: `api/chirps/${i}`,
                method: 'DELETE',
                contentType: 'application/json',
            }).done(() => {
                console.log('success');
                $(`#row${i}`).remove();
            }).fail((err) => {
                console.log(err);
        
            });
        
        });
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
  


