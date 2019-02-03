exports.getLogin = (req, res, next) => {
  // const isLoggedin = req.get('Cookie').split(';')[0].trim().split('=')[1] === 'true';
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: false
  });
};

exports.postLogin = (req,res,next) => {
  // res.setHeader('Set-cookie','loggedin=true; HttpOnly');
  req.session.isLoggedIn = true;
  res.redirect('/');
}
