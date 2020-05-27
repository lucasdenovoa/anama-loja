import Head from './Head';

import Style from './Style';

const Layout = ({ children, title, description, url, image, pagSeguro }) => (
    <div>
        <Head
            title={title}
            description={description}
            url={url}
            ogImage={image}
            pagSeguro={pagSeguro}></Head>
        <Style />
        <div className="body">
            { children }
        </div>
        <footer>
            <div className="flex flex-center">
                <small>
                    &copy; Plataforma Anamã - Stop Ocean Bound Plastic
                </small>
            </div>
        </footer>
    </div>
);

export default Layout;
