import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store.js';
import 'es6-promise/auto';
import App from './App';
Vue.use(VueRouter)

var routes = [{
    path: '/',
    component: resolve => require(['./layout.vue'], resolve),
    children: [{
        path: '',
        component: resolve => require(['./components/index.vue'], resolve),
        meta: {
            title: "Dashboard",
            breadcrumb: `<li><a href="/"><i class="ti-home"></i> Dashboard 1</a></li>`
        }
    }
    , {
        path: 'pickers',
        component: resolve => require(['./components/pickers.vue'], resolve),
        meta: {
            title: "Inventory",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>UI Components</a></li></li><li><a href="#/pickers">Pickers</a></li>`
        }
    }, {
        path: 'grid_layout',
        component: resolve => require(['./components/grid_layout.vue'], resolve),
        meta: {
            title: "Stock List",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>UI Components</a></li></li><li><a href="#/grid_layout">Grid Layout</a></li>`
        }
    }, {
        path: 'tags_input',
        component: resolve => require(['./components/tags_input.vue'], resolve),
        meta: {
            title: "Make order",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>UI Components</a></li></li><li><a href="#/tags_input">Tags Input</a></li>`
        }
    }, {
        path: 'widgets1',
        component: resolve => require(['./components/widgets1.vue'], resolve),
        meta: {
            title: "Widgets",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a href="#/widgets1">Widgets</a></li>`
        }
    }, {
        path: 'simple_tables',
        component: resolve => require(['./components/simple_tables.vue'], resolve),
        meta: {
            title: "Simple Tables",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>Datatables</a></li></li><li><a href="#/simple_tables">Simple Tables</a></li>`
        }
    }, {
        path: 'datatables',
        component: resolve => require(['./components/datatables.vue'], resolve),
        meta: {
            title: "Data Tables",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>Datatables</a></li></li><li><a href="#/datatables">Data Tables</a></li>`
        }
    }, {
        path: 'invoice',
        component: resolve => require(['./components/pos_invoice.vue'], resolve),
        meta: {
            title: "Invoice",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>P.O.S</a></li></li><li><a href="#/pos_invoice">Invoice</a></li>`
        }
    }, {
        path: 'qoute',
        component: resolve => require(['./components/pos_qoute.vue'], resolve),
        meta: {
            title: "Quotation",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>P.O.S</a></li></li><li><a href="#/pos_qoute">Quotation</a></li>`
        }
    }, {
        path: 'reciept',
        component: resolve => require(['./components/pos_reciept.vue'], resolve),
        meta: {
            title: "Reciept",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>P.O.S</a></li></li><li><a href="#/pos_reciept">Reciept</a></li>`
        }
    },
    {
        path: 'deliveryNote',
        component: resolve => require(['./components/pos_deliveryNote.vue'], resolve),
        meta: {
            title: "Delivery Note",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>P.O.S</a></li></li><li><a href="#/pos_deliveryNote">Delivery Note</a></li>`
        }
    },
    {
        path: 'pendingItems',
        component: resolve => require(['./components/pos_pendingItems.vue'], resolve),
        meta: {
            title: "Pending Items",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>P.O.S</a></li></li><li><a href="#/pos_pendingItems">Pending Itemss</a></li>`
        }
    },{
        path: 'flot_charts',
        component: resolve => require(['./components/flot_charts.vue'], resolve),
        meta: {
            title: "Flot Charts",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>Charts</a></li></li><li><a href="#/flot_charts">Flot Charts</a></li>`
        }
    }, {
        path: 'nvd3_charts',
        component: resolve => require(['./components/nvd3_charts.vue'], resolve),
        meta: {
            title: "NVD3 Charts",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>Charts</a></li></li><li><a href="#/nvd3_charts">NVD3 Charts</a></li>`
        }
    }, {
        path: 'circle_sliders',
        component: resolve => require(['./components/circle_sliders.vue'], resolve),
        meta: {
            title: "Circle Sliders",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>Charts</a></li></li><li><a href="#/circle_sliders">Circle Sliders</a></li>`
        }
    }, {
        path: 'chartjs',
        component: resolve => require(['./components/chartjs.vue'], resolve),
        meta: {
            title: "Chartjs Charts",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>Charts</a></li></li><li><a href="#/chartjs">Chartjs Charts</a></li>`
        }
    }, {
        path: 'chartist',
        component: resolve => require(['./components/chartist.vue'], resolve),
        meta: {
            title: "Chartist Charts",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>Charts</a></li></li><li><a href="#/chartist">Chartist Charts</a></li>`
        }
    }, {
        path: 'calendar',
        component: resolve => require(['./components/calendar.vue'], resolve),
        meta: {
            title: "Calendar",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>Charts</a></li></li><li><a href="#/calendar">Calendar</a></li>`
        }
    }, {
        path: 'calendar2',
        component: resolve => require(['./components/calendar2.vue'], resolve),
        meta: {
            title: "Advanced Calendar",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>Charts</a></li></li><li><a href="#/calendar2">Advanced Calendar</a></li>`
        }
    },



 {
        path: 'users_list',
        component: resolve => require(['./components/users_list.vue'], resolve),
        meta: {
            title: "Users List",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>Users</a></li></li><li><a href="#/users_list">Users List</a></li>`
        }
    }, {
        path: 'addnew_user',
        component: resolve => require(['./components/addnew_user.vue'], resolve),
        meta: {
            title: "Add New User",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>Users</a></li></li><li><a href="#/addnew_user">Add New User</a></li>`
        }
    }, {
        path: 'edit_user',
        component: resolve => require(['./components/edit_user.vue'], resolve),
        meta: {
            title: "Edit User",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>Users</a></li></li><li><a href="#/edit_user">Edit User</a></li>`
        }
    }, {
        path: 'user_profile',
        component: resolve => require(['./components/user_profile.vue'], resolve),
        meta: {
            title: "User Profile",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>Users</a></li></li><li><a href="#/user_profile">User Profile</a></li>`
        }
    }, {
        path: 'deleted_users',
        component: resolve => require(['./components/deleted_users.vue'], resolve),
        meta: {
            title: "Deleted Users",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>Users</a></li></li><li><a href="#/deleted_users">Deleted Users</a></li>`
        }
    }, {
        path: 'blank',
        component: resolve => require(['./components/blank.vue'], resolve),
        meta: {
            title: "Blank",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>Pages</a></li></li><li><a href="#/blank">Blank</a></li>`
        }
    }, {
        path: 'invoice',
        component: resolve => require(['./components/invoice.vue'], resolve),
        meta: {
            title: "Invoice",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>Pages</a></li></li><li><a href="#/invoice">Invoice</a></li>`
        }
    }, {
        path: 'movable_header',
        component: resolve => require(['./components/movable_header.vue'], resolve),
        meta: {
            title: "Movable Header",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>Layouts</a></li></li><li><a href="#/movable_header">Movable Header</a></li>`
        }
    }, {
        path: 'boxed_movableheader',
        component: resolve => require(['./components/boxed_movableheader.vue'], resolve),
        meta: {
            title: "Boxed & Movable Header",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>Layouts</a></li></li><li><a href="#/boxed_movableheader">Boxed & Movable Header</a></li>`
        }
    }, {
        path: 'menubar_fold',
        component: resolve => require(['./components/menubar_fold.vue'], resolve),
        meta: {
            title: "Menubar Fold",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>Layouts</a></li></li><li><a href="#/menubar_fold">Menubar Fold</a></li>`
        }
    }, {
        path: 'mini_sidebar',
        component: resolve => require(['./components/mini_sidebar.vue'], resolve),
        meta: {
            title: "Mini Sidebar",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>Layouts</a></li></li><li><a href="#/mini_sidebar">Mini Sidebar</a></li>`
        }
    }]
}, {
    path: '/500',
    component: resolve => require(['./components/500.vue'], resolve),
    meta: {
        title: "500",
        breadcrumb: ``
    }
}, {
    path: '/login',
    component: resolve => require(['./components/login.vue'], resolve),
    meta: {
        title: "Login",
        breadcrumb: ``
    }
}, {
    path: '/register',
    component: resolve => require(['./components/register.vue'], resolve),
    meta: {
        title: "Register",
        breadcrumb: ``
    }
}, {
    path: '/lockscreen',
    component: resolve => require(['./components/lockscreen.vue'], resolve),
    meta: {
        title: "Lockscreen",
        breadcrumb: ``
    }
}, {
    path: '/reset_password',
    component: resolve => require(['./components/reset_pass.vue'], resolve),
    meta: {
        title: "Reset Password",
        breadcrumb: ``
    }
}, {
    path: '*',
    component: resolve => require(['./components/404.vue'], resolve),
    meta: {
        title: "404",
        breadcrumb: ``
    }
}];





const router = new VueRouter({
    routes,
    linkActiveClass: "active"
});
router.beforeEach((to, from, next) => {
    $('.preloader img').fadeIn("fast");
    $('.preloader').fadeIn("fast");
    $("#menu .sub-menu").addClass("hidden");
    $("#menu").find("ul,li").removeClass("active collapse in").css("height", "auto");
    $("#menu a").off("click");
    next()
})

router.afterEach((to, from) => {
    document.title = to.meta.title;
    //scroll to top when changing pages
    $('body,html').animate({
        scrollTop: 0
    }, 300);
    $('.row-offcanvas').removeClass('active').removeClass("relative");
    $('.left-side').removeClass("collapse-left");
    $(".right-side").removeClass("strech");
    setTimeout(function() {
        $("#menu").find("li.active").parents("li").addClass("active");
        $("#menu .sub-menu").removeClass("hidden");
        $("#menu").metisMenu();
        $('.preloader img').fadeOut("slow");
        $('.preloader').fadeOut("slow");
    }, 0);
});
new Vue({
    router,
    store,
    template: '<App/>',
    components: { App }
}).$mount('#app');
