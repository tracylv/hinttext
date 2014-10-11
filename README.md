hinttext
========

hinttext is a jquery plugin which show a hint text for input or textarea              
**Support Browsers: IE6-11, Firefox, Chrome, Safari, Opera**

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
1.include all the resources of hinttext in your page (need jquery)
```
<link type="text/css" href="hinttext.css" rel="stylesheet" />        

<script src="http://code.jquery.com/jquery-1.9.1.min.js" type="text/javascript"></script>              
<script src="http://hinttext.tracylv.com/hinttext.js" type="text/javascript"></script>              
```
2.add the hinttext dom into your page. (Here is an example dom)                
of course, we can use any class/id as you want, and then adjust the css according to your class/id.         
Notes:          
**input/textarea not share a same direct parent container**            
**Put your hinttext in the "placeholder" attribute, like: placeholder="用户名" **          

```
<!-- hinttext dom structure start, [make sure every input/textarea not share a same direct parent] -->
	<div class="item">
		<input name="username" type="text" placeholder="用户名" maxlength="30" value=""/>			   
	</div>
	<div class="item">
		<input name="password" type="password" placeholder="密码" maxlength="30" value="" />				
	</div>
	<div class="item">
		<input name="confirmpassword" type="password" placeholder="确认密码" maxlength="30" value=""/>				
	</div>
	<div class="item">
		<input name="nickname" type="text" placeholder="昵称" maxlength="20" value="" />				
	</div>
	<div class="item">
		<textarea name="option" type="text" placeholder="自我介绍" value="" ></textarea>			
	</div>
	<!-- hinttext dom structure end -->
```

Wrong Example:  (this is a wrong example dom for hinttext plugin)           
```
	<div class="item">
		<input name="username" type="text" placeholder="用户名" maxlength="30" value=""/>
		<input name="password" type="password" placeholder="密码" maxlength="30" value="" />
	</div>
```


3.bind the behavior of the email autocomplete
```
<script type="text/javascript">
    $(function(){
	    $(".itemslist .item input, .itemslist .item textarea").hinttext();
    });
</script>
```
4.you can override the parameters like below
```
$(".itemslist .item input, .itemslist .item textarea").hinttext({hintLabelCls: "myOwnHinttextClass"});
```
#### suggestion:
```
1. copy the css and js code of this plugin into your own css and js file, because of this plugin's code is very little and it's not deserved to be loaded as a single file, it will increase the page load time in a way.
2. adjust the css of this plugin according to your personal need.
```
[1]:https://github.com/tracylv/hinttext/blob/master/demo_screenshot.jpg


