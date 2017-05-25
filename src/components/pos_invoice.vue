<template>
    <section class="p-l-r-15" id="invoice-stmt">
        <div class="panel">

            <div class="panel-body">
            <div class="row">
                <div class="col-xs-12">
                    <h3 class="page-header">
                        <i class="fa fa-globe"></i> THEOTOKA LABORATORY SOLUTIONS.<p><small>Supplies of : Laboratory Apparatus, Consumables, Medical Daignosis Equipment and General Supplies</small></p>
                    </h3>
                 </div>
             <!-- /.col -->
            </div>

            <!-- info row -->
      <div class="row invoice-info">
        <div class="col-sm-4 invoice-col">
          <address>
            <strong><u>Lusaka</u></strong><br>
            Plot 189 Corner of Musonda Ngosa and Luanshya Road<br>
            Villa Elizabeth behind ZRA HQ<br>
            P.O.Box 02 Chilanga, Lusaka - Zambia<br>
            Cell: 0977 440 435 / 0977 440 439<br>
            Tel: 0211 238 760 Fax : 238760<br>
            Email: tlaboratorysoltions@gmail.com
          </address>
        </div>
        <!-- /.col -->
        <div class="col-sm-4 invoice-col">

        </div>
        <!-- /.col -->
        <div class="col-sm-4 invoice-col invoice_bg text-right">
          <b><u>Kitwe</u></b><br>
          Investment Building<br>
          2nd  Floor, Room 14<br>
         Cell: 0978 071 988<br>
                0973 582 666<br>
                0953 731 331
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->
                <div class="row">
        <hr>


                    <div class="col-md-12">
                        <div class="col-md-6 col-sm-12 col-xs-12 invoice_bg">
                            <h4><strong>Billing Details:</strong></h4>
                            <address>
                                <strong>Client :</strong> Lewis Doe
                                <multiselect v-model="value" :options="options"></multiselect>
                                <br/> <strong>Phone:</strong>12-345-678
                                <br/> <strong>Mail Id:</strong> davidc@yahoo.com
                            </address>
                        </div>

                        <div class="col-md-6 col-sm-12 col-xs-12 invoice_bg text-right">
                            <div class="pull-right">
                                <h4><strong>#678956 / 25 May 2017</strong></h4>

                                <span></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="table-responsive">
                            <table class="table table-striped table-condensed" id="customtable">
                                <thead>
                                    <tr class="bg-primary">
                                        <th>
                                            <strong>Description</strong>
                                        </th>
                                        <th>
                                            <strong>Unit Price</strong>
                                        </th>
                                        <th class="text-center">
                                            <strong>
                                                Quantity
                                            </strong>
                                        </th>
                                        <th></th>
                                        <th class="text-right">
                                            <strong>Total</strong>
                                        </th>
                                        <th class="text-center" id="add_row"><i class="fa fa-fw ti-plus"></i></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td contenteditable>
                                            Ammeters
                                        </td>
                                        <td contenteditable>70</td>
                                        <td class="text-center" contenteditable>2</td>
                                        <td></td>
                                        <td class="text-right" contenteditable>140</td>
                                        <td class="text-center row_delete"><i class="fa fa-fw ti-close"></i></td>
                                    </tr>
                                    <tr>
                                        <td contenteditable>
                                            Voltmeter
                                        </td>
                                        <td contenteditable>70</td>
                                        <td class="text-center" contenteditable>2</td>
                                        <td></td>
                                        <td class="text-right" contenteditable>140</td>
                                        <td class="text-center row_delete"><i class="fa fa-fw ti-close"></i></td>
                                    </tr>
                                    <tr>
                                        <td contenteditable>
                                           Electronic Balance Digital
                                        </td>
                                        <td contenteditable>450</td>
                                        <td class="text-center" contenteditable>1</td>
                                        <td></td>
                                        <td class="text-right" contenteditable>450</td>
                                        <td class="text-center row_delete"><i class="fa fa-fw ti-close"></i></td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td class="highrow"></td>
                                        <td class="highrow"></td>
                                        <td class="highrow text-center"></td>
                                        <td class="highrow text-right">
                                            <strong>
                                                Sub Total: &nbsp;
                                            </strong>
                                        </td>
                                        <td class="highrow text-right">
                                            <strong contenteditable>K1838</strong>
                                        </td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td class="emptyrow"></td>
                                        <td class="emptyrow"></td>
                                        <td class="emptyrow text-center"></td>
                                        <td class="emptyrow text-right">
                                            <strong>
                                                Vat: &nbsp;
                                            </strong>
                                        </td>
                                        <td class="highrow text-right">
                                            <strong contenteditable>K20</strong>
                                        </td>
                                        <td></td>
                                    </tr>

                                     <tr>
                                        <td class="emptyrow"></td>
                                        <td class="emptyrow"></td>
                                        <td class="emptyrow text-center"></td>
                                        <td class="emptyrow text-right">
                                            <strong>
                                                Discount: &nbsp;
                                            </strong>
                                        </td>
                                        <td class="highrow text-right">
                                            <strong contenteditable>20 %</strong>
                                        </td>
                                        <td></td>
                                    </tr>

                                    <tr>
                                        <td class="emptyrow">
                                            <i class="livicon" data-name="barcode" data-size="60" data-loop="true"></i>
                                        </td>
                                        <td class="emptyrow"></td>
                                        <td class="emptyrow text-center"></td>
                                        <td class="emptyrow text-right">
                                            <strong>
                                                Total: &nbsp;
                                            </strong>
                                        </td>
                                        <td class="highrow text-right">
                                            <strong contenteditable>K1858</strong>
                                        </td>
                                        <td></td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <h4><Strong>Terms and conditions:</Strong></h4>
                        <ul class="terms_conditions">
                            <li>An invoice must accompany products returned for warantty</li>
                            <li>Balance due within 10 days of invoice date,1.5% interest/month thereafter.</li>
                            <li>All goods returned for replacement/credit must be saleable condition with original packaging.
                            </li>
                        </ul><br>
                        <ul class="t">
                            <li>Prepared By :  David Chilufya</li>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="btn-section">
                    <div class="col-md-12 col-sm-12 col-xs-12">
                        <span class="pull-right">
                            <button type="button" class="btn btn-responsive button-alignment btn-success" data-toggle="button"><i class="fa fa-fw ti-money"></i> Pay Now</button>
                             <button type="button" class="btn btn-responsive button-alignment btn-primary" data-toggle="button"><span style="color:#fff;" onclick="javascript:window.print();"><i class="fa fa-fw ti-printer"></i> Print</span>
                        </button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import Vue from 'vue';
import Multiselect from 'vue-multiselect';

export default {
    name: "invoice",
    mounted: function() {
        "use strict";
        $(document).ready(function() {
            $("#add_row").find('i').on('click', function() {
                $("#customtable").find('tbody').append('<tr><td contenteditable></td> <td contenteditable></td> <td class="text-center" contenteditable></td> <td></td> <td class="text-right" contenteditable></td> <td class="row_delete text-center"><i class="fa fa-fw ti-close"></i></td> </tr>');
                $("tbody tr:last-child td:first-child").focus();
            });
            $("#customtable").on("click", ".row_delete i", function() {
                $(this).closest("tr").remove();
            });
        });
    },
     data() {
        return {
            value: null,
            multi_value: null,
            object_value: null,
            options: ['default', 'Select2', 'Selectize', 'MultiSelect'],
            tag_value: [{
                name: 'Javascript',
                code: 'js'
            }],
            object_options: [{
                name: 'Vue.js',
                code: 'vu'
            }, {
                name: 'Javascript',
                code: 'js'
            }, {
                name: 'Monterail',
                code: 'pl'
            }, {
                name: 'Open Source',
                code: 'os'
            }]
        }
    },
    destroyed: function() {

    }
}
</script>
<style src="../assets/css/custom_css/invoice.css"></style>
