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
