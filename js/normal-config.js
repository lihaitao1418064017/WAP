/**
 * cd-user公用js
 */
(function () {

    // 接口
    var ajaxRequest = Global.methods.ajaxRequest;
    var baseUrl = Global.constant.BASEURL;
    Global.service = {
        /**
         * 获取项目列表
         * @param data 参数
         * @param successCallBack 成功回调
         * @param failCallBack 失败回调
         */
        getNetList: function (data, successCallBack, failCallBack) {
            ajaxRequest({
                type: 'POST',
                url: baseUrl + '/project/list',
                data: data
            }, successCallBack, failCallBack);
        }




    };
})();