const optimize = require('makestatic-preset-optimize')

module.exports = {
  // disable source maps
  devtool: false,

  // generate manifest file
  manifest: true,

  // always clean files in production
  clean: true,

  // configure optimization lifecycle
  lifecycle: {
    transform: [
      require('makestatic-dom-version'),
      {
        plugin: require('makestatic-permalink'),
        from: 2,
        to: 3
      },
      {
        plugin: require('makestatic-inline-css'),
        remove: true
        // prune: true
      }
    ],
    verify: [
      require('makestatic-verify-id')
      // require('makestatic-verify-anchor'),
      // require('makestatic-verify-link')
    ],
    emit: [
      {
        plugin: require('makestatic-fingerprint'),
        rules: [/main\.js$/]
      },
      {
        plugin: require('makestatic-sitemap'),
        formats: ['xml'],
        robots: true
      }
    ],
    optimize: optimize(),
    audit: [
      require('makestatic-validate-html'),
      require('makestatic-audit-files'),
      require('makestatic-archive-zip')
    ]
  },

  deploy: {
    production: {
      s3: {
        domain: 'osteothai.school',
        credentials: {
          profile: 'osteothai'
        },
        prefix: 'production',
        region: 'ap-southeast-1',
        error: 'production/404.html',
        redirects: [
          'www.osteothai.school'
        ],
        publish: true,
        cloudfront: {
          key: 'cloudfront_distribution_production',
          invalidate: true,
          paths: ['/*']
        }
      }
    }
  }
}
