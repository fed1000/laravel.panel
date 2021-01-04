<?php


namespace App\Repositories\Admin;


use App\Repositories\CoreRepository;
use Illuminate\Database\Eloquent\Model;

class MainRepository extends CoreRepository
{

    protected function getModelClass()
    {
        return Model::class;
    }
    /* get count all orders */
    public static function getCountOrders(){
        $count = \DB::table('orders')
            ->where('status', '0')
            ->get()
            ->count();
        return $count;
    }

    /* get count all users */
    public static function getCountUsers(){
        $users = \DB::table('users')
            ->get()
            ->count();
        return $users;
    }

    /* get count all products */
    public static function getCountProducts(){
        $prod =  \DB::table('products')
            ->get()
            ->count();
        return $prod;
    }

    /* get count all categories */
    public static function getCountCategories(){
        $cat =  \DB::table('categories')
            ->get()
            ->count();
        return $cat;
    }

}
