/**
 * Created by andrew.yang on 7/27/2017.
 */
export const appRoutes=[
    {
        path:'',
        redirectTo:'category',
        pathMatch:'full'
    },
    {
        path:'category',
        loadChildren:'./pages/category/category.module#CategoryModule'
    },
    {
        path:'product',
        loadChildren:'./pages/product/product.module#ProductModule'
    },
    {
        path:'**',
        loadChildren:'./pages/category/category.module#CategoryModule'
    }
];