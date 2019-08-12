import Test from '../models/Test';

class Utils {
    static parseRequestURL() {

        this.model = new Test();
        const url = location.hash.slice(1),
            request = {};
        [, request.resource, request.action] = url.split('/');

        return request;

    }
}

export default Utils;