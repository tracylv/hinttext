hinttext
========

hinttext is a jquery plugin which show a hint text for input or textarea              
Support Browsers: IE6-11, Firefox, Chrome, Safari, Opera

#### Online Demo
http://tracylv.com/users/signup        
http://hinttext.tracylv.com/demo.htm                     
![hinttext][1]         
#### parameters:
```
var defaults =
    {
	     // the class name for hinttext dom
		   hintLabelCls : "hinttext"
    };

1. hintLabelCls: the class name for hinttext dom,  then we can write css for the hinttext dom according to the class       
```
#### usage:
1.include all the resources of emailautocomplete in your page (need jquery)
```
<link type="text/css" href="jquery.emailautocomplete.css" rel="stylesheet" />

<script src="http://code.jquery.com/jquery-1.9.1.min.js" type="text/javascript"></script>
<script src="jquery.emailautocomplete.js" type="text/javascript"></script>
```
2.add the below dom into your page.
```
<div class="autocompletecon">
    <input id="emailautocomplete"  class="emailautocomplete" name="email" type="email" maxlength="50" autocomplete="off" />
</div>
```
3.bind the behavior of the email autocomplete
```
<script type="text/javascript">
  $(function(){
      $(".emailautocomplete").emailautocomplete();
  });
</script>
```
4.you can override the parameters like below
```
$(".emailautocomplete").emailautocomplete({ domains: ["qq.com", "163.com", "gmail.com", "126.com", "sina.com"]});
```
#### suggestion:
```
1. copy the css and js code of this plugin into your own css and js file, because of this plugin's code is very little and it's not deserved to be loaded as a single file, it will increase the page load time in a way.
2. adjust the css of this plugin according to your personal need.
```
[1]:https://github.com/tracylv/hinttext/blob/master/demo_screenshot.jpg


