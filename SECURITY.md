# Security Notes

## Development Dependencies

### webpack-dev-server Vulnerabilities (Moderate Severity)

The project currently has 3 moderate severity vulnerabilities in `webpack-dev-server` (a development dependency):

- **GHSA-9jgg-88mc-972h**: Potential source code theft when accessing malicious websites with non-Chromium browsers
- **GHSA-4v9v-hfq4-rm2v**: Potential source code theft when accessing malicious websites

#### Impact Assessment

- ✅ **Production builds are NOT affected** - These vulnerabilities only affect the development server
- ✅ **Low risk** - Requires developer to visit a malicious website during development
- ✅ **Mitigation in place** - Using webpack-dev-server 4.15.2 with npm overrides

#### Why Not Fixed Completely?

The vulnerabilities are in webpack-dev-server <=5.2.0, requiring version 5.2.1+. However:
- react-scripts 5.0.1 (latest stable) only supports webpack-dev-server 4.x
- Upgrading to webpack-dev-server 5.x breaks react-scripts compatibility
- react-scripts 5.0.1 is the latest stable version

#### Recommendations

1. **For Production**: Use `npm run build` - production builds are secure
2. **For Development**: Avoid visiting untrusted websites while the dev server is running
3. **Future**: Monitor for react-scripts updates that support webpack-dev-server 5.x

## Other Security Measures

All other vulnerabilities have been addressed:
- ✅ nth-check upgraded to ^2.1.1 (fixed high severity regex vulnerability)
- ✅ postcss upgraded to ^8.4.31 (fixed moderate severity parsing vulnerability)

## Verification

Run `npm audit` to see current security status:
```bash
npm audit
```

Run production build to verify secure deployment:
```bash
npm run build
```
