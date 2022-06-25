const path = require('path');

const resolveAlias = (p) => path.resolve(__dirname, '..', p);

module.exports = {
    _: resolveAlias('src'),
    _components: resolveAlias('src/_components'),
    _shared: resolveAlias('src/_components/_shared'),
    _assets: resolveAlias('src/_assets'),
    _pages: resolveAlias('src/_pages'),
    _styled: resolveAlias('src/styled'),
    _styles: resolveAlias('src/_styles'),
    _icons: resolveAlias('src/_assets/_icons'),
    _types: resolveAlias('src/_types'),
    _hocs: resolveAlias('src/_hocs'),
    _buttons: resolveAlias('src/_components/_shared/_buttons'),
    _formcontrol: resolveAlias('src/_components/_shared/_formcontrol'),
    _helpers: resolveAlias('src/_helpers'),
    _hooks: resolveAlias('src/_hooks'),
    _mocks: resolveAlias('src/_mocks'),
    _api: resolveAlias('src/_api'),
    _http: resolveAlias('src/_api/_http'),
    _services: resolveAlias('src/_services'),
    _store: resolveAlias('src/_store'),
    _transitions: resolveAlias('src/_components/_transitions'),
    _constants: resolveAlias('src/_constants'),
    _skeletons: resolveAlias('src/_components/_skeletons'),
    _ws: resolveAlias('src/_api/_ws'),
    _friends: resolveAlias('src/_components/_friends'),
    _config: resolveAlias('config'),
};
