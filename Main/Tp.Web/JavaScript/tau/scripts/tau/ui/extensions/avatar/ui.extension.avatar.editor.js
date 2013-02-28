define(["app.path","Underscore","jQuery","tau/components/extensions/component.extension.base","tau/core/tau","libs/jquery/jquery.fileupload","libs/jquery/jquery.iframe-transport","libs/jquery/jquery.Jcrop","tau/ui/behaviour/overlay/ui.behaviour.overlay"],function(AppPath,_,$,ExtensionBase,tau){return ExtensionBase.extend({"bus afterRender":function(evt){evt.data.element.find(".file-input").fileupload({url:this._getUploadUrl(),formData:this._getFormData(),add:_.bind(this._onFileAdd,this)}),this.avatarService=this.config.context.configurator.getAvatarService(),evt.data.element.find(".crop-avatar").click(_.bind(this.onCropClick,this)),evt.data.element.find(".remove-avatar").click(_.bind(this.onRemoveClick,this)),evt.data.element.find(".tau-save-crop").click(_.bind(this.onSaveClick,this)),evt.data.element.find(".tau-cancel-crop").click(_.bind(this.onCancelClick,this));var avatarContainer=evt.data.element.find(".tau-avatar-crop-container"),maxWidth=avatarContainer.css("max-width");this.fire("view.max.width.calculated",maxWidth)},onCancelClick:function(){this.fire("view.save.cancel")},onSaveClick:function(){this.fire("view.save.crop")},onRemoveClick:function(){this.fire("view.lock"),this.fire("view.remove.avatar")},onCropClick:function(){this.fire("view.initialize.crop")},"bus model.crop.ready:last+view.initialize.crop":function(evt,cropRect){this.fire("view.lock"),this.fire("view.edit.avatar.with.url",{url:this.getOriginAvatarUrl(this._getGeneralId()),cropRect:cropRect})},"bus view.edit.avatar.with.url:last+view.crop.selected:last+afterRender:last+view.save.crop":function(evt,baseUrl,selectedRect,afterRender){var $img=afterRender.element.find(".tau-avatar-crop-container .tau-img:visible"),horizontalScale=$img[0].naturalWidth/$img.width(),verticalScale=$img[0].naturalHeight/$img.height(),cropUrl=this.getCropAvatarUrl(baseUrl.url,{x:parseInt(selectedRect.x*horizontalScale),y:parseInt(selectedRect.y*verticalScale),w:parseInt(selectedRect.w*verticalScale),h:parseInt(selectedRect.h*verticalScale)}),scale=$img.width()/$img[0].naturalWidth;this.fire("view.image.will.crop"),this.avatarService.crop(cropUrl).done($.proxy(function(data){this.fire("view.image.did.cropped",data),this.fire("model.crop.ready",{x:cropUrl.x,y:cropUrl.y,width:cropUrl.w,height:cropUrl.h})},this)).fail($.proxy(function(error){this.fire("error",{message:error.Message,disableAutoClose:!0}),this.fire("view.hide.avatar.editor"),this.fire("view.unlock")},this))},"bus afterRender:last+view.hide.avatar.editor":function(evt,afterRender,hideAvatarEditorData){var self=this;afterRender.element.find(".tau-avatar-crop-container").slideUp(function(){hideAvatarEditorData&&1==hideAvatarEditorData.close&&self.fire("close",{animated:!0})}),afterRender.element.find(".drop-down-list__inner").show()},"bus afterRender:last+view.show.avatar.editor":function(evt,afterRender){afterRender.element.find(".tau-avatar-crop-container").slideDown(),afterRender.element.find(".drop-down-list__inner").hide()},"bus afterRender:last+view.lock":function(evt,afterRender){afterRender.element.tauOverlay()},"bus afterRender:last+view.unlock":function(evt,afterRender){afterRender.element.tauOverlay("hide")},"bus afterRender:last+view.save.cancel":function(evt,afterRender){this.fire("view.hide.avatar.editor")},"bus jcrop.api.ready+view.image.will.crop":function(evt,jcropApi){jcropApi.destroy(),this.fire("view.lock")},"bus avatar.did.removed":function(evt,data){this.store.registerWithEvents([{id:data.Id,__type:"user",avatarUri:data.AvatarUri}]),this.fire("view.unlock")},"bus view.image.did.cropped":function(evt){var data=evt.data;this.store.registerWithEvents([{id:data.Id,__type:"user",avatarUri:data.AvatarUri}]),this.fire("view.hide.avatar.editor",{close:!0}),this.fire("view.unlock")},"bus view.remove.avatar":function(){this.fire("view.lock");var removeAvatarUrl=this.getRemoveAvatarUrl(this._getGeneralId());this.avatarService.remove(removeAvatarUrl).done($.proxy(function(data){this.fire("avatar.did.removed",data)},this)).fail($.proxy(function(error){this.fire("error",{message:error.Message,disableAutoClose:!0}),this.fire("view.unlock")},this))},"bus view.files.selected":function(evt,filesData){function failUploadFile(jqXHR){var error=JSON.parse(jqXHR.responseText);self.fire("error",{message:error.Message,disableAutoClose:!0}),self.fire("view.unlock")}var self=this;self.fire("view.lock"),filesData.submit().done(function(result,status,jqXHR){try{result=JSON.parse(result)}catch(e){result=result.find("body").text(),jqXHR.responseText=result,result=JSON.parse(result)}result.Success===!0?self.fire("view.file.did.upload"):failUploadFile(jqXHR)}).fail(failUploadFile)},"bus afterRender:last+view.crop.selected":function(evt,afterRender){afterRender.element.find(".tau-save-crop").attr("disabled",!1)},"bus jcrop.api.ready>before_view.file.did.upload":function(evt,jcropApi){jcropApi.destroy()},"bus afterRender:last+view.crop.released":function(evt,afterRender){afterRender.element.find(".tau-save-crop").attr("disabled",!0)},getTempAvatarUrl:function(userId){var url=AppPath.get()+"/Avatar.ashx?UserID="+userId+"&source=temp&"+(new Date).getTime();return this._appendToken(url)},getRemoveAvatarUrl:function(userId){var url=AppPath.get()+"/Avatar.ashx?operation=remove&UserID="+userId;return this._appendToken(url)},getOriginAvatarUrl:function(userId){var url=AppPath.get()+"/Avatar.ashx?UserID="+userId+"&source=original&"+(new Date).getTime();return this._appendToken(url)},getCropAvatarUrl:function(baseUrl,rect){var url=baseUrl+"&operation=crop&"+["x="+rect.x,"y="+rect.y,"width="+rect.w,"height="+rect.h].join("&");return this._appendToken(url)},_appendToken:function(url){var result=url;return url.indexOf("?token=")<0&&url.indexOf("&token=")<0&&(result+=tau.getTokenParameterFromQueryString("&")),result},"bus afterRender:last+view.file.did.upload":function(evt,afterRender){var userId=this._getGeneralId(),avatarSrc=this.getTempAvatarUrl(userId);this.fire("view.hide.avatar.editor"),this.fire("view.edit.avatar.with.url",{url:avatarSrc})},"bus jcrop.api.ready>before_view.edit.avatar.with.url":function(evt,api,avatarSrc){api.destroy()},"bus afterRender:last+view.max.width.calculated:last+view.edit.avatar.with.url":function(evt,afterRender,defaultMaxWidth,editData){var self=this,imageContainer=afterRender.element.find(".tau-avatar-crop-container");imageContainer.css("max-width",defaultMaxWidth);var $img=afterRender.element.find(".tau-avatar-crop-container .tau-img:first-child");$img.css("width","").css("height","").prop("src",editData.url);var originalCrop=editData.cropRect,onImageLoad=function(){if(0==afterRender.element.is(":visible")){self.fire("view.unlock");return}self.fire("view.show.avatar.editor"),afterRender.element.find(".tau-save-crop").attr("disabled",!0);var width=$img.width(),height=$img.height(),minSize=48,left=(width-minSize)/2,top=(height-minSize)/2,element=afterRender.element,offset=element.offset(),maxScreenHeight=$(window).height()-50-offset.top;if(maxScreenHeight<height){var maxWidth=maxScreenHeight*width/height;imageContainer.css("max-width",maxWidth),width=$img.width(),height=$img.height()}var scale=$img.width()/$img[0].naturalWidth,selectRect=null;originalCrop&&(selectRect=[originalCrop.x*scale,originalCrop.y*scale,originalCrop.width*scale,originalCrop.height*scale],selectRect[2]+=selectRect[0],selectRect[3]+=selectRect[1]),$img.Jcrop({aspectRatio:1,minSize:[minSize,minSize],setSelect:selectRect?selectRect:[0,0,width,height],onSelect:function(c){self.fire("view.crop.selected",c)},onChange:function(c){self.fire("view.crop.selected",c)},onRelease:function(){self.fire("view.crop.released")}},function(){self.fire("view.unlock"),self.fire("jcrop.api.ready",this)})};$img.on("load",onImageLoad)},_getUploadUrl:function(){return AppPath.get()+"/Avatar.ashx?UserID="+this._getGeneralId()+tau.getTokenParameterFromQueryString("&")},_getFormData:function(){return[]},_getGeneralId:function(){return this.config.context.entity.id},_onFileAdd:function(event,data){if(!data.files||data.files.length==0)return;this.fire("view.files.selected",data)}})})