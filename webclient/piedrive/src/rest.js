import $ from 'jquery';
//import authentication from '../authentication';

export default class Rest {

    static getUrl(path) {
        return "http://localhost:8080" + path;
    }

    // static getCSRFToken() {
    //     var token = "";
    //     var splitedCookies = document.cookie.split(";");
    //     splitedCookies.forEach((cookie) => {
    //         if(cookie.startsWith("XSRF-TOKEN")) {
    //             token = cookie.split("=")[1];
    //         }
    //     });
    //     return token;
    // }

    static getBasicExtra(method, path) {
        var url = Rest.getUrl(path);

        var extra = {
            url: url,
            method: method
        };

        return extra;
    }

    // static getCsrfProtectedExtra(method, path) {
    //     var basic = Rest.getBasicExtra(method, path);
    //     var token = Rest.getCSRFToken();
    //     var extra = {
    //         headers: {
    //             "X-XSRF-TOKEN": token
    //         }
    //     };
    //
    //     return $.extend(true, basic, extra);
    // }

    // static getWrappedError(errorHandler, dispatch) {
    //     var wrappedErrorHandler = (jqXHR, exception) => {
    //         if(jqXHR.status === 403) {
    //             console.log("Old session is invalid, discarding it");
    //             dispatch(authentication.actions.logout());
    //         } else {
    //             console.error("REQUEST FAILED:\n" + JSON.stringify(jqXHR, null, 2) + "\n" + JSON.stringify(exception, null, 2));
    //             errorHandler(jqXHR, exception);
    //         }
    //     }
    //
    //     return {
    //         error: wrappedErrorHandler
    //     }
    // }


    static send(settings, extra, dispatch) {
        //var error = Rest.getWrappedError(settings.error, dispatch);
        //var request = $.extend(true, settings, extra, error);
        var request = $.extend(true, settings, extra);
        $.ajax(request);
    }

    static post(settings, dispatch) {
        var extra = Rest.getBasicExtra("POST", settings.url);
        Rest.send(settings, extra, dispatch);
    }

    static get(settings, dispatch) {
        var extra = Rest.getBasicExtra("GET", settings.url);
        Rest.send(settings, extra, dispatch);
    }
}
