/*подтверждение удаления заказа*/
$('.delete').click(function (){
   var res = confirm('Подтвердите действия !');
   if (!res) return false;
});

/* редактирование заказа*/
$('.redact').click(function (){
    var res = confirm('Вы можете изменить только комментарий !');
    return false;
});

/* подтверждение удаления  заказа из БД */
$('.deletebd').click(function (){
    var res = confirm('Подтвердите действия !');
    if(res){
        var ress = confirm('ВЫ УДАЛИТЕ ЗАКАЗ ИЗ БАЗЫ !!!');
        if(!ress) return false;
    }
    if (!res) return false;
});
