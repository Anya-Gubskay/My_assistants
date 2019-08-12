import '../styles/app.less';

import Utils from './helpers/utils';

import Header from './views/partials/header';
import Footer from './views/partials/footer';

import About from './views/pages/about';
import Error404 from './views/pages/error404';

import ContentTest from './views/pages/test/content-test';

import InfoTest from './views/pages/test/info-test';
import ResultsTest from './views/pages/test/results-test';



const Routes = {
    '/': About,
    '/test': ContentTest,
    '/test/result': ResultsTest,
    '/info': InfoTest,
};

function router() {
    const headerContainer = document.getElementsByClassName('header-container')[0],
        contentContainer = document.getElementsByClassName('content-container')[0],
        footerContainer = document.getElementsByClassName('footer-container')[0],
        header = new Header(),
        footer = new Footer();

    header.render().then(html => {
        headerContainer.innerHTML = html;
        header.afterRender();
    });

    const request = Utils.parseRequestURL();
    const parsedURL = `/${request.resource || ''}${request.action ? `/${request.action}` : ''}`;
    const page = Routes[parsedURL] ? new Routes[parsedURL]() : new Error404();

    if (parsedURL === '/info') {
        page.render().then(html => {
            contentContainer.innerHTML = html;
            page.afterRender();
        })
    } else {
        page.getData().then(data => {
            page.render(data).then(html => {
                contentContainer.innerHTML = html;
                page.afterRender();
            });
        });
    }

    footer.render().then(html => {
        footerContainer.innerHTML = html;
        footer.afterRender();
    });
}


window.addEventListener('load', router);
window.addEventListener('hashchange', router);
