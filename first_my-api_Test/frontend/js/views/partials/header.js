import Component from '../../views/component';
import HeaderTemplate from '../../../templates/partials/header.hbs';
import Test from "../../models/Test";


class Header extends Component {
    render() {
        const resource = this.request.resource;
        const url = location.hash.slice(1);

        this.model = new Test();
        return new Promise(resolve => resolve(HeaderTemplate({isAboutPage: !resource, isTestPage: (resource === 'test'), displayNun:(url !== '/test' && url !== '/test/result'), buttonBackwards:(url === '/test' || url === '/test/result' )})));

    }
}

export default Header;