const url = '/chirps';

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




        // if ( i < keys.length) {
        // $(`<tr class='text-center' id='row${i}'></tr>`).appendTo('#display');
        // $(`<td>${msgs[i].value}</td>`).appendTo(`#row${i}`);
        // } else {s
        //     console.log('No More arrays');
        // }
    

   
  

 //console.log(msgs[i].text);
  //console.log(msgs[place].text);