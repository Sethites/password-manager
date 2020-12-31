
console.log(store.path);


function init() {
    var pwdjson = Object.keys(store.store)
    var pwdTable = ''
    for (let i = 0; i < pwdjson.length; i++) {
        pwdTable += '<div class=\"row p-0 m-0\">' +
            '<div class=\"col-1 b-0\"><input type=\"checkbox\" class=\"cbx\" id=\"' + pwdjson[i] + '\" ></div>' +
            '<div class=\"col-2 b-1\">' + store.get(pwdjson[i]).company + '</div>' +
            '<div class=\"col-5 b-1\">' + store.get(pwdjson[i]).account + '</div>' +
            '<div class=\"col-4 b-1 \"><span class=\"tablepwd d-none\">' + store.get(pwdjson[i]).password + '<span></div>' +
            '</div>'
    }
    $('div#pwdtable').html(pwdTable);

}

init()