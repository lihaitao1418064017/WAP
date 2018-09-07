/**
 * cd-user公用js
 */

(function () {
    // 接口
    var ajaxRequest = Global.methods.ajaxRequest;
    var baseUrl = Global.constant.BASEURL;
    Global.service = {


        /**
         * 注册请求
         * @param data
         * @param successCallBack
         * @param failCallBack
         */
        register: function (data, successCallBack, failCallBack) {
            alert("sdd");
            ajaxRequest({
                type: 'POST',
                url: 'http://localhost:8080/user/login',
                data: data
            }, successCallBack, failCallBack);
        }
    };
})();