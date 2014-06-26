define(["require","jQuery","tau/core/class","./../services/board.menu.acid.listener"],function(e){var r=e("jQuery"),t=e("tau/core/class"),i=e("./../services/board.menu.acid.listener");return t.extend({init:function(e,r){this._componentBus=r,this._configurator=e,this._boardApiService=e.getBoardApiService(),this._loggedUser=e.getLoggedUser(),this._urlBuilder=e.getUrlBuilder(),this._acidStream=i.getAcidTokenStream(e.getAppStateStore()),this.acidUpdated=this._acidStream.callback},loadBoards:function(){return r.when(this._acidStream.getPromise(),this._boardApiService.getBoardsForUser(this._loggedUser.id)).then(function(e,r){return r.data})},getBoardLink:function(e){return this._urlBuilder.getRelativeBoardUrl(e,this._acidStream.getValue())},createBoard:function(){var e=r.Deferred();return this._configurator.getBoardDefinitionFactory().createBoard().done(function(r){this._componentBus.fire("add.board",{board:{id:r.id}}),this._configurator.setConfig("tmpBoardIsJustAdded",!0),e.resolve(r)}.bind(this)),e},redirectToBoard:function(e){var r=this._urlBuilder.getRelativeBoardUrl(e);this._configurator.getRouting().redirect(r)}})});