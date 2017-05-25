<template>
    <!-- Left side column. contains the logo and sidebar -->
    <aside class="left-side sidebar-offcanvas">
        <!-- sidebar: style can be found in sidebar-->
        <section class="sidebar">
            <div id="menu" role="navigation">
                <div class="nav_profile">
                    <div class="media profile-left">
                        <a class="pull-left profile-thumb" href="javascript:void(0)">
                            <img :src="this.$store.state.user.picture" class="img-circle" alt="User Image">
                        </a>
                        <div class="content-profile">
                            <h4 class="media-heading user_name_max" v-text="this.$store.state.user.name"></h4>
                            <ul class="icon-list">
                                <li>
                                    <router-link to="/users_list" exact>
                                        <i class="ti-user"></i>
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/lockscreen" exact>
                                        <i class="ti-lock"></i>
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/edit_user" exact>
                                        <i class="ti-settings"></i>
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/login" exact>
                                        <i class="ti-shift-right"></i>
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <ul class="navigation">

                    <router-link to="/" tag="li" exact>
                        <a class="logo"><i class="menu-icon ti-desktop"></i><span class="mm-text">Dashboard </span></a>
                    </router-link>


                    <li class="menu-dropdown">
                        <a href="javascript:void(0)">
                            <i class="menu-icon ti-briefcase"></i>
                            <span class="mm-text">Inventory Control</span>
                            <span class="fa arrow"></span>
                        </a>
                        <ul class="sub-menu">
                            <router-link tag="li" to="/" exact>
                                <a class="logo"><i class="menu-icon ti-pie-chart"></i><span class="mm-text"> Inventory</span></a>
                            </router-link>
                            <router-link tag="li" to="/" exact>
                                <a class="logo"><i class="menu-icon ti-layout-grid2"></i><span class="mm-text"> Stock List</span></a>
                            </router-link>
                            <router-link tag="li" to="/" exact>
                                <a class="logo"><i class="menu-icon ti-tag"></i><span class="mm-text"> Make order</span><small class="badge badge1">17</small></a>
                            </router-link>
                            <router-link tag="li" to="/" exact>
                                <a class="logo"><i class="menu-icon ti-view-list"></i><span class="mm-text"> Transfer</span><small class="badge badge1">10</small></a>
                            </router-link>

                        </ul>
                    </li>



                    <li class="menu-dropdown">
                        <a href="javascript:void(0)">
                            <i class="menu-icon ti-layout-grid4"></i>
                            <span class="mm-text">P.O.S</span>
                            <span class="fa arrow">
                                </span>
                        </a>
                        <ul class="sub-menu">
                            <router-link tag="li" to="/" exact>
                                <a class="logo"><i class="menu-icon ti-layout"></i><span class="mm-text"> Sales</span></a>
                            </router-link>
                            <router-link tag="li" to="/invoice" exact>
                                <a class="logo"><i class="menu-icon ti-layout-cta-left"></i><span class="mm-text"> Invoice</span></a>
                            </router-link>
                            <router-link tag="li" to="/qoute" exact>
                                <a class="logo"><i class="menu-icon ti-layout-grid3"></i><span class="mm-text"> Qoute</span></a>
                            </router-link>
                            <router-link tag="li" to="/reciept" exact>
                                <a class="logo"><i class="menu-icon ti-layout-accordion-merged"></i><span class="mm-text"> Reciept</span></a>
                            </router-link>
                            <router-link tag="li" to="/deliveryNote" exact>
                                <a class="logo"><i class="menu-icon ti-layout-grid2"></i><span class="mm-text"> Delivery Note</span></a>
                            </router-link>
                             <router-link tag="li" to="/pendingItems" exact>
                                <a class="logo"><i class="menu-icon ti-layout-grid2"></i><span class="mm-text"> Pending Items</span><small  class="badge badge1">21</small></a>
                            </router-link>
                        </ul>
                    </li>


                    <li class="menu-dropdown">
                        <a href="javascript:void(0)">
                            <i class="menu-icon ti-bar-chart"></i>
                            <span class="mm-text">Branches</span> <span class="fa arrow"></span>
                        </a>
                        <ul class="sub-menu">

                        </ul>
                    </li>


                    <li class="menu-dropdown">
                        <a href="javascript:void(0)">
                            <i class="menu-icon ti-calendar"></i>
                            <span class="mm-text">Clients</span>
                            <span class="fa arrow"></span>
                        </a>
                        <ul class="sub-menu">

                        </ul>
                    </li>



                     <router-link to="/widgets1" tag="li" exact>
                        <a class="logo"><i class="menu-icon ti-widgetized"></i><span class="mm-text">Budget </span></a>
                    </router-link>

                     <router-link to="/widgets1" tag="li" exact>
                        <a class="logo"><i class="menu-icon ti-widgetized"></i><span class="mm-text">Reports </span></a>
                    </router-link>

                    <li class="menu-dropdown">
                        <a href="javascript:void(0)">
                            <i class="menu-icon ti-user"></i>
                            <span class="mm-text">Users</span> <span class="fa arrow"></span>
                        </a>
                        <ul class="sub-menu">
                            <router-link tag="li" to="/users_list" exact>
                                <a class="logo"><i class="menu-icon ti-menu-alt"></i><span class="mm-text"> Users List</span></a>
                            </router-link>
                            <router-link tag="li" to="/addnew_user" exact>
                                <a class="logo"><i class="menu-icon ti-user"></i><span class="mm-text"> Add New User</span></a>
                            </router-link>
                            <router-link tag="li" to="/user_profile" exact>
                                <a class="logo"><i class="menu-icon ti-id-badge"></i><span class="mm-text"> View Profile</span></a>
                            </router-link>
                            <router-link tag="li" to="/deleted_users" exact>
                                <a class="logo"><i class="menu-icon ti-trash"></i><span class="mm-text"> Deleted Users</span></a>
                            </router-link>
                        </ul>
                    </li>

                </ul>
                <!-- / .navigation -->
            </div>
            <!-- menu -->
        </section>
        <!-- /.sidebar -->
    </aside>
</template>
<script>
export default {
    name: "left-side"
}
</script>
