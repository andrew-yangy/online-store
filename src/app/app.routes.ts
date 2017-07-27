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
        path:'**',//fallback router must in the last
        loadChildren:'./pages/category/category.module#CategoryModule'
    }
];