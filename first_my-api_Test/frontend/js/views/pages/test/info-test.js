import InfoTestTemplate from '../../../../templates/pages/test/info-test.hbs';

class InfoTest {
    render() {
        return new Promise(resolve => resolve(InfoTestTemplate ()));
    }

    afterRender(){};
}


export default InfoTest;