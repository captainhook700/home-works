var cities = 'Киев,Винница,Луцк,Днепродзержинск,Днепропетровск,Кривой Рог,Никополь,Краматорск,Бердичев,Житомир,Бердянск,Запорожье,Мукачево,Кировоград,Львов,Одесса';
var auto = 'Volkswagen,Skoda,Renault,Mercedes-Benz,Toyota,Opel,Ford,BMW,Kia,Hyunda,Nissan,ВАЗ,Chevrolet,Audi,Peugeot,Honda,Geely,Fiat,Citroen,Mazda,ЗАЗ,Chery,Lexus,Suzuki,Subaru,Seat,Volvo,SsangYong,Land Rover,Great Wall,Acura,Lifan,Jeep';

$(document).ready(function(){
    createList('#autoList', auto, cities, 'city');
    createList('#citiesList', cities, auto, 'auto');
    $('#find_by_cities').on('keyup', {id: "#autoList", dataAttrName: "city"}, findByData);
    $('#find_by_auto').on('keyup', {id: "#citiesList", dataAttrName: "auto"}, findByData);
});


function createList(id, str_value, str_data, nameAttr) {
    var arr_value = str_value.split(',');
    var arr_data = str_data.split(',');
    var max_val = arr_value.length;
    var li, rndVals;
    for (num in arr_value){
        li = $('<li />', {text: arr_value[num] });
        arr_data = shuffle(arr_data);
        rndVals = arr_data.slice(0, 10);
        li.data(nameAttr, rndVals);
        li.attr('data-'+nameAttr, rndVals);
        $(id).append(li);
    }
}


function findByData(event) {
    var input_val = $(this).val().toLowerCase();
    var ul = $(event.data.id).children('li');
    var attrs,attr;
    for (var i = 0; i < ul.length; i++){
        attrs = $(ul[i]).data(event.data.dataAttrName); ;
        for (j in attrs) {
            attr = attrs[j].toLowerCase();
            if (~attr.indexOf(input_val)){
                $(ul[i]).removeAttr('hidden');
                continue;
            }else{
                $(ul[i]).attr('hidden','hidden');
            }
        }
    }

}


function shuffle(arr_data) {
    for (var i = arr_data.length - 1; i > 0; i--) {
        var num = Math.floor(Math.random() * (i + 1));
        var d = arr_data[num];
        arr_data[num] = arr_data[i];
        arr_data[i] = d;
    }

    return arr_data;
}
