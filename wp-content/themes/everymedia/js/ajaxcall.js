$(document).ready(function(){function cs_img_animation(){var tiltSettings=[{},{movement:{imgWrapper:{translation:{x:10,y:10,z:30},rotation:{x:0,y:-10,z:0},reverseAnimation:{duration:200,easing:'easeOutQuad'}},lines:{translation:{x:10,y:10,z:[0,70]},rotation:{x:0,y:0,z:-2},reverseAnimation:{duration:2000,easing:'easeOutExpo'}},caption:{rotation:{x:0,y:0,z:2},reverseAnimation:{duration:200,easing:'easeOutQuad'}},overlay:{translation:{x:10,y:-10,z:0},rotation:{x:0,y:0,z:2},reverseAnimation:{duration:2000,easing:'easeOutExpo'}},shine:{translation:{x:100,y:100,z:0},reverseAnimation:{duration:200,easing:'easeOutQuad'}}}},{movement:{imgWrapper:{rotation:{x:-5,y:10,z:0},reverseAnimation:{duration:900,easing:'easeOutCubic'}},caption:{translation:{x:30,y:30,z:[0,40]},rotation:{x:[0,15],y:0,z:0},reverseAnimation:{duration:1200,easing:'easeOutExpo'}},overlay:{translation:{x:10,y:10,z:[0,20]},reverseAnimation:{duration:1000,easing:'easeOutExpo'}},shine:{translation:{x:100,y:100,z:0},reverseAnimation:{duration:900,easing:'easeOutCubic'}}}},{movement:{imgWrapper:{rotation:{x:-5,y:10,z:0},reverseAnimation:{duration:50,easing:'easeOutQuad'}},caption:{translation:{x:20,y:20,z:0},reverseAnimation:{duration:200,easing:'easeOutQuad'}},overlay:{translation:{x:5,y:-5,z:0},rotation:{x:0,y:0,z:6},reverseAnimation:{duration:1000,easing:'easeOutQuad'}},shine:{translation:{x:50,y:50,z:0},reverseAnimation:{duration:50,easing:'easeOutQuad'}}}},{movement:{imgWrapper:{translation:{x:0,y:-8,z:0},rotation:{x:3,y:3,z:0},reverseAnimation:{duration:1200,easing:'easeOutExpo'}},lines:{translation:{x:15,y:15,z:[0,15]},reverseAnimation:{duration:1200,easing:'easeOutExpo'}},overlay:{translation:{x:0,y:8,z:0},reverseAnimation:{duration:600,easing:'easeOutExpo'}},caption:{translation:{x:10,y:-15,z:0},reverseAnimation:{duration:900,easing:'easeOutExpo'}},shine:{translation:{x:50,y:50,z:0},reverseAnimation:{duration:1200,easing:'easeOutExpo'}}}},{movement:{lines:{translation:{x:-5,y:5,z:0},reverseAnimation:{duration:1000,easing:'easeOutExpo'}},caption:{translation:{x:15,y:15,z:0},rotation:{x:0,y:0,z:3},reverseAnimation:{duration:1500,easing:'easeOutElastic',elasticity:700}},overlay:{translation:{x:15,y:-15,z:0},reverseAnimation:{duration:500,easing:'easeOutExpo'}},shine:{translation:{x:50,y:50,z:0},reverseAnimation:{duration:500,easing:'easeOutExpo'}}}},{movement:{imgWrapper:{translation:{x:5,y:5,z:0},reverseAnimation:{duration:800,easing:'easeOutQuart'}},caption:{translation:{x:10,y:10,z:[0,50]},reverseAnimation:{duration:1000,easing:'easeOutQuart'}},shine:{translation:{x:50,y:50,z:0},reverseAnimation:{duration:800,easing:'easeOutQuart'}}}},{movement:{lines:{translation:{x:40,y:40,z:0},reverseAnimation:{duration:1500,easing:'easeOutElastic'}},caption:{translation:{x:20,y:20,z:0},rotation:{x:0,y:0,z:-5},reverseAnimation:{duration:1000,easing:'easeOutExpo'}},overlay:{translation:{x:-30,y:-30,z:0},rotation:{x:0,y:0,z:3},reverseAnimation:{duration:750,easing:'easeOutExpo'}},shine:{translation:{x:100,y:100,z:0},reverseAnimation:{duration:750,easing:'easeOutExpo'}}}}];function init(){var idx=0;[].slice.call(document.querySelectorAll('a.tilter')).forEach(function(el,pos){idx=pos%2===0?idx+1:idx;new TiltFx(el,tiltSettings);});}
imagesLoaded(document.querySelector('body'),function(){document.body.classList.remove('loading');init();});}
$('body').on('click','.case_studies_view',function(){var catid=$('#my_case_cat .active').val();var pagination=$('.case_studies_view').data('view_more');var page=$('.case_studies_view').data('page');$('.cs_post_count').html('');$('.case_studies_view a').html('<img src="http://139.59.88.3/everymedia/wp-content/themes/everymedia/images/casestudies_loader.gif" class="img-responsive">');$.ajax({url:ajxdata.admin_url,type:"POST",data:{action:"cs_category_load_more",catid:catid,pagination:pagination,page:page},success:function(data){$('.case_studies_view').remove();$('.case_studies_view').data('view_more',pagination+8);$('.cs_post_count').val('');$('.cs_post_count').val(pagination+8);$('.case_studies_view').data('page',page+1);$('.cs_data').delay(1000).append(data);cs_img_animation();$(".custom-select .option_list").slideUp().removeClass('open').mCustomScrollbar("destroy");$('.selected').unbind().on('click',function(){if($(this).next().is(':hidden')==true){$('.option_list').slideUp(function(){$('body').removeClass('select_open');}).removeClass('open').mCustomScrollbar("destroy");$(this).next().mCustomScrollbar().slideDown(function(){$('body').addClass('select_open');}).addClass('open');}else{$('.option_list').slideUp(function(){$('body').removeClass('select_open');}).removeClass('open').mCustomScrollbar("destroy");}});$('.custom-select .option_list li').unbind().on('click',function(){var txt=$(this).text();var select_option=$(this).data('val');$('.custom-select .option_list li').removeClass('active');$(".custom-select .option_list").mCustomScrollbar("destroy");$(this).parent().parent().removeClass('open').slideUp();$(this).addClass('active');$(this).parent().parent().prev('.selected').addClass('true');$(this).parent().parent().prev('.selected').children('.value').text($(this).text());$(this).parentsUntil("div.form-group").next("select").val(select_option).trigger('change');$(this).parentsUntil("div.form-group").next("select").trigger("change");});}});});$('body').on('click','#my_case_cat li',function(){$(".custom-select .option_list").mCustomScrollbar("destroy").removeClass('open').slideUp();$("#my_case_cat li").removeClass('active');$(this).addClass('active');var fut_val=$(this).text();$(this).parentsUntil('.contact_form_dd').prev().children('.value').text(fut_val);var catid=$(this).val();$('.case_studies_view').data('view_more',8);$('footer').css('opacity','1');var tagid=$('.casetag').val();$('.cs_data').html('<div class="product_loader"><div class="spin"><svg class="loader_svg" width="128" height="128" viewBox="0 0 64 64"><path d="M32,4 L60,56 L4,56 Z"></path><circle r="4" cx="32" cy="0"></circle</svg></div></div>');$.ajax({url:ajxdata.admin_url,type:"post",data:{action:"category_filter",catid:catid,tagid:tagid},success:function(response){$('.cs_data').html(response);cs_img_animation();}});$(".newsletter_carousel").owlCarousel({loop:!0,items:1,onChange:function(elem){var current=this.currentItem;var src=$(current).find("img").attr('src');console.log('Image current is '+src);}});});$("#customsearchform").submit(function(e){var searchquery=$('#customsearchquery').val();$('#search_results_ajax').html('<img src="http://139.59.88.3/everymedia/wp-content/themes/everymedia/images/casestudies_loader.gif" class="img-responsive">');$.ajax({url:ajxdata.admin_url,type:"post",dataType:"json",data:{action:"custom_search",searchquery:searchquery},success:function(response){$('#search_results_ajax').html('');$('#search_results_ajax').html(response.output);$('#my_custom_search_dropdown').html(response.posttypelist);$('#search_string').html(searchquery);$('#searchdefaultselectedvalue').html('all');$('#search_count').html($('#search_results_ajax article[id^="post"]').length);$('.custom-select .option_list#req_industry li').on('click',function(){var txt=$(this).text();var select_option=$(this).data('val');$('.custom-select .option_list li').removeClass('active');$(".custom-select .option_list").mCustomScrollbar("destroy");$(this).parent().parent().removeClass('open').slideUp();$(this).addClass('active');if($(this).hasClass('active')){$("span.req_industry_error:contains('industry is required')").hide();}
$(this).parent().parent().prev('.selected').addClass('true');$(this).parent().parent().prev('.selected').children('.value').text($(this).text());$(this).parentsUntil("div.form-group").next("select").val(select_option).trigger('change');var show_upload=$('.contact_form_dd .selected .value').text();if(show_upload=='looking for a job?'){$('.company_div').hide();$('.contact_form_cv').show();}else{$('.company_div').show();$('.contact_form_cv').hide();}});}});e.preventDefault();});$("#my_news_year li").click(function(){$("#my_news_year li").removeClass('active');$(this).addClass('active');var year=$(this).text();var month=$('.month_value').text();$('.blog_list').html('<div class="cst_ajx_dt"></div>');$('.loader').show();$('footer').css('opacity','1');$.ajax({url:ajxdata.admin_url,type:"post",data:{action:"news_filter",year:year,month:month},success:function(response){$('.loader').hide();$('.blog_list').html(response);$(".custom-select .option_list").slideUp().removeClass('open').mCustomScrollbar("destroy");$('.selected').unbind().on('click',function(){if($(this).next().is(':hidden')==true){$('.option_list').slideUp(function(){$('body').removeClass('select_open');}).removeClass('open').mCustomScrollbar("destroy");$(this).next().mCustomScrollbar().slideDown(function(){$('body').addClass('select_open');}).addClass('open');}else{$('.option_list').slideUp(function(){$('body').removeClass('select_open');}).removeClass('open').mCustomScrollbar("destroy");}});$('.custom-select .option_list#car_city li').unbind().on('click',function(){var txt=$(this).text();var select_option=$(this).data('val');$('.custom-select .option_list li').removeClass('active');$(".custom-select .option_list").mCustomScrollbar("destroy");$(this).parent().parent().removeClass('open').slideUp();$(this).addClass('active');if($(this).hasClass('active')){$("span.city_error:contains('city is required')").hide();}
$(this).parent().parent().prev('.selected').addClass('true');$(this).parent().parent().prev('.selected').children('.value').text($(this).text());$(this).parentsUntil("div.form-group").next("select").val(select_option).trigger('change');$(this).parentsUntil("div.form-group").next("select").trigger("change");});}});});$("#my_news_month li").click(function(){$("#my_news_month li").removeClass('active');$(this).addClass('active');var month=$(this).text();var year=$('.year_value').text();$('.blog_list').html('<div class="cst_ajx_dt"></div>');$('.loader').show();$('footer').css('opacity','1');$.ajax({url:ajxdata.admin_url,type:"post",data:{action:"news_filter",year:year,month:month},success:function(response){$('.loader').hide();$('.blog_list').html(response);$('.month_value').html(month);$(".custom-select .option_list").slideUp().removeClass('open').mCustomScrollbar("destroy");$('.selected').unbind().on('click',function(){if($(this).next().is(':hidden')==true){$('.option_list').slideUp(function(){$('body').removeClass('select_open');}).removeClass('open').mCustomScrollbar("destroy");$(this).next().mCustomScrollbar().slideDown(function(){$('body').addClass('select_open');}).addClass('open');}else{$('.option_list').slideUp(function(){$('body').removeClass('select_open');}).removeClass('open').mCustomScrollbar("destroy");}});$('.custom-select .option_list#car_city li').unbind().on('click',function(){var txt=$(this).text();var select_option=$(this).data('val');$('.custom-select .option_list li').removeClass('active');$(".custom-select .option_list").mCustomScrollbar("destroy");$(this).parent().parent().removeClass('open').slideUp();$(this).addClass('active');if($(this).hasClass('active')){$("span.city_error:contains('city is required')").hide();}
$(this).parent().parent().prev('.selected').addClass('true');$(this).parent().parent().prev('.selected').children('.value').text($(this).text());$(this).parentsUntil("div.form-group").next("select").val(select_option).trigger('change');$(this).parentsUntil("div.form-group").next("select").trigger("change");});}});});$("#my_blog_year li").click(function(){$("#my_blog_year li").removeClass('active');$(this).addClass('active');var year=$(this).text();var month=$('.month_value').text();$('.blog_list').html('<div class="cst_ajx_dt"></div>');$('.loader').show();$('footer').css('opacity','1');$.ajax({url:ajxdata.admin_url,type:"post",data:{action:"blog_filter",year:year,month:month},success:function(response){$('.loader').hide();$('.blog_list').html(response);$(".custom-select .option_list").slideUp().removeClass('open').mCustomScrollbar("destroy");$('.selected').unbind().on('click',function(){if($(this).next().is(':hidden')==true){$('.option_list').slideUp(function(){$('body').removeClass('select_open');}).removeClass('open').mCustomScrollbar("destroy");$(this).next().mCustomScrollbar().slideDown(function(){$('body').addClass('select_open');}).addClass('open');}else{$('.option_list').slideUp(function(){$('body').removeClass('select_open');}).removeClass('open').mCustomScrollbar("destroy");}});$('.custom-select .option_list#car_city li').unbind().on('click',function(){var txt=$(this).text();var select_option=$(this).data('val');$('.custom-select .option_list li').removeClass('active');$(".custom-select .option_list").mCustomScrollbar("destroy");$(this).parent().parent().removeClass('open').slideUp();$(this).addClass('active');if($(this).hasClass('active')){$("span.city_error:contains('city is required')").hide();}
$(this).parent().parent().prev('.selected').addClass('true');$(this).parent().parent().prev('.selected').children('.value').text($(this).text());$(this).parentsUntil("div.form-group").next("select").val(select_option).trigger('change');$(this).parentsUntil("div.form-group").next("select").trigger("change");});}});});function getCookie(name){var re=new RegExp(name+"=([^;]+)");var value=re.exec(document.cookie);return(value!=null)?unescape(value[1]):null;}
$("#my_blog_month li").click(function(){$("#my_blog_month li").removeClass('active');$(this).addClass('active');var month=$(this).text();var year=$('.year_value').text();$('.blog_list').html('<div class="cst_ajx_dt"></div>');$('.loader').show();$('footer').css('opacity','1');$.ajax({url:ajxdata.admin_url,type:"post",data:{action:"blog_filter",year:year,month:month},success:function(response){$('.loader').hide();$('.blog_list').html(response);$('.month_value').html(month);$(".custom-select .option_list").slideUp().removeClass('open').mCustomScrollbar("destroy");$('.selected').unbind().on('click',function(){if($(this).next().is(':hidden')==true){$('.option_list').slideUp(function(){$('body').removeClass('select_open');}).removeClass('open').mCustomScrollbar("destroy");$(this).next().mCustomScrollbar().slideDown(function(){$('body').addClass('select_open');}).addClass('open');}else{$('.option_list').slideUp(function(){$('body').removeClass('select_open');}).removeClass('open').mCustomScrollbar("destroy");}});$('.custom-select .option_list#car_city li').unbind().on('click',function(){var txt=$(this).text();var select_option=$(this).data('val');$('.custom-select .option_list li').removeClass('active');$(".custom-select .option_list").mCustomScrollbar("destroy");$(this).parent().parent().removeClass('open').slideUp();$(this).addClass('active');if($(this).hasClass('active')){$("span.city_error:contains('city is required')").hide();}
$(this).parent().parent().prev('.selected').addClass('true');$(this).parent().parent().prev('.selected').children('.value').text($(this).text());$(this).parentsUntil("div.form-group").next("select").val(select_option).trigger('change');$(this).parentsUntil("div.form-group").next("select").trigger("change");});}});});var owl_mailer=$(".newsletter_carousel");$('body').on('click','.not_upload',function(){$("span.wpcf7-not-valid-tip:contains('resume file is required or please select the valid option')").hide();});$("input[name='re_full_name']").keypress(function(event){var keycode=event.keyCode||event.which;if(keycode!==37&&keycode!==39&&keycode!==46&&keycode!==8){return /[A-z\s\b]/.test(String.fromCharCode(keycode));}});$("input[name='re_telephone']").keypress(function(event){var keycode=event.keyCode||event.which;if(keycode!==37&&keycode!==39&&keycode!==46&&keycode!==8){return /\d/.test(String.fromCharCode(keycode));}});$(document).ready(function(){var count=0;$('#ph_number').keypress(function(event){var key_code=event.keyCode?event.keyCode:event.which;if((key_code>=97&&key_code<=122)||(key_code>=48&&key_code<=57)){console.log(++count);}});});$("input[name='firstname']").keypress(function(event){var keycode=event.keyCode||event.which;if(keycode!==37&&keycode!==39&&keycode!==46&&keycode!==8){return /[A-z\s\b]/.test(String.fromCharCode(keycode));}});$("input[name='lastname']").keypress(function(event){var keycode=event.keyCode||event.which;if(keycode!==37&&keycode!==39&&keycode!==46&&keycode!==8){return /[A-z\s]/.test(String.fromCharCode(keycode));}});$("input[name='telephone']").keypress(function(event){var keycode=event.keyCode||event.which;if(keycode!==37&&keycode!==39&&keycode!==46&&keycode!==8){return /\d/.test(String.fromCharCode(keycode));}});$("input[name='expertise_first_name']").keypress(function(event){var keycode=event.keyCode||event.which;if(keycode!==37&&keycode!==39&&keycode!==46&&keycode!==8){return /[A-z\s]/.test(String.fromCharCode(keycode));}});$("input[name='expertise_phone_number']").keypress(function(event){var keycode=event.keyCode||event.which;if(keycode!==37&&keycode!==39&&keycode!==46&&keycode!==8){return /\d/.test(String.fromCharCode(keycode));}});$("input[name='car_name']").keypress(function(event){var keycode=event.keyCode||event.which;if(keycode!==37&&keycode!==39&&keycode!==46&&keycode!==8){return /[A-z\s]/.test(String.fromCharCode(keycode));}});$("input[name='car_telephone']").keypress(function(event){var keycode=event.keyCode||event.which;if(keycode!==37&&keycode!==39&&keycode!==46&&keycode!==8){return /\d/.test(String.fromCharCode(keycode));}});$('body').on('click','.evm-blog-social-share a',function(event){event.preventDefault();var width=575,height=520,left=($(window).width()-width)/2,top=($(window).height()-height)/2,opts='status=1'+',width='+width+',height='+height+',top='+top+',left='+left;window.open($(this).attr('href'),'share',opts);});$(".not_upload").replaceWith('<div class="not_upload customcb red"><input type="checkbox" name="noresume" id="customcb1" value="&nbsp;"><label class="inner" for="customcb1"></label><label class="outer" for="customcb1">i don\'t have resume</label></div>');$('.wpcf7-file').change(function(){var fileExtension=['doc','docx','pdf','rtf'];if($.inArray($(this).val().split('.').pop().toLowerCase(),fileExtension)==-1){this.value='';return!1;}});$(".inner").click(function(){if($("#customcb1").val()!="i don't have resume"){$("#customcb1").val("i don't have resume");}else{$("#customcb1").val("");}});$("select#state").change(function(){var sid=$("select#state").val();$.ajax({url:ajxdata.admin_url,type:"post",data:{action:"state_city",sid:sid},success:function(response){$('select#city').parent("div.form-group").html(response);$('.selected').unbind().on('click',function(){if($(this).next().is(':hidden')==true){$('.option_list').slideUp(function(){$('body').removeClass('select_open');}).removeClass('open').mCustomScrollbar("destroy");$(this).next().mCustomScrollbar().slideDown(function(){$('body').addClass('select_open');}).addClass('open');}else{$('.option_list').slideUp(function(){$('body').removeClass('select_open');}).removeClass('open').mCustomScrollbar("destroy");}});$('.custom-select .option_list#car_city li').unbind().on('click',function(){var txt=$(this).text();var select_option=$(this).data('val');$('.custom-select .option_list li').removeClass('active');$(".custom-select .option_list").mCustomScrollbar("destroy");$(this).parent().parent().removeClass('open').slideUp();$(this).addClass('active');if($(this).hasClass('active')){$("span.city_error:contains('city is required')").hide();}
$(this).parent().parent().prev('.selected').addClass('true');$(this).parent().parent().prev('.selected').children('.value').text($(this).text());$(this).parentsUntil("div.form-group").next("select").val(select_option).trigger('change');$(this).parentsUntil("div.form-group").next("select").trigger("change");});}});});if($("form#customsearchform").length&&$("i.fa-search").length){$("i.fa-search").click(function(){if($("input#customsearchquery").val()){$("form#customsearchform").submit();}});}
$("input[type='submit']").click(function(){setInterval(function(){if($("span[role='alert']").length&&$("span[role='alert']").is(":visible")){if($("span[name='con_sub_dd']").length&&$("div.contact_form_sec").length){if($("span[name='con_sub_dd']").text()=="* purpose"){$("#contact_subject_error").show();$("#contact_subject_error").parents("div.custom-select").addClass("error_div");}
else{$("#contact_subject_error").hide();$("#contact_subject_error").parents("div.custom-select").removeClass("error_div");}
if($("input[name='company']").val()==""){$("#contact_company_error").show();$("#contact_company_error").parents("div.form-group").addClass("error_div");}else{$("#contact_company_error").hide();$("#contact_company_error").parents("div.form-group").removeClass("error_div");}}
if($("span[name='con_sub_dd']").length&&$("form.contact_form_data").length){if($("span[name='con_sub_dd']").text()=="* select subject"){$("#subject_error").show();$("#subject_error").parents("div.custom-select").addClass("error_div");}
else{$("#subject_error").hide();$("#subject_error").parents("div.custom-select").removeClass("error_div");}}
if($("span[name='industry']").length){if($("span[name='industry']").text()=="* industry"){$("#industry_error").show();$("#industry_error").parents("div.custom-select").addClass("error_div");}
else{$("#industry_error").hide();$("#industry_error").parents("div.custom-select").removeClass("error_div");}}
if($("span[name='company_size']").length){if($("span[name='company_size']").text()=="* company size"){$("#company_error").show();$("#company_error").parents("div.custom-select").addClass("error_div");}
else{$("#company_error").hide();$("#company_error").parents("div.custom-select").removeClass("error_div");}}
if($("span[name='job_title']").length){if($("span[name='job_title']").text()=="* job title"){$("#job_title_error").show();$("#job_title_error").parents("div.custom-select").addClass("error_div");}
else{$("#job_title_error").hide();$("#job_title_error").parents("div.custom-select").removeClass("error_div");}}
if($("span[name='agency']").length){if($("span[name='agency']").text()=="* are you an agency?"){$("#agency_error").show();$("#agency_error").parents("div.custom-select").addClass("error_div");}
else{$("#agency_error").hide();$("#agency_error").parents("div.custom-select").removeClass("error_div");}}
if($("span[name='monitor_tool']").length){if($("span[name='monitor_tool']").text()=="* are you using a monitoring tool?"){$("#monitor_tool_error").show();$("#monitor_tool_error").parents("div.custom-select").addClass("error_div");}
else{$("#monitor_tool_error").hide();$("#monitor_tool_error").parents("div.custom-select").removeClass("error_div");}}}},200);});});