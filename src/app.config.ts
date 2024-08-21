export default defineAppConfig({
    pages: [
        'pages/router/index'
    ],
    window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black'
    },
    subpackages: [
        {
            root: 'pages/sub/',
            pages: [
                'fake-index/index',
                'index/index'
            ]
        }
    ]
})
