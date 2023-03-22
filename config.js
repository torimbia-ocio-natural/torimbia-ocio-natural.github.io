module.exports = {
  siteTitle: 'Torimbia Ocio Natural - Rutas en bicicleta', // <title>
  manifestName: 'Torimbia Ocio Natural',
  manifestShortName: 'Tor.Oci.Nat.', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#663399',
  manifestThemeColor: '#663399',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/img/website-icon.png',
  pathPrefix: `/gatsby-starter-spectral/`, // This path is subpath of your hosting https://domain/portfolio
  heading: 'Torimbia Ocio Natural',
  subHeading: 'Pagina Web de la empresa de alquiler de bicicletas Torimbia Ocio Natural',
  trips: [
    {title: 'Senda Costera', path: 'trips/coast'},
    {title: 'Lagos de Covadonga', path: 'trips/lakes'}
  ]
};
