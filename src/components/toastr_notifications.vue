<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <div class="panel ">
                    <div class="panel-heading">
                        <h3 class="panel-title">
                                <i class="ti-bell"></i> Toastr Notifications
                            </h3>
                        <span class="pull-right">
                                    <i class="fa fa-fw ti-angle-up clickable"></i>
                                    <i class="fa fa-fw ti-close removepanel clickable"></i>
                                </span>
                    </div>
                    <div class="panel-body">
                        <div class="portlet-body">
                            <div class="row">
                                <div class="col-md-12">
                                    <h4><i class="fa fa-fw ti-info-alt text-info message"></i> When changing
                                            toastr position clear all toasts to see the effect</h4></div>
                                <div class="col-md-3">
                                    <div class="form-group">
                                        <label class="control-label" for="title"><b>Title</b></label>
                                        <input id="title" type="text" class="form-control" value="Toastr Notifications" placeholder="Enter a title ...">
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label" for="message"><b>Message</b></label>
                                        <textarea class="form-control resize_vertical" id="message" rows="3" placeholder="Enter a message ...">Gnome &amp; Growl type non-blocking notifications</textarea>
                                    </div>
                                    <form>
                                        <div class="form-group" id="positionGroup">
                                            <label class="position-type"><b>Toaster Position</b></label>
                                            <select name="toast-position" class="form-control" id="position-change">
                                                <option value="0">Top Left</option>
                                                <option value="1" selected>Top Right</option>
                                                <option value="2">Top Center</option>
                                                <option value="3">Top Full Width</option>
                                                <option value="4">Bottom Left</option>
                                                <option value="5">Bottom Right</option>
                                                <option value="6">Bottom Center</option>
                                                <option value="7">Bottom Full Width</option>
                                            </select>
                                            <div hidden>
                                                <div>
                                                    <label>
                                                        <input type="radio" class="custom-radio" name="positions" value="toast-top-left"> Top Left
                                                    </label>
                                                </div>
                                                <div>
                                                    <label>
                                                        <input type="radio" class="custom-radio" name="positions" value="toast-top-right" checked=""> Top Right
                                                    </label>
                                                </div>
                                                <div>
                                                    <label>
                                                        <input type="radio" class="custom-radio" name="positions" value="toast-top-center" /> Top Center
                                                    </label>
                                                </div>
                                                <div>
                                                    <label>
                                                        <input type="radio" class="custom-radio" name="positions" value="toast-top-full-width"> Top Full Width
                                                    </label>
                                                </div>
                                                <div>
                                                    <label>
                                                        <input type="radio" class="custom-radio" name="positions" value="toast-bottom-left"> Bottom Left
                                                    </label>
                                                </div>
                                                <div>
                                                    <label>
                                                        <input type="radio" class="custom-radio" name="positions" value="toast-bottom-right"> Bottom Right
                                                    </label>
                                                </div>
                                                <div>
                                                    <label>
                                                        <input type="radio" class="custom-radio" name="positions" value="toast-bottom-center" /> Bottom Center
                                                    </label>
                                                </div>
                                                <div>
                                                    <label>
                                                        <input type="radio" class="custom-radio" name="positions" value="toast-bottom-full-width"> Bottom Full Width
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div class="col-md-3 ">
                                    <div class="form-group" id="toastTypeGroup">
                                        <label class="toast-type">Toast Type</label>
                                        <div>
                                            <label class="text-success">
                                                <input type="radio" name="toasts" class="custom-radio" value="success" checked=""> Success
                                            </label>
                                        </div>
                                        <div>
                                            <label class="text-info">
                                                <input type="radio" name="toasts" class="custom-radio" value="info"> Info
                                            </label>
                                        </div>
                                        <div>
                                            <label class="text-warning">
                                                <input type="radio" name="toasts" class="custom-radio" value="warning"> Warning
                                            </label>
                                        </div>
                                        <div>
                                            <label class="text-danger">
                                                <input type="radio" name="toasts" class="custom-radio" value="error"> Error
                                            </label>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div>
                                            <label for="closeButton">
                                                <input id="closeButton" type="checkbox" checked="" class="input-small custom-checkbox"> Close Button
                                            </label>
                                        </div>
                                        <div>
                                            <label for="addBehaviorOnToastClick">
                                                <input id="addBehaviorOnToastClick" type="checkbox" class="input-small custom-checkbox"> Add behavior on toast click
                                            </label>
                                        </div>
                                        <div>
                                            <label for="debugInfo">
                                                <input id="debugInfo" type="checkbox" class="input-small custom-checkbox"> Debug
                                            </label>
                                        </div>
                                        <div>
                                            <label for="progressBar">
                                                <input id="progressBar" type="checkbox" class="input-small custom-checkbox" /> Progress Bar
                                            </label>
                                        </div>
                                        <div>
                                            <label for="preventDuplicates">
                                                <input id="preventDuplicates" type="checkbox" class="input-small custom-checkbox" /> Prevent Duplicates
                                            </label>
                                        </div>
                                        <div>
                                            <label for="addClear">
                                                <input id="addClear" type="checkbox" class="input-small custom-checkbox" /> Force clearing button
                                            </label>
                                        </div>
                                        <div>
                                            <label for="newestOnTop">
                                                <input id="newestOnTop" type="checkbox" class="input-small custom-checkbox" /> Newest on top
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="controls">
                                        <div class="form-group">
                                            <label class="control-label" for="showEasing">Show Easing</label>
                                            <select class="form-control input-small" id="showEasing">
                                                <option>swing</option>
                                                <option>linear</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label" for="hideEasing">Hide Easing</label>
                                            <select id="hideEasing" class="form-control input-small">
                                                <option>swing</option>
                                                <option>linear</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label" for="showMethod">Show Method</label>
                                            <select id="showMethod" class="form-control input-small">
                                                <option value="show">show</option>
                                                <option value="fadeIn">fadeIn</option>
                                                <option value="slideDown">slideDown</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label" for="hideMethod">Hide Method</label>
                                            <select class="form-control input-small" id="hideMethod">
                                                <option value="">hide</option>
                                                <option value="fadeOut">fadeOut</option>
                                                <option value="slideUp">slideUp</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="controls">
                                        <div class="form-group">
                                            <label class="control-label" for="showDuration">Show Duration</label>
                                            <input id="showDuration" type="text" placeholder="ms" class="form-control input-small" value="1000">
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label" for="hideDuration">Hide Duration</label>
                                            <input id="hideDuration" type="text" placeholder="ms" class="form-control input-small" value="1000">
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label" for="timeOut">Time out</label>
                                            <input id="timeOut" type="text" placeholder="ms" class="form-control input-small" value="5000">
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label" for="timeOut">Extended time out</label>
                                            <input id="extendedTimeOut" type="text" placeholder="ms" class="form-control input-small" value="1000">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="col-sm-2 col-xs-6">
                                        <button type="button" class="btn btn-success btn-raised toastrshow" id="showtoast">
                                            Show Toast
                                        </button>
                                    </div>
                                    <div class="col-sm-2 col-xs-6">
                                        <button type="button" class="btn btn-danger btn-raised toastrshow" id="cleartoasts">
                                            Clear Toasts
                                        </button>
                                    </div>
                                    <div class="col-sm-2 col-xs-6">
                                        <button type="button" class="btn btn-warning btn-raised toastrshow" id="clearlasttoast">
                                            Clear Last Toast
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <div class="row margin-top-10">
                                <div class="col-md-12">
                                    <pre id="toastrOptions"></pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import toastr from "../vendors/toastr/toastr.min.js";

export default {
    name: "toastr_notification",
    mounted: function() {
        "use strict";
        $(document).ready(function() {
            var i = -1;
            var toastCount = 0;
            var $toastlast;

            var getMessage = function() {
                var msgs = ['My name is Inigo Montoya. You killed my father. Prepare to die!',
                    '<div><input class="input-small" value="textbox"/>&nbsp;<a href="http://johnpapa.net" target="_blank">This is a hyperlink</a></div><div><button type="button" id="okBtn" class="btn btn-primary">Close me</button><button type="button" id="surpriseBtn" class="btn" style="margin: 0 8px 0 8px">Surprise me</button></div>',
                    'Are you the six fingered man?',
                    'Inconceivable!',
                    'I do not think that means what you think it means.',
                    'Have fun storming the castle!'
                ];
                i++;
                if (i === msgs.length) {
                    i = 0;
                }

                return msgs[i];
            };

            var getMessageWithClearButton = function(msg) {
                msg = msg ? msg : 'Clear itself?';
                msg += '<br /><br /><button type="button" class="btn clear">Yes</button>';
                return msg;
            };

            $('#showtoast').on('click', function() {
                var shortCutFunction = $("#toastTypeGroup").find('input:radio:checked').val();
                var msg = $('#message').val();
                var title = $('#title').val() || '';
                var $showDuration = $('#showDuration');
                var $hideDuration = $('#hideDuration');
                var $timeOut = $('#timeOut');
                var $extendedTimeOut = $('#extendedTimeOut');
                var $showEasing = $('#showEasing');
                var $hideEasing = $('#hideEasing');
                var $showMethod = $('#showMethod');
                var $hideMethod = $('#hideMethod');
                var toastIndex = toastCount++;
                var addClear = $('#addClear').prop('checked');

                toastr.options = {
                    closeButton: $('#closeButton').prop('checked'),
                    debug: $('#debugInfo').prop('checked'),
                    newestOnTop: $('#newestOnTop').prop('checked'),
                    progressBar: $('#progressBar').prop('checked'),
                    positionClass: $('#positionGroup').find('input:radio:checked').val() || 'toast-top-right',
                    preventDuplicates: $('#preventDuplicates').prop('checked'),
                    onclick: null
                };

                if ($('#addBehaviorOnToastClick').prop('checked')) {
                    toastr.options.onclick = function() {
                        alert('You can perform some custom action after a toast goes away');
                    };
                }

                if ($showDuration.val().length) {
                    toastr.options.showDuration = $showDuration.val();
                }

                if ($hideDuration.val().length) {
                    toastr.options.hideDuration = $hideDuration.val();
                }

                if ($timeOut.val().length) {
                    toastr.options.timeOut = addClear ? 0 : $timeOut.val();
                }

                if ($extendedTimeOut.val().length) {
                    toastr.options.extendedTimeOut = addClear ? 0 : $extendedTimeOut.val();
                }

                if ($showEasing.val().length) {
                    toastr.options.showEasing = $showEasing.val();
                }

                if ($hideEasing.val().length) {
                    toastr.options.hideEasing = $hideEasing.val();
                }

                if ($showMethod.val().length) {
                    toastr.options.showMethod = $showMethod.val();
                }

                if ($hideMethod.val().length) {
                    toastr.options.hideMethod = $hideMethod.val();
                }

                if (addClear) {
                    msg = getMessageWithClearButton(msg);
                    toastr.options.tapToDismiss = false;
                }
                if (!msg) {
                    msg = getMessage();
                }
                $('#toastrOptions').show().text('Command: toastr["' + shortCutFunction + '"]("' + msg + (title ? '", "' + title : '') + '")\n\ntoastr.options = ' + JSON.stringify(toastr.options, null, 2));

                var $toast = toastr[shortCutFunction](msg, title); // Wire up an event handler to a button in the toast, if it exists
                $toastlast = $toast;

                if (typeof $toast === 'undefined') {
                    return;
                }

                if ($toast.find('#okBtn').length) {
                    $toast.delegate('#okBtn', 'click', function() {
                        alert('you clicked me. i was toast #' + toastIndex + '. goodbye!');
                        $toast.remove();
                    });
                }
                if ($toast.find('#surpriseBtn').length) {
                    $toast.delegate('#surpriseBtn', 'click', function() {
                        alert('Surprise! you clicked me. i was toast #' + toastIndex + '. You could perform an action here.');
                    });
                }
                if ($toast.find('.clear').length) {
                    $toast.delegate('.clear', 'click', function() {
                        toastr.clear($toast, {
                            force: true
                        });
                    });
                }
            });

            // toaster position radio function with select option
            $('#position-change').on('change', function() {
                var position = $("select[name=toast-position]").val();
                $('.custom-radio')[position].checked = true;

                // To toggle the effect on top and bottom effect variation

                if ($(this).val() > 3) {
                    $("#showMethod").find('option:eq(2)').text("slideUp");
                    $("#hideMethod").find('option:eq(2)').text("slideDown");
                } else {
                    $("#showMethod").find('option:eq(2)').text("slideDown");
                    $("#hideMethod").find('option:eq(2)').text("slideUp");
                }
            });
            $("select[name=toast-position]:eq(0)").on('change', function(event) {
                var btns = $('#positionGroup').find('.custom-radio');
                btns[event.target.value].checked = true
            });
            // toaster position ends

            function getLastToast() {
                return $toastlast;
            }

            $('#clearlasttoast').on('click', function() {
                toastr.clear(getLastToast());
            });
            $('#cleartoasts').on('click', function() {
                toastr.clear();
            });

            $('#toastrOptions').hide();
            $(".content .row").find('input').iCheck({
                checkboxClass: 'icheckbox_square-blue',
                radioClass: 'iradio_minimal-blue',
                increaseArea: '20%'
            });

        });
    },
    destroyed: function() {

    }
}
</script>
<style src="../vendors/toastr/toastr.min.css"></style>
<style src="../assets/css/custom_css/toastr_notificatons.css"></style>
