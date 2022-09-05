const WebsiteName = process.env.REACT_APP_WEBSITE_NAME
export const SetTitle = (function(){
	document.title = WebsiteName;
	return function(title){
		if(title && title !== ""){
			document.title = WebsiteName+"|"+title;
		}else{
			document.title = WebsiteName;
		}
	}
})();