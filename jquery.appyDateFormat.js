/**
 * jquery.appyDateFormat.js
 * @version: v1.0.0
 * @author: Arpit Jain
 * @mob: +919509577083
 *
 * Created by Arpit Jain on 2017-01-17. Please report any bug at https://facebook.com/atg.raj
 *
 * Copyright (c) 2017 Arpit Jain https://facebook.com/atg.raj
 *
 * The MIT License (http://www.opensource.org/licenses/mit-license.php)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/* jshint laxbreak: true */
/* global define */



// UMD (Universal Module Definition) patterns for JavaScript modules that work everywhere.
$.fn.appyDateFormat = function () {
    var txtvalue = $(this).val();
    $txtbx = $(this);
    var txtcnt = 0;
    var MMFC = 0;
    var DDFC = 0;
    var MV = "";
    $txtbx.bind("click", function () {
        $(this).val("");
        txtcnt = 0;
        MMFC = 0;
        DDFC = 0;
        MV = "";
    });
    $txtbx.bind("cut copy paste", function (e) {
        e.preventDefault();
    });
    $txtbx.blur(function () {
        if ($(this).val().length == 10) {
            var year = $(this).val().substr($(this).val().length - 4);
            if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
                //alert(year + " is a leap year");
            }
            else {
                //alert(year + " is not a leap year");
                $(this).val($(this).val().replace("02/29/", "02/28/"));
            }
        }
        else {
            $(this).val(txtvalue);
        }
    });

    $txtbx.keypress(function (e) {
        if (txtcnt > 0) {
            $(this).keyup(function (e) {
                if (e.charCode == 8 || e.charCode == 37 || e.charCode == 38 || e.charCode == 39 || e.charCode == 40 || e.keyCode == 8 || e.keyCode == 37 || e.keyCode == 38 || e.keyCode == 39 || e.keyCode == 40) {
                    $(this).val("");
                    txtcnt = 0;
                    MMFC = 0;
                    DDFC = 0;
                    MV = "";
                }
            });
        }
        if (txtcnt == 0) {
            if (e.charCode > 47 && e.charCode < 50) {
                if (e.charCode > 48) {
                    MMFC = 1;
                }
                txtcnt = txtcnt + 1;
            }
            else {
                e.preventDefault();
            }
        }
        else if (txtcnt == 1) {
            if (MMFC > 0) {
                if (e.charCode > 47 && e.charCode < 51) {
                    txtcnt = txtcnt + 1;
                }
                else {
                    e.preventDefault();
                }
            }
            else {
                if (e.charCode > 48 && e.charCode < 58) {
                    txtcnt = txtcnt + 1;
                }
                else {
                    e.preventDefault();
                }
            }
        }
        else if (txtcnt == 2) {
            if ($(this).val() == "02") {
                if (e.charCode > 47 && e.charCode < 51) {
                    if (e.charCode == 49) {
                        DDFC = 1;
                    }
                    else if (e.charCode == 50) {
                        DDFC = 2;
                    }
                    txtcnt = txtcnt + 1;
                }
                else {
                    e.preventDefault();
                }
            }
            else {
                if (e.charCode > 47 && e.charCode < 52) {
                    if (e.charCode == 49) {
                        DDFC = 1;
                    }
                    else if (e.charCode == 50) {
                        DDFC = 2;
                    }
                    else if (e.charCode == 51) {
                        DDFC = 3;
                    }
                    txtcnt = txtcnt + 1;
                }
                else {
                    e.preventDefault();
                }
            }
            MV = $(this).val();
        }
        else if (txtcnt == 3) {
            if (MV == "02") {
                if (DDFC == 0 || DDFC == 1 || DDFC == 2) {
                    if (DDFC == 0) {
                        if (e.charCode > 48 && e.charCode < 58) {
                            txtcnt = txtcnt + 1;
                        }
                        else {
                            e.preventDefault();
                        }
                    }
                    else {
                        if (e.charCode > 47 && e.charCode < 58) {
                            txtcnt = txtcnt + 1;
                        }
                        else {
                            e.preventDefault();
                        }
                    }
                }
            }
            else if (MV == "01" || MV == "03" || MV == "05" || MV == "07" || MV == "08" || MV == "10" || MV == "12") {
                if (DDFC == 0 || DDFC == 1 || DDFC == 2) {
                    if (DDFC == 0) {
                        if (e.charCode > 48 && e.charCode < 58) {
                            txtcnt = txtcnt + 1;
                        }
                        else {
                            e.preventDefault();
                        }
                    }
                    else {
                        if (e.charCode > 47 && e.charCode < 58) {
                            txtcnt = txtcnt + 1;
                        }
                        else {
                            e.preventDefault();
                        }
                    }
                }
                else {
                    if (e.charCode > 47 && e.charCode < 50) {
                        txtcnt = txtcnt + 1;
                    }
                    else {
                        e.preventDefault();
                    }
                }
            }
            else if (MV == "04" || MV == "06" || MV == "09" || MV == "11") {
                if (DDFC == 0 || DDFC == 1 || DDFC == 2) {
                    if (DDFC == 0) {
                        if (e.charCode > 48 && e.charCode < 58) {
                            txtcnt = txtcnt + 1;
                        }
                        else {
                            e.preventDefault();
                        }
                    }
                    else {
                        if (e.charCode > 47 && e.charCode < 58) {
                            txtcnt = txtcnt + 1;
                        }
                        else {
                            e.preventDefault();
                        }
                    }
                }
                else {
                    if (e.charCode > 47 && e.charCode < 49) {
                        txtcnt = txtcnt + 1;
                    }
                    else {
                        e.preventDefault();
                    }
                }
            }
        }
        else if (txtcnt == 4) {
            if (e.charCode == 50) {
                txtcnt = txtcnt + 1;
            }
            else {
                e.preventDefault();
            }
        }
        else if (txtcnt == 5) {
            if (e.charCode > 47 && e.charCode < 58) {
                txtcnt = txtcnt + 1;
            }
            else {
                e.preventDefault();
            }
        }
        else if (txtcnt == 6) {
            if (e.charCode > 47 && e.charCode < 58) {
                txtcnt = txtcnt + 1;
            }
            else {
                e.preventDefault();
            }
        }
        else if (txtcnt == 7) {
            if (e.charCode > 47 && e.charCode < 58) {
                txtcnt = txtcnt + 1;
            }
            else {
                e.preventDefault();
            }
        }
        else {
            e.preventDefault();
        }
    });
}